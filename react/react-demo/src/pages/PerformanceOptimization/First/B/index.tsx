import { Component } from "react";

export default class A extends Component {
  state = {
    counter: 1,
  };

  shouldComponentUpdate(nextProps: any, nextState: any): boolean {
    console.log(nextProps, "nextProps");
    console.log(nextState, "nextContext");
    if (Object.is(this.props, nextProps) && Object.is(this.state, nextState)) {
      return false;
    }
    return true;
  }

  render() {
    return (
      <div>
        <div>B 组件</div>
        <button
          onClick={() =>
            this.setState({
              counter: Math.floor(Math.random() * 3 + 1),
            })
          }
        >
          + 1
        </button>
        <div> counter: {this.state.counter}</div>
      </div>
    );
  }
}
