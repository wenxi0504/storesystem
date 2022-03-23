import React, { Component } from "react";
import content from "../../statics/index";
import { useForm } from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

//yup schema
const schema = yup.object().shape(
    {
        name:yup.string().required(),
        
    }
)





export default function LoginHookForm() {
  const { register, handleSubmit, errors } = useForm(
      {
          resolver:yupResolver,
      }
  );
  const onSubmit = (data) => {
    console.log(data);
  };
  //return page content
  return (
    <div>
      <h1>Login Hook Form</h1>
      <form
        onSubmit={() => {
          handleSubmit(onSubmit);
        }}
      >
        {content.inputs.map((input, key) => {
          return (
            <div key={key}>
              <p>
                <label className="label">{input.label}</label>
              </p>
              <p>
                <input
                  name={input.name}
                  className="input"
                  type={input.type}
                  {...register(input.name, {required:true})}
                ></input>
              </p>
            </div>
          );
        })}
        <button className="btn" type="submit">
          submit
        </button>
      </form>
    </div>
  );
}
