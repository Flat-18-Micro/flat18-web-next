// Analytics helper for Umami, Meta Pixel, Twitter Pixel and Signal events.
type AnalyticsProvider = 'umami' | 'meta' | 'twitter'
type QueuedAnalyticsEvent = {
  provider: AnalyticsProvider
  event: string
  data?: Record<string, any>
}

declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, any>) => void;
    };
    fbq?: (action: string, event: string, data?: Record<string, any>) => void;
    twq?: (action: string, event: string, data?: Record<string, any>) => void;
    signal?: ((category: string, event: string, data?: Record<string, any>) => void) & {
      q?: Array<[string, string, Record<string, any> | undefined]>;
    };
    __flat18AnalyticsQueue?: QueuedAnalyticsEvent[];
  }
}

let analyticsRetryId: number | null = null

const flushAnalyticsQueue = () => {
  if (typeof window === 'undefined' || !window.__flat18AnalyticsQueue?.length) return

  const pending: QueuedAnalyticsEvent[] = []

  window.__flat18AnalyticsQueue.forEach(({ provider, event, data }) => {
    try {
      if (provider === 'umami' && typeof window.umami?.track === 'function') {
        window.umami.track(event, data)
        return
      }

      if (provider === 'meta' && typeof window.fbq === 'function') {
        window.fbq('track', event, data)
        return
      }

      if (provider === 'twitter' && typeof window.twq === 'function') {
        window.twq('event', event, data)
        return
      }
    } catch (error) {
      console.error(`Error tracking ${provider} event:`, error)
      return
    }

    pending.push({ provider, event, data })
  })

  window.__flat18AnalyticsQueue = pending
}

const scheduleAnalyticsFlush = () => {
  if (typeof window === 'undefined' || analyticsRetryId !== null) return

  let attempts = 0
  analyticsRetryId = window.setInterval(() => {
    attempts += 1
    flushAnalyticsQueue()

    if (!window.__flat18AnalyticsQueue?.length || attempts >= 40) {
      window.clearInterval(analyticsRetryId as number)
      analyticsRetryId = null
    }
  }, 250)
}

const queueAnalyticsEvent = (provider: AnalyticsProvider, event: string, data?: Record<string, any>) => {
  if (typeof window === 'undefined') return

  window.__flat18AnalyticsQueue ||= []
  window.__flat18AnalyticsQueue.push({ provider, event, data })
  flushAnalyticsQueue()
  if (window.__flat18AnalyticsQueue.length) scheduleAnalyticsFlush()
}

const queueSignalEvent = (category: string, event: string, data?: Record<string, any>) => {
  if (typeof window === 'undefined') return

  if (typeof window.signal !== 'function') {
    const existingSignal = window.signal as NonNullable<Window['signal']> | undefined
    const queuedSignal = ((queuedCategory: string, queuedEvent: string, metadata?: Record<string, any>) => {
      queuedSignal.q?.push([queuedCategory, queuedEvent, metadata])
    }) as NonNullable<Window['signal']>
    queuedSignal.q = existingSignal?.q || []
    window.signal = queuedSignal
  }

  window.signal(category, event, data)
}

// Umami event tracking
export const trackUmamiEvent = (event: string, data?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && typeof window.umami?.track === 'function') {
      window.umami.track(event, data);
    } else {
      queueAnalyticsEvent('umami', event, data)
    }
  } catch (error) {
    console.error('Error tracking Umami event:', error);
  }
};

// Meta Pixel event tracking
export const trackMetaPixelEvent = (event: string, data?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && typeof window.fbq === 'function') {
      window.fbq('track', event, data);
    } else {
      queueAnalyticsEvent('meta', event, data)
    }
  } catch (error) {
    console.error('Error tracking Meta Pixel event:', error);
  }
};

// Twitter Pixel event tracking
export const trackTwitterEvent = (event: string, data?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && typeof window.twq === 'function') {
      window.twq('event', event, data);
    } else {
      queueAnalyticsEvent('twitter', event, data)
    }
  } catch (error) {
    console.error('Error tracking Twitter event:', error);
  }
};

// Combined tracking function
export const trackEvent = (event: string, data?: Record<string, any>) => {
  trackUmamiEvent(event, data);
  trackMetaPixelEvent(event, data);
  trackTwitterEvent(event, data);
};

export const trackSignalEvent = (label: string) => {
  try {
    queueSignalEvent('event', 'cta_click', { label })
  } catch (error) {
    console.error('Error tracking signal event:', error);
  }
};

// SignalMap treats these as completed contact outcomes, distinct from an
// ordinary CTA click. Do not pass names, email addresses or message content.
export const trackSignalConversion = (name: string, data?: Record<string, any>) => {
  try {
    queueSignalEvent('conversion', name, data)
  } catch (error) {
    console.error('Error tracking signal conversion:', error);
  }
};

