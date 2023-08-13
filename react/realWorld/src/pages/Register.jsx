import LoginHeader from "../components/LoginHeader";
import LoginForm from "../components/LoginForm";
import { useState } from "react";
import { register } from "../api/user";
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const registerFormArray = [
    {
      name: "Username",
      value: username,
      handleChange: (e) => setUsername(e.target.value),
    },
    {
      name: "email",
      value: email,
      handleChange: (e) => setEmail(e.target.value),
    },
    {
      name: "password",
      value: password,
      handleChange: (e) => setPassword(e.target.value),
    },
  ];
  function  registerUser(username, email, password) {
    const user = {
      username,
      email,
      password,
    }
    register(user).then((res) => {
      console.log(res);
    });
  }
  return (
    <div className="flex items-center justify-center">
      <div style={{ width: "33%" }}>
        <LoginHeader type="register"  />
        <LoginForm inputArray={registerFormArray}></LoginForm>
        <div className="flex justify-end">
          <button onClick={() => registerUser(username, email, password)} className="main-bg px-8 py-3 text-white rounded-md ">
            Sign up
          </button>
        </div>
      </div>
    </div>
  );
}
