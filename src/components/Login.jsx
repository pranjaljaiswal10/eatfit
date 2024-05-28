import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  const location = useLocation();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed in
        setErrorMessage("");
        const user = userCredential.user;
        const origin = location.state?.from?.pathname || "/cart";
        navigate(origin);
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}-${errorMessage}`);
        if (errorCode == "auth/invalid-credential") {
          navigate("/signup");
        }
      });
  };
  return (
    <div className="h-[530px]">
    <div className="text-center p-20 mt-28 bg-indigo-500 border-2 rounded border-gray-500 mx-auto w-96">
      <h1 className="my-4 text-2xl font-bold">Welcome Back !</h1>
      <form onSubmit={handleSubmit} className="space-y-4 mb-4">
        <div>
          <input
            type="email"
            id="email"
            placeholder="Email-id"
            className="px-3 py-2 rounded w-60 placeholder-gray-600"
            value={form.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="password"
            id="password"
            placeholder="Password"
            className="px-3 py-2 rounded w-60 placeholder-gray-600"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="py-1 my-2 rounded-lg border-gray-400  text-white border-2 px-4 bg-blue-700"
        >
          SignIn
        </button>
      </form>
      {errorMessage && (
        <p className="text-red-600 font-bold ">{errorMessage}</p>
      )}
      <p>
        Dont have an account?
        <Link to="/signup" className="text-sky-800 font-bold">
          SignUp
        </Link>
      </p>
    </div>
    </div>
  );
};

export default Login;
