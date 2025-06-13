import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "./App";
import axios from "axios";

export default function Login() {
  const [user, setUser] = useState({});
  const [error, setError] = useState();
  const Navigate = useNavigate();
  const { users,setEmail } = useContext(AppContext);
  const handleSubmit =  async () => {
    
    const url = "http://localhost:8080/login"
    const res = await axios.post("http://localhost:8080/login", user);//saves the data received from login API in res

    // const found = users.find(
    //    (elem) => elem.email === user.email && elem.pass === user.pass
    // ); 

    // const found = await axios.get(url,found);


    // if there is no data in res , Access Denied
    if (!res.data) { // adjust this check based on your API response format
      
      setError("Access Denied");
      
    } else {
      setEmail(user.email);
      Navigate("/"); // redirect on success
    }
  };
  return (
    <div>
      <h2>Login Form</h2>
      {error}
      <p>
        <input
          type="text"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
      </p>
      <p>
        <input
          type="password"
          onChange={(e) => setUser({ ...user, pass: e.target.value })}
        />
      </p>
      <p>
        <button onClick={handleSubmit}>Login</button>
      </p>
      <hr />
      <p>
        <Link to="/register">Create Account</Link>
      </p>
    </div>
  );
}