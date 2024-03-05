import { useState } from "react";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword} from "firebase/auth";


const Signup = () => {
    const [form,setForm]=useState({email:"",name:"",password:""})
    const [errorMessage,setErrorMessage]=useState()
    const handleSubmit=()=>{
     auth;
  
     createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      setErrorMessage(`${errorCode}-${errorMessage}`)
      // ..
    });
    }
  return (
    <form onSubmit={handleSubmit}> 
    <input type="email"id="email" placeholder="Enter Emailid" value={form.email} />
    <input type="password"  id="" placeholder="Enter Password" value={form.password}/>
    </form>
    );
};

export default Signup;
