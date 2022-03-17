import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
class App extends Component{

  render(){
    return(

      <div><FontAwesomeIcon icon={solid('user-secret')} /> App</div>
    )
  }
}

export default App;
