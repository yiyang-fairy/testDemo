import React from "./core/React.js"

function Counter(props) {
  return (
    <div>
      <div>count {props.num}</div>
    </div>
  )
}

function CounterContainer() {
  return (
    <div>
      <Counter num={12}></Counter>
      <Counter num={24}></Counter>
      <Counter num={36}></Counter>
    </div>
  )
}

function App() {
  return (
    <div>
      mini-react
      <CounterContainer></CounterContainer>
    </div>
  )
}

export default App
