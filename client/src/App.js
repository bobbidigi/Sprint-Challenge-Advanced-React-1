import React, { Component } from 'react'
import List from './List'
import './index.css';
import Navbar from './Navbar'
export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <List/>
      </div>
    )
  }
}

