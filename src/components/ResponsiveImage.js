const buildSrcSet = (src, widths) => {
  const extensionIndex = src.lastIndexOf('.')
  if (extensionIndex === -1) {
    return { srcSet: undefined, fallbackSrc: src }
  }

  const base = src.slice(0, extensionIndex)
  const extension = src.slice(extensionIndex)
  if (extension.toLowerCase() === '.svg') {
    return { srcSet: undefined, fallbackSrc: src }
  }

  const sortedWidths = [...widths].sort((a, b) => a - b)
  const maxWidth = sortedWidths[sortedWidths.length - 1]

  return {
    srcSet: sortedWidths.map(width => `${base}-w${width}${extension} ${width}w`).join(', '),
    fallbackSrc: `${base}-w${maxWidth}${extension}`,
  }
}

export default function ResponsiveImage({
  src,
  alt,
  width,
  height,
  sizes,
  className,
  loading = 'lazy',
  fetchPriority,
  decoding = 'async',
  widths = [400, 800, 1000],
  ...rest
}) {
  const { srcSet, fallbackSrc } = buildSrcSet(src, widths)

  return (
    <img
      src={fallbackSrc}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      {...rest}
    />
  )
}
