import React, { Component } from "react";
import Header from "../components/Header/Header";
import TabComponent from "../components/tabs_nav/TabComponent";
import Footer from "../components/Footer/Footer";
//import TabContentOne from "../components/Button/TabContentOne";
//import TempLineChart from "../components/Chart/TempLineChart";  


class Main extends Component {
  render() {
    return (
      <div className="back">
        <Header />
        <TabComponent />
        <Footer />
      </div>
    );
  }
}

export default Main;
