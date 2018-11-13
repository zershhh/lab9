import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.add = this.add.bind(this);
    this.minus = this.minus.bind(this);
    this.state = {
      count: 0
    };
  }

  add() {
    this.setState({
      count: this.state.count + 1
    });
  }

  minus() {
    this.setState({
      count: this.state.count - 1 
    });
  }

  render() {
    return (
      <div className="App" >
        
        {/* <button className="container"  onClick={this.add}> ++++++ </button>
        <button className="container"  onClick={this.minus}> ------ </button> */}
        <div class="container" >
        
         <a href="www.google.com" id="x"><img src="http://www.milanstolicny.com/wp-content/uploads/2017/11/40014EBB-06CF-4800-AE17-66088EC498C7iphone_photo.jpg" /></a> 
         <button class="btn" onClick={this.add} > + </button>
        </div>
        <div id="size"> {this.state.count} </div>
        <div class="container">
         
               <a href="www.google.com" id="x"><img src="http://iwantless.co.uk/images/iwantless3.jpg" /></a> 
               <button class="btn" onClick={this.minus} > - </button>
        </div>
        
  
        
      </div>
      
    );
  }
}


export default App;