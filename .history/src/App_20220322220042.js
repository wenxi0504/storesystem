import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid, regular, brands } from '@fortawesome/fontawesome-svg-core/import.macro'; // <-- import styles to be used
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './pages/login/login';
import Admin from './pages/admin/admin';
import LoginHookForm from './pages/loginHookForm/loginHookForm'
class App extends Component{

  render(){
    return(

      <BrowserRouter>
      <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/loginhook' element={<loginHookForm />}/>
      
      </Routes>
      </BrowserRouter>
    )
  }
}

export default App;
