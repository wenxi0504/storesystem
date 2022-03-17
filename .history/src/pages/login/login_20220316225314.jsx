import React, { Component } from "react";
import "./login.css";
import logo from '../../assets/images/logo.png'
import { Form ,Button } from 'react-bootstrap';

export default class Login extends Component {
  render() {
    return (
      <div className="login">
        <header className="login-header">
            <img src={logo} alt="logo" />
          <h1>Shop Management System</h1>
        </header>

        <section className="login-content">
            <h3>User Login</h3>
            <Form>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" placeholder="Enter email" />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" placeholder="Password" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
</Form>

        </section>
      </div>

    )
  }
}
