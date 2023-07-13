import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

export default function AddUser() {

  let navigate = useNavigate();
  const [user, setUser] = useState({

    email: "",
    userName: "",
    password: "",
    role: "user",
  });

  const {email, password} = user;
  const onInputChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log("user", user);
   await axios.post("http://localhost:8080/user/register", user);
    navigate("/");

  };

  return (
    
    <div className="container">
      <br/>
      <div className="row">
        <div className="col-md-6 offset-md-3 border rounded-sm p-4 mt-2 shadow">
          <h2 className="text-center m-4"> Register User </h2>
          <form onSubmit={(event) => submitHandler(event)}>
            <div className="mb-3">
              <label htmlFor="Email" className="form-label">
                Email
              </label>
                 <input
                type="text"
                className="form-control"
                placeholder="Enter your email..."
                name="email"
                value={email}
                onChange={(event) => onInputChange(event)}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="Password" className="form-label">
                Password
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Set your password..."
                name="password"
                value={password}
                onChange={(event) => onInputChange(event)}
              />
            </div>
            
            <center>
              <button type="submit" className="btn btn-outline-primary mx-2">
                Submit
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/">
                Cancel
              </Link>
            </center>

          </form>
        </div>
      </div>
      <br/><br/><br/><br/><br/>
    </div>
  );
}