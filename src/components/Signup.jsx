import { useState } from "react";
import { auth } from "../utils/firebase";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { checkValidData } from "../utils/validation";

const Signup = () => {
  const [form, setForm] = useState({ email: "", name: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.id]: e.target.value });
  };
  const [errorMessage, setErrorMessage] = useState("");
  const [validCheckMessage, setValidCheckMessage] = useState(null);
  const handleSubmit = (e) => {
    e.preventDefault();

    const isValid = checkValidData(form.email, form.name, form.password);
    setValidCheckMessage(isValid);
    if (isValid) return;
    createUserWithEmailAndPassword(auth, form.email, form.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        updateProfile(user, {
          displayName: form.name,
        })
          .then(() => {
            const { uid, displayName, email } = auth.currentUser;
            dispatch(addUser({ id: uid, name: displayName, email: email }));
            navigate("/");
          })
          .catch((error) => {
            const { code, message } = error;
            setErrorMessage(`${code}-${message}`);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(`${errorCode}-${errorMessage}`);
        // ..
      });
  };
  return (
    <div className="h-[530px]">
      <div className="text-center p-20 mt-28 bg-indigo-500 border-2 rounded border-gray-500 mx-auto w-[450px]">
        <h1 className="my-6 text-xl font-bold">Create An Account</h1>
        <form onSubmit={handleSubmit} className="space-y-4  mb-4">
          <div>
            <input
              type="email"
              id="email"
              className="px-3 py-2 rounded w-60 placeholder-gray-600 "
              placeholder="Enter Emailid"
              value={form.email}
              onChange={handleChange}
            />
            {validCheckMessage?.email && (
              <p className="text-red-700 text-sm">{validCheckMessage.email}</p>
            )}
          </div>
          <div>
            <input
              type="text"
              id="name"
              className="px-3 py-2 rounded w-60 placeholder-gray-600"
              placeholder="Enter Name"
              value={form.name}
              onChange={handleChange}
            />
            {validCheckMessage?.name && (
              <p className="text-red-700 text-sm">{validCheckMessage.name}</p>
            )}
          </div>
          <div>
            <input
              type="password"
              id="password"
              className="px-3 py-2 rounded w-60 placeholder-gray-600"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
            />
            {validCheckMessage?.password && (
              <p className="text-red-700 text-sm">
                {validCheckMessage.password}
              </p>
            )}
          </div>
          <button
            type="submit"
            className="py-1 rounded border-gray-400 text-white border-2 px-4 bg-blue-700"
          >
            SignUp
          </button>
        </form>
        {errorMessage && <p>{errorMessage}</p>}
        <p>
          Already have an account?
          <Link to="/SignIn" className="text-sky-800 font-bold">
            SignIn here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
