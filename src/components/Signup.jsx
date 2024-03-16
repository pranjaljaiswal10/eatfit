import { useState } from "react";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, updateCurrentUser} from "firebase/auth";
import { Link } from "react-router-dom";


const Signup = () => {
    const [form,setForm]=useState({email:"",name:"",password:""})
    const handleChange=(e)=>{
      setForm({...form,[e.target.id]:e.target.value})

    }
    const [errorMessage,setErrorMessage]=useState("")
    const handleSubmit=()=>{
     auth;
  
     createUserWithEmailAndPassword(auth, form.email, form.password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // updateCurrentUser(auth,user=>)
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
  <div className="text-center my-48 py-16 border-2 rounded border-gray-500 w-1/3 mx-auto    bg-no bg-repeat  bg-image">
    <form onSubmit={handleSubmit} className="space-y-4 "> 
   <div > 
   <input type="email"id="email" className="px-2 py-1 "  placeholder="Enter Emailid" value={form.email} onChange={handleChange} />
    </div>
   <div >
    <input type="text"  id="name" className="px-2 py-1" placeholder="Enter Name" value={form.name} onChange={handleChange}/>
    </div>
    <div >
    <input type="password"  id="password" className="px-2 py-1" placeholder="Enter Password" value={form.password} onChange={handleChange}/>
    </div>

    <button type="submit">SignUp</button>
    </form>
    <p>Already have an account?<Link to="/signin" className="text-sky-600">SignIn here</Link></p>
    </div>
    );
};

export default Signup;
