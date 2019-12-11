import React, { Component } from 'react';
import './App.css';
import Login from './components/login';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';



class App extends Component {

  render() {    
      return (
        <div className="App">
          <AppBar position="static" color="default">
            <Toolbar display>CarList</Toolbar>
          </AppBar>
          <Login/>
        </div>
      );
    }
   
}
export default App;
