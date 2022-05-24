import React, {useState,useEffect} from 'react'   
import {useHistory } from "react-router-dom";
import Logo from "../../components/icons/Logo";
import "./Login.css";

function Login() {
    const [email, setemail] = useState("");  
    const [password, setpassword] = useState("");
    const history=useHistory();
    useEffect(() =>{
      if (localStorage.getItem('user-info')) {
        history.push("/login")
      }
    },[])     
async function login(){
  console.warn(email,password)
  let item={email,password};
  console.log("Anaaa")
  let result = await fetch("http://127.0.0.1:5555/api/Account/authenticate",{
    method:'POST',
    headers:{
       "Content-Type":"application/json",
       "Accept":'application/json'
    },
    body: JSON.stringify(item)
  });
  result=await result.json();
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("/home")
}
  return (
    <div className="container">
      <div className="panel">
        <div className="panelHeader">
          <Logo width={39} fill="white" />
          <span className="panelHeaderText">Login to Twitter</span>
        </div>
        <div className="inputs inputdesign">
      
          <input type='text' placeholder='email' onChange={(e)=>setemail(e.target.value)} />
          <input type='password' placeholder='password' onChange={(e)=>setpassword(e.target.value)} />
        </div>
        
          <button onClick={login} className="loginBtn">Login</button>
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
