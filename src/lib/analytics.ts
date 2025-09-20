// Analytics helper for Umami and Meta Pixel events
declare global {
  interface Window {
    umami?: {
      track: (event: string, data?: Record<string, any>) => void;
    };
    fbq?: (action: string, event: string, data?: Record<string, any>) => void;
    twq?: (action: string, event: string, data?: Record<string, any>) => void;
  }
}

// Umami event tracking
export const trackUmamiEvent = (event: string, data?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && window.umami) {
      window.umami.track(event, data);
      console.log(`Umami event tracked: ${event}`, data);
    } else {
      console.warn('Umami not available');
    }
  } catch (error) {
    console.error('Error tracking Umami event:', error);
  }
};

// Meta Pixel event tracking
export const trackMetaPixelEvent = (event: string, data?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && window.fbq) {
      window.fbq('track', event, data);
      console.log(`Meta Pixel event tracked: ${event}`, data);
    } else {
      console.warn('Meta Pixel not available');
    }
  } catch (error) {
    console.error('Error tracking Meta Pixel event:', error);
  }
};

// Twitter Pixel event tracking
export const trackTwitterEvent = (event: string, data?: Record<string, any>) => {
  try {
    if (typeof window !== 'undefined' && window.twq) {
      window.twq('event', event, data);
      console.log(`Twitter event tracked: ${event}`, data);
    } else {
      console.warn('Twitter Pixel not available');
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

// Specific event tracking functions as per directives
export const trackBookCallClick = (source: 'hero' | 'header' | 'pricing' | 'footer' = 'hero') => {
  trackEvent('book_call_click', { source });
};

export const trackCTAHeroClick = (cta: string) => {
  trackEvent('cta_hero_click', { cta });
};

export const trackLeadFormSubmit = (form: string) => {
  trackEvent('lead_form_submit', { form });
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
