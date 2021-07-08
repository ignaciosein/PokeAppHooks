import React, { Component } from 'react';
import {BrowserRouter, Route, Switch } from "react-router-dom";
import "./Main.css";

import Forms from "../../components/Form";
import Search from "../../components/Search";
 

class Main extends Component {
 
  render() {
    return (

      <main>
      <div>
   
        <Switch>
        <Route exact path="/formulario" component={Forms}   />
        <Route  path="/search" component={Search}   />
        </Switch>
      
      </div>
      </main>
    );
  }
}
export default Main;
