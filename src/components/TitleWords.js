import { Children, cloneElement, isValidElement } from 'react'

const splitText = (text, keyPrefix, state) => text.split(/(\s+)/).map((part, index) => {
  if (!part) {
    return null
  }

  if (/^\s+$/.test(part)) {
    return part
  }

  state.wordIndex += 1

  return (
    <span
      data-scroll-title-word="true"
      key={`${keyPrefix}-${index}`}
      style={{ '--scroll-title-word-index': state.wordIndex }}
    >
      {part}
    </span>
  )
})

const wrapNode = (node, state, keyPrefix = 'title-word') => {
  if (typeof node === 'string' || typeof node === 'number') {
    return splitText(String(node), keyPrefix, state)
  }

  if (!isValidElement(node)) {
    return node
  }

  const children = Children.toArray(node.props.children).map((child, index) => (
    wrapNode(child, state, `${keyPrefix}-${index}`)
  ))

  return cloneElement(node, { ...node.props, key: node.key || keyPrefix }, children)
}

export default function TitleWords({ as: Tag = 'span', children, ...props }) {
  const state = { wordIndex: 0 }

  return (
    <Tag data-scroll-title-words="true" {...props}>
      {Children.toArray(children).map((child, index) => wrapNode(child, state, `title-word-${index}`))}
    </Tag>
  )
}
