import React, { Component } from "react";
import * as yup from "yup";
import {Formik} from "formik";
import { Form ,Button } from 'react-bootstrap';
import "./login.css";
import logo from '../../assets/images/logo.png';

export default class Login extends Component {
  
  
  render() {
    const schema=yup.object().shape(
      { userName:yup.string().required(),
        password:yup.string().required()
  
      }
    );

    return (
      <div className="login">
        <header className="login-header">
            <img src={logo} alt="logo" />
          <h1>Shop Management System</h1>
        </header>

        <section className="login-content">
            <h3>User Login</h3>
            <Form>
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
