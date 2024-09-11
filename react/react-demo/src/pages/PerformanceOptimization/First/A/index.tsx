import { PureComponent } from "react";

export default class A extends PureComponent {
  state = {
    counter: 1,
  };

  render() {
    return (
      <div>
        <div>A 组件</div>
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
