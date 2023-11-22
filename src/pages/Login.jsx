import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../hooks/use-auth";

function Login() {
  const [input, setInput] = useState({
    email: "",
    password: "",
  });

  const { login } = useAuth();

  const handleSubmitForm = (e) => {
    e.preventDefault();
    login(input).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="flex flex-col items-center justify-center w-full h-screen">
      <div className=" flex flex-col justify-center items-center gap-5">
        <div className=" text-center text-green-600  text-xl tracking-widest w-">
          LOGIN
        </div>
        <div className=" text-center text-gray-600">
          Please enter your e-mail and password
        </div>
        <form
          className="flex flex-col gap-5  min-w-[400px]"
          onSubmit={handleSubmitForm}
        >
          <div>
            <input
              className="bg-gray-200 rounded-md py-3 w-full border border-gray-600 px-3 "
              placeholder="email"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
          </div>
          <div>
            <input
              type="password"
              className="bg-gray-200 rounded-md py-3 w-full border border-gray-600 px-3 "
              placeholder="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <button className="bg-green-600 py-3 text-white rounded-md tracking-widest shadow-md">
            LOGIN
          </button>
        </form>
        <Link
          to="/register"
          className="bg-green-600 py-3 text-white rounded-md tracking-widest shadow-md w-full flex justify-center items-center"
        >
          REGISTER
        </Link>

        <div className="flex w-full justify-end cursor-pointer ">For Admin</div>
      </div>
    </div>
  );
}

export default Login;
