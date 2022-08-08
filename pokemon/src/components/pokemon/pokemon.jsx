import React, { Component } from "react";
import {useEffect, useState} from "react";

export class Pokemon extends React.Component {

    constructor (props) {
    super(props)
    this.state = {
      health : props.hp,
      picture : props.image
    }
  }
  
  render() {
  return (
    <div className="App">
      <h1>Pokemon</h1>
      {/* <button onClick={() => updateHealth(-10)}>Attack!</button> */}
      <h2>Health Level: {this.state.health} </h2>
      <img width="200px" src={this.state.picture}/>


    </div>
  );}
}


