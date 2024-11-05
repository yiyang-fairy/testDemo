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
      children: typeof children === "string" ? createTextNode(children) : children,
    },
  }
}

const render = (element, container) => {
  const dom = element.type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(element.type)

  Object.keys(element.props).filter(item => item !== undefined || item !== null).forEach(name => {
    if (name !== "children") {
      dom[name] = element.props[name]
    }
  })

  const children = element.props.children
  children.forEach(child => {
    render(child, dom)
  })

  container.appendChild(dom)
}

const textEl = createTextNode("app")
const App = createElement("div", { id: "app" }, textEl)
console.log(App, "App")
render(App, document.querySelector("#root"))
