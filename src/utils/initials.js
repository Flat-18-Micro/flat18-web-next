const STOP_WORDS = new Set([
  'of',
  'and',
  'the',
  'for',
  'at',
  'in',
  'on',
  'to',
  'with',
  'from',
  'by'
])

export const getTwoLetterInitials = (value = '') => {
  if (!value) return ''

  const cleaned = value.trim().replace(/\s+/g, ' ')
  if (!cleaned) return ''

  const parts = cleaned.split(/[\s-]+/).filter(Boolean)
  if (parts.length === 0) return ''

  const significantParts = parts.filter((part) => !STOP_WORDS.has(part.toLowerCase()))
  const sourceParts = significantParts.length >= 2 ? significantParts : parts

  if (sourceParts.length >= 2) {
    return `${sourceParts[0][0]}${sourceParts[1][0]}`.toUpperCase()
  }

  return sourceParts[0].slice(0, 2).toUpperCase()
}
