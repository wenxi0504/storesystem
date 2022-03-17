import React, { Component } from "react";
import "./login.css";
import logo from '../../assets/images/logo.png'

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
        </section>
      </div>

    )
  }
}
