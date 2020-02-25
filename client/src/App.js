import React, { Component } from 'react'
import List from './List'
import './index.css';
import Navbar from './Navbar'
// import {Route} from 'react-router-dom'
// import PlayerDetails from './PlayerDetails'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <List/>
        {/* <Route exact path="/" render={props => <List {...props}/>}/> */}
        {/* <Route exact path="/player" render={ props =><PlayerDetails {...props}/>}/> */}
      </div>
    )
  }
}

