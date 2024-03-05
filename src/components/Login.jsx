import {signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import { auth } from "../utils/firebase";

const Login = () => {

  const [form,setForm]=useState({email:"",password:""})
  const [errorMessage,setErrorMessage]=useState("")
 const handleSubmit=()=>{
  signInWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   setErrorMessage(`${errorCode}-${errorMessage}`)
  });
 }
  return (
    <form onSubmit={handleSubmit}> 
    <input type="email"id="email" placeholder="Enter Emailid" value={form.email} />
    <input type="password"  id="" placeholder="Enter Password" value={form.password}/>
    </form>
  );
};

export default Login;
