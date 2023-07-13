import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
export default function Login() {

  const navigate = useNavigate();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [role,setRole] =useState();
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let formIsValid = true;    
    const newErrors = {};

    if (!role) {
        formIsValid = false;      
        newErrors.role = "Please select a role";      
    }        
    if (!username) {
      formIsValid = false;      
      newErrors.username = "Please enter your email address.";      
    } else if (!username.includes("@")) {      
      formIsValid = false;      
      newErrors.username = "Please enter a valid email address.";      
  }
    setErrors(newErrors);
    console.log(errors.username);
    return formIsValid;
    }

  const submitLogin = async( newLogin) => {

    await axios.post("http://localhost:8080/user/login",newLogin)
    .then((response) => {
      console.log("Data",response.data)
      console.log("Response",response)
      if(response.data){
        localStorage.setItem("Role",role);
        navigate("/Welcome")
        console.log("Logged in")
      } else {
        alert("Bad credentials")
        console.log("Not Logged in")
      }
    }).catch((error) => {
      console.log(error.response)
      alert("Bad credentials")
      console.log("Not Logged in")
    })
  }

  const submitForm = async(e) => {
    e.preventDefault();
    console.log(username + " " + password);
    const newLogin = {
      "email" : username,
      "password" : password,
      "role": role
    }

    console.log(newLogin);

    submitLogin(newLogin)
  };

  return (

    <div className="row justify-content-center pt-5">
      <div className="col-sm-6">
        <div className="card p-4 border rounded-sm p-4 mt-2 shadow">
        <h2 className="text-center m-4"> Login Page </h2>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                className="form-control"
                onChange={(e) => setUsername(e.target.value)}
                id="username"/>
                {errors.username && (<div className="text-danger">{errors.username}</div>)} 
            </div>

            <div className="form-group mt-3">
              <label htmlFor="pwd">Password:</label>
              <input
                type="password"
                className="form-control"
                onChange={(e) => setPassword(e.target.value)}
                id="pwd"
              />
            </div>

            <div className="col-md-3">
              <label htmlFor="role" className="form-label">role</label>
              <select id="role" 
                className="form-select" 
                name='role' 
                onChange={(e) => setRole(e.target.value)} 
                value={role}>
              <option value={""}>Select...</option>
              <option value="admin">Admin</option>
              <option value="user">User</option>
              </select>
              {errors.role && (<div className="text-danger">{errors.role}</div>)}
            </div>

            <br/>
            <button type="button" className="btn btn-outline-primary mx-2" onClick={submitForm}>
                Login
              </button>
              <Link className="btn btn-outline-danger mx-2" to="/register">
                Register
              </Link>
         </form>
        </div>
        <br/> 
      </div>
    </div>
  );
}