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

const textE1 = createTextNode("app2")
const App = createElement("div", { id: "app" }, textE1)

const dom = document.createElement(App.type)
dom.id = App.props.id
document.querySelector("#root").append(dom)
const textNode = document.createTextNode("")
textNode.nodeValue = textE1.props.nodeValue
dom.appendChild(textNode)
