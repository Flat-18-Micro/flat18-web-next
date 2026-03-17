// Utilities for mapping section names to CSS variable tokens.
export const getSectionBackground = (sectionName) => {
  const kebabCase = sectionName.replace(/([A-Z])/g, '-$1').toLowerCase()
  return `var(--section-bg-${kebabCase})`
}

export const getSectionTextColor = (sectionName) => {
  const kebabCase = sectionName.replace(/([A-Z])/g, '-$1').toLowerCase()
  return `var(--section-text-${kebabCase})`
}
