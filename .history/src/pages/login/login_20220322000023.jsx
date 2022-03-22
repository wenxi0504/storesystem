import React, { Component } from "react";
import * as yup from "yup";
import { Formik } from "formik";
import { Form, Button } from "react-bootstrap";
import "./login.css";
import logo from "../../assets/images/logo.png";

function Login(){
  const schema = yup
  .object()
  .shape({
    userName: yup.string().required(),
    password: yup.string().required(),
  });

return(

  <div className="login">
  <header className="login-header">
    <img src={logo} alt="logo" />
    <h1>Shop Management System</h1>
  </header>

  <section className="login-content">
    <h3>User Login</h3>

    < Formik validationSchema={schema} onSubmit={console.log} initialValues={
      {
        userName:"",
        password:""
      }
    }>
  { ({handleSubmit,handleChange,values,touched,errors})=>(
    <Form noValidate onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicUser">
        <Form.Label>User Name</Form.Label>
        <Form.Control 
         type="user"
         name="User Name" 
         placeholder="User Name"
         value={values.userName}
         onChange={handleChange}
         isValid={touched.userName && !errors.userName}
         isInvalid={!!errors.userName}/>
          <Form.Control.Feedback >
         Looks good!
        </Form.Control.Feedback>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control 
        type="password" 
        name="password"
        placeholder="Password" 
        value={values.password}
        onChange={handleChange}
        isValid={touched.password&&!errors.password}
        isInvalid={!!errors.password}/>
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
)}
    </Formik>
  </section>
</div>
)
  }


export default Login;























// export default class Login extends Component {
//   render() {
//     const schema = yup
//       .object()
//       .shape({
//         userName: yup.string().required(),
//         password: yup.string().required(),
//       });
//     return (
//       <div className="login">
//         <header className="login-header">
//           <img src={logo} alt="logo" />
//           <h1>Shop Management System</h1>
//         </header>

//         <section className="login-content">
//           <h3>User Login</h3>

//           < Formik validationSchema={schema} onSubmit={console.log} initialValues={
//             {
//               userName:"",
//               password:""
//             }
//           }>
//         { ({handleSubmit,handleChange,values,touched,errors})=>(
//           <Form noValidate onSubmit={handleSubmit}>
//             <Form.Group className="mb-3" controlId="formBasicUser">
//               <Form.Label>User Name</Form.Label>
//               <Form.Control 
//                type="user"
//                name="User Name" 
//                placeholder="User Name"
//                value={values.userName}
//                onChange={handleChange}
//                isValid={touched.userName && !errors.userName}
//                isInvalid={!!errors.userName}/>
//                 <Form.Control.Feedback >
//                Looks good!
//               </Form.Control.Feedback>
//             </Form.Group>

//             <Form.Group className="mb-3" controlId="formBasicPassword">
//               <Form.Label>Password</Form.Label>
//               <Form.Control 
//               type="password" 
//               name="password"
//               placeholder="Password" 
//               value={values.password}
//               onChange={handleChange}
//               isValid={touched.password&&!errors.password}
//               isInvalid={!!errors.password}/>
//             </Form.Group>
//             <Button variant="primary" type="submit">
//               Submit
//             </Button>
//           </Form>
//     )}
//           </Formik>
//         </section>
//       </div>
//     );
//   }
// }
