const createTextNode = (text, ...children) => {
  return {
    type: "TEXT_ELEMENT",
    props: {
      nodeValue: text,
      children: children,
    },
  }
}

const createElement = (type, props, ...children) => {
  return {
    type,
    props: {
      ...props,
      children: children.map(child => {
        return typeof child === "string" ? createTextNode(child) : child
      }),
    },
  }
}

const render = (element, container) => {
  const dom = element.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type)

  const props = element.props || {}
  
  Object.keys(props).filter(item => item !== "children").forEach(name => {
    dom[name] = props[name]
  })

  const children = props.children || []
  children.forEach(child => {
    render(child, dom)
  })

  container.appendChild(dom)
}

const React = {
  createElement,
  render
}
export default React
