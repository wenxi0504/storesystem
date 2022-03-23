import React, { Component } from "react";
import content from './static';

export default function LoginHookForm() {
  return <div>
      <h1>Login Hook Form</h1>
      <form>
          {
              content
          }
          <div>
              <p>
                  <label>Username</label>
              </p>
              <p>
                  <input/>
              </p>
          </div>
      </form>
  </div>;
}
