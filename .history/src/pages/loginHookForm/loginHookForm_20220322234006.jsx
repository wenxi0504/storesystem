import React, { Component } from "react";
import content from "../../statics/index";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

//yup schema
const schema = yup.object().shape(
    {
        username:yup.string().required(),
        password:yup.string().required().min(5)
        
    }
)

export default function LoginHookForm() {
  const { register, handleSubmit,watch,formState:{errors}  } = useForm(
      {
          resolver:yupResolver(schema),
      }
  );
  const onSubmit = data => console.log("submit"+data);
 
  console.log(errors);
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
                  {...register(input.name)}
                  className="input"
                  type={input.type}
                 
                ></input>
              </p>
              {/* <p>{errors.[input.nameRequired].message}</p> */}
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
