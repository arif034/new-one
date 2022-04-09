import "./styles.css";
import { Component } from "react";
import Child from "./component/Child.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Child />
      </div>
    );
  }
}
export default App;