export const normaliseSignalLabel = (value: string) =>
  value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '_')
    .replace(/^_|_$/g, '')

// Specific event tracking functions as per directives
export const trackBookCallClick = (source: 'hero' | 'header' | 'pricing' | 'footer' = 'hero') => {
  trackEvent('book_call_click', { source });
};

export const trackCTAHeroClick = (cta: string) => {
  trackEvent('cta_hero_click', { cta });
};

export const trackLeadFormSubmit = (form: string) => {
  trackEvent('lead_form_submit', { form });
  trackMetaPixelEvent('Lead', { content_name: form });
};

export const trackPricingView = () => {
  trackEvent('pricing_view');
};

export const trackCaseStudyView = (caseStudy: string) => {
  trackEvent('case_study_view', { case_study: caseStudy });
};

export const trackNewsletterSignup = (source: string) => {
  trackEvent('newsletter_signup', { source });
};

export const trackServiceView = (service: string) => {
  trackEvent('service_view', { service });
};

export const trackWorkView = (project: string) => {
  trackEvent('work_view', { project });
};

export const trackThemeSwitch = (theme: 'light' | 'dark' | 'system') => {
  trackEvent('theme_switch', { theme });
};

export const trackMegaMenuOpen = () => {
  trackEvent('mega_menu_open');
};

export const trackMobileMenuOpen = () => {
  trackEvent('mobile_menu_open');
};

export const trackChatOpen = (source: string) => {
  trackEvent('chat_open', { source });
};

export const trackDownload = (file: string, source: string) => {
  trackEvent('download', { file, source });
};

export const trackExternalLink = (url: string, source: string) => {
  trackEvent('external_link_click', { url, source });
};

export const trackPageView = (page: string) => {
  trackEvent('page_view', { page });
};

export const trackScrollDepth = (depth: number, page: string) => {
  trackEvent('scroll_depth', { depth, page });
};

export const trackTimeOnPage = (seconds: number, page: string) => {
  trackEvent('time_on_page', { seconds, page });
};

// Hook for tracking page views
export const usePageView = (page: string) => {
  if (typeof window !== 'undefined') {
    trackPageView(page);
  }
};

// Hook for tracking scroll depth
export const useScrollDepth = (page: string) => {
  if (typeof window !== 'undefined') {
    let maxDepth = 0;
    let timeOnPage = Date.now();

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollDepth = Math.round(((scrollTop + windowHeight) / documentHeight) * 100);

      if (scrollDepth > maxDepth) {
        maxDepth = scrollDepth;
        
        // Track at 25%, 50%, 75%, and 100% milestones
        if (maxDepth >= 25 && maxDepth < 50) {
          trackScrollDepth(25, page);
        } else if (maxDepth >= 50 && maxDepth < 75) {
          trackScrollDepth(50, page);
        } else if (maxDepth >= 75 && maxDepth < 100) {
          trackScrollDepth(75, page);
        } else if (maxDepth >= 100) {
          trackScrollDepth(100, page);
        }
      }
    };

    const handleBeforeUnload = () => {
      const timeSpent = Math.round((Date.now() - timeOnPage) / 1000);
      trackTimeOnPage(timeSpent, page);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }
};

// Enhanced analytics for specific components
export const analytics = {
  // Hero section
  hero: {
    ctaClick: (cta: string) => trackCTAHeroClick(cta),
    bookCall: () => trackBookCallClick('hero'),
  },
  
  // Navigation
  nav: {
    bookCall: () => trackBookCallClick('header'),
    megaMenuOpen: () => trackMegaMenuOpen(),
    mobileMenuOpen: () => trackMobileMenuOpen(),
    serviceClick: (service: string) => trackServiceView(service),
  },
  
  // Pricing
  pricing: {
    view: () => trackPricingView(),
    bookCall: () => trackBookCallClick('pricing'),
    formSubmit: () => trackLeadFormSubmit('pricing'),
  },
  
  // Work/Portfolio
  work: {
    view: (project: string) => trackWorkView(project),
    caseStudyView: (caseStudy: string) => trackCaseStudyView(caseStudy),
    externalLink: (url: string) => trackExternalLink(url, 'portfolio'),
  },
  
  // Footer
  footer: {
    bookCall: () => trackBookCallClick('footer'),
    socialClick: (platform: string) => trackExternalLink(platform, 'footer'),
    newsletterSignup: () => trackNewsletterSignup('footer'),
  },
  
  // Chat
  chat: {
    open: (source: string) => trackChatOpen(source),
    formSubmit: () => trackLeadFormSubmit('chat'),
  },
  
  // Theme
  theme: {
    switch: (theme: 'light' | 'dark' | 'system') => trackThemeSwitch(theme),
  },
  
  // General
  general: {
    download: (file: string, source: string) => trackDownload(file, source),
    externalLink: (url: string, source: string) => trackExternalLink(url, source),
    pageView: (page: string) => trackPageView(page),
  },
};

export default analytics;
