import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Login, Main, MainLogin, HumidityChart, TempLineChart, Signup} from './containers';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/Login" component={Login} />
        <Route path="/MainLogin" component={MainLogin} />
        <Route path="/Main" component={Main} /> 
        <Route path="/signup" component={Signup} />
        <Route path="/TempLineChart" component={TempLineChart} />
        <Route path="/HumidityChart" component={HumidityChart} />
      </div>
    );
  }
}

export default App;
