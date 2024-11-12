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
  nextWork = {
    dom: container,
    props: {
      children: [element]
    }
  }
}

let nextWork = null
const workLoop = (deadline) => {
  let shouldYield = false
  while (!shouldYield && nextWork) {
    nextWork = performWorkOfUnit(nextWork)

    shouldYield = deadline.timeRemaining() < 1
  }
  requestIdleCallback(workLoop)
}

const createDom = (type) =>  {
  return type === "TEXT_ELEMENT" ? document.createTextNode("") : document.createElement(type)
}

const updateProps = (dom, props) => {
  Object.keys(props).forEach(key => {
    if (key !== "children") {
      dom[key] = props[key]
    }
  })
}

const initChildren = (fiber) => {
  const children = fiber.props.children
  let prevChild = null
  children.forEach((child, index) => {
    const newFiber = {
      type: child.type,
      props: child.props,
      child: null,
      parent: fiber,
      sibling: null,
      dom: null,
    }

    if (index === 0) {
      fiber.child = newFiber
    } else {
      prevChild.sibling = newFiber
    }
    prevChild = newFiber
  })
}

const performWorkOfUnit = (fiber) => {
  if (!fiber.dom) {
    const dom = (fiber.dom = createDom(fiber.type))

    fiber.parent.dom.append(dom)

    updateProps(dom, fiber.props)
  }

  initChildren(fiber)

  if (fiber.child) {
    return fiber.child
  }

  if (fiber.sibling) {
    return fiber.sibling
  }

  return fiber.parent?.sibling
}

requestIdleCallback(workLoop)

const React = {
  createElement,
  render
}
export default React
