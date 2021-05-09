import "bootswatch/dist/lux/bootstrap.min.css";
import './App.css';
import {Switch, Route} from 'react-router-dom';
import React, { Component } from 'react';
import Header from './components/Header';
import Home from './components/Home';
import TodoList from './components/TodoList'
import Signin from '../src/components/signin.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'font-awesome/css/font-awesome.min.css'
import fire from './config/fire'

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    };

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  render() {
    return (
      <div className="App">
        { this.state.user ? ( <Home /> ) : ( <signin /> )   ( <TodoList />) }
      </div>
    );
  }
}


export default App;
