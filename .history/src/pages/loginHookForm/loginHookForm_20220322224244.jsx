import React, { Component } from "react";
import content from '../../statics/index';

export default function LoginHookForm() {
  return <div>
      <h1>Login Hook Form</h1>
      <form>
          {
             content.inputs.map(
                (input,key) => {
                    return(

<div key={key}>
    <p>
        <label className="label">{input.label}</label>
    </p>
    <p>
        <input name={input.name} className="input"></input>
    </p>
</div>

                    )
                }
                 
             )
          }
          <button className="btn" type="submit">submit</button>
      </form>
  </div>;
}
