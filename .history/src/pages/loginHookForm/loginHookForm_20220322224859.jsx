import React, { Component } from "react";
import content from '../../statics/index';
import {useForm} from 'react-hook-form';

export default function LoginHookForm() {
const {register,handleSubmit, errors} =useForm();








//return page content
  return <div>
      <h1>Login Hook Form</h1>
      <form onSubmit={()=>handleSubmit()}>
          {
             content.inputs.map(
                (input,key) => {
                    return(

<div key={key}>
    <p>
        <label className="label">{input.label}</label>
    </p>
    <p>
        <input name={input.name} className="input" type={input.type} ref={register}></input>
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
