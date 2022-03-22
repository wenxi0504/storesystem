import React, { Component } from "react";
import "./login.css";
import logo from '../../assets/images/logo.png';
import { Form ,Button } from 'react-bootstrap';

export default class Login extends Component {

  function FormValid(){
    const [validated,setValidated] =useState(false);
    const handleSubmit =(event)=>{
      const form=event.currentTarget;
      if(form.checkValidity()===false)
      {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    }

  };
  render() {
   

    return (
      <div className="login">
        <header className="login-header">
            <img src={logo} alt="logo" />
          <h1>Shop Management System</h1>
        </header>

        <section className="login-content">
            <h3>User Login</h3>
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicUser">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="user" placeholder="User Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Button  variant="primary" type="submit">
    Submit
  </Button>
</Form>

        </section>
      </div>

    )
  }
}
