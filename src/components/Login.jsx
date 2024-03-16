import {signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../utils/firebase";


const Login = () => {

  const [form,setForm]=useState({email:"",password:""})
  const handleChange=(e)=>{
    setForm({...form,[e.target.id]:e.target.value})

  }
  const [errorMessage,setErrorMessage]=useState("")
 const handleSubmit=()=>{
  signInWithEmailAndPassword(auth, form.email, form.password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
   setErrorMessage(`${errorCode}-${errorMessage}`)
  });
 }
  return (
    <>
    <form onSubmit={handleSubmit}>
    <div>   
    <input type="email"id="email" placeholder="Enter Emailid" value={form.email} onChange={handleChange} />
    </div>
  <div>
    <input type="password"  id="" placeholder="Enter Password" value={form.password} onChange={handleChange}/>
   </div>
    <button type="submit">SignIn</button>
    </form>
    <p>Dont have an account?<Link to="/signup" className="text-blue-4000">SignUp</Link></p>
    </>
  );
};

export default Login;
