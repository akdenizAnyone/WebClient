import React, { useState, useEffect } from 'react'
import { useHistory } from "react-router-dom";
import Logo from "../../components/icons/Logo";
import "./Login.css";
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



function Login() {


  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
  async function loginFunc() {
    axios.post('http://127.0.0.1:5555/api/Account/authenticate', {
      email: email,
      password: password
    })
      .then(function (response) {
      
        console.log(response);
        console.log(response["data"]['succeeded'])
        if(response["data"]['succeeded']){
          const data =[
            {
              email: response["data"]['data']['email'],
              id: response["data"]['data']['id'],
              jwToken: response["data"]['data']['jwToken'],
              lastname: response["data"]['data']['lastName'],
              name: response["data"]['data']['name'],
              username:response["data"]['data']['userName']
            }
          ];
          
          history.push({
            pathname:'/Home',
            state:data
          });
        }
  
      })
      .catch(function (error) {
        console.log(error);
        toast.error("E-mail or Password wrong.");
      });
  };

return (
  <div className="container">
    <div className="panel">
      <div className="panelHeader">
        <Logo width={39} fill="white" />
        <span className="panelHeaderText">Login to Twitter</span>
      </div>
      <div className="inputs inputdesign">

        <input type='text' placeholder='email' onChange={(e) => setemail(e.target.value)} />
        <input type='password' placeholder='password' onChange={(e) => setpassword(e.target.value)} />
      </div>

      <button onClick={loginFunc} className="loginBtn">Login</button>
      <ToastContainer position="bottom-center" />
      <div className="loginLinks">
        <a href="/">
          <span className="link">Forgot password</span>
        </a>
        <span className="point">.</span>
        <a href="/signup">
          <span className="link">Sign up on Twitter</span>
        </a>
      </div>
    </div>
  </div>
);
}

export default Login;
