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
         // resolver:yupResolver(schema),
         defaultValues:{
             firstName:"",
             password:""
         }
      }
  );
  const onSubmit = data => console.log("submit"+data);
  console.log(errors);
  const firstName=(watch("firstName"));
  const password=(watch("password"));

  return(
    <div>
    <h1>Login Hook Form</h1>
    <form
      onSubmit={handleSubmit(onSubmit)}//{()=>{handleSubmit(onSubmit)}}
    >
          <div>
            <p>
              <label className="label">User Name</label>
            </p>
            <p>
              <input {...register("username",{ required:"This is required", maxLength: 20, pattern: /^[A-Za-z]+$/i })}
               
              ></input>
            </p>
            <p>{firstName}</p>
            <p>{errors.firstName?.message}</p>
            <p>
              <label className="label">Password</label>
            </p>
            <p>
              <input {...register("password",{ required: "This is required",minLength:{value:6,message:"Min length is 6"}})}
               
              ></input>
            </p>
            <p>{password}</p>
            <p>{errors.password?.message}</p>
          </div>
      
          <input type="submit" />
    </form>
  </div>




  )
  
}
