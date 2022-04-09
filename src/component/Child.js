import { Component } from "react";
class Child extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={() => {
            return this.increment();
          }}
        >
          Increment
        </button>
        {this.state.count}
      </div>
    );
  }
}
export default Child;
