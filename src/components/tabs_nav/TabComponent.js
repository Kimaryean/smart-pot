import React, { Component } from "react";
import "./TabsNav.css";
import { Link } from "react-router-dom";
import Box from "./box";

class TabComponent extends Component {
  render() {
    return (
    
      <div>
        <div >
        <img src={require("../../assets/Main.png")} 
          alt="Main" className="main"/>
            <img src={require("../../assets/p1.png")} 
          alt="p1" className="p1"/>
          </div>
          <img
            src={require("../../assets/smartpot.png")}
            alt="smartpot"
            className="as"
          />
       
        <div className="container">
          <div className="tabs-nav-container">
            <Link to="/HumidityChart">
              <img src={require("../../assets/drop.png")} alt="Drop" />
            </Link>
            <p>
              <strong>Humidity</strong>
            </p>
          </div>
          <div className="tabs-nav-container">
            <img src={require("../../assets/leaf.png")} alt="Leaf" />
            <Box className="box" />
          </div>
          <div className="tabs-nav-container">
            <Link to="/TempLineChart">
              <img src={require("../../assets/temp.png")} alt="Temp" />
            </Link>
            <p>
              <strong>Temperature</strong>
            </p>
          </div>
        </div>
     </div>
     
    );
  }
}
export default TabComponent;
