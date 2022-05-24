import React,{useState} from "react";
import "./Signup.css";
import Logo from "../../components/icons/Logo";
import { useHistory } from "react-router-dom";

function Signup() {

  const[name,setName]=useState("")
  const[lastName,setLastName]=useState("")
  const[email,setEmail]=useState("")
  const[userName,setUserName]=useState("")
  const[password,setPassword]=useState("")
  const[confirmPassword,setConfirmPassword]=useState("")
  
  const history = useHistory();

  


  async function register(){
    let item={name,lastName,email,userName,password,confirmPassword};
    console.warn(item)

    let result = await fetch('http://127.0.0.1:5555/api/Account/register',{
      method: 'POST',
      headers:{'Content-type':'application/json',"Accept":'application/json'},
          body: JSON.stringify(item)
    })
  result=await result.json();
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("/login")
  };

  return (
    <div className="signUpContainer">
      <div className="card">
        <div className="signuplogo">
          <Logo width={26} height={53} fill="white" />
        </div>
        <div className="signupHeader">
          <span>Create your account</span>
        </div>
        <div className="inputDesign">
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)} className="form-control" placeholder="name" />
        <input type="text" value={lastName} onChange={(e)=>setLastName(e.target.value)} className="form-control" placeholder="LastName" />
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)} className="form-control" placeholder="email" />
        <input type="text" value={userName} onChange={(e)=>setUserName(e.target.value)} className="form-control" placeholder="userName" />
        <input type="text" value={password} onChange={(e)=>setPassword(e.target.value)} className="form-control" placeholder="password" />
        <input type="text" value={confirmPassword} onChange={(e)=>setConfirmPassword(e.target.value)} className="form-control" placeholder="confirmPassword" />
        </div>
        
        <div className="acceptTerm">
          <span>
            When you register, you agree to the
            <span className="acceptTermBlue"> terms of service</span> and the
            <span className="acceptTermBlue"> Privacy Policy</span>, including
            the use of <span className="acceptTermBlue">cookies</span>. When you
            set your
            <span className="acceptTermBlue"> privacy options </span>
            accordingly, others can find you by email or phone number.
          </span>
        </div>
        <button onClick={register} className="signupBtn">Kaydol</button>
       
      </div>
    </div>
  );
}

export default Signup;
