import React from "react";
import "../tabs_nav/TabsNav.css";
class Box extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "coconut" };

    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  //   handleChange(event) {
  //     this.setState({ value: event.target.value });
  //   }

  handleSubmit(event) {
    alert("Your plant is: " + this.state.value);
    event.preventDefault();
  }

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label className="box">
          My plant
          <br />
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="mint">민트 허브</option>
            <option value="cabbage">배추</option>
            <option value="My Lime Orange Tree">나의 라임오렌지 나무</option>
            <option value="cacao">카카오(톡)</option>
            <option value="gita">기타</option>
          </select>
        </label>
        <br />
        <input type="submit" value="Submit" className="sum"/>
      </form>
    );
  }
}
export default Box;


