import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirm_password: ""
  })
  const [error, setError] = useState({
    email: "",
    password: "",
    confirm_password :""
  });
  const [commonError, setCommonError] = useState("");

  function handleFormData(e){
    // validate all the field then set the value;
    validateForm(e);
    const field = e.target.name;
    const value = e.target.value;

    setFormData({...formData, [field]: value});
  }

  function  validateForm(e){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if(e.target.name === "email"){
      if(!emailRegex.test(e.target.value)){
        setError({...error, email: "not a valid email.."})
      }else{
        setError({...error, email: ""})
      }
    }else if(e.target.name === "password"){
      if(e.target.value.length < 8){
        setError({...error, password: "password must be atleast 8 character long."});
      }else{
        setError({...error, password: ""});
      }
    }else{
      if(formData.password != e.target.value){
        setError({...error, confirm_password: "password and confirm password does not match."});
      }else{
        setError({...error, confirm_password: ""});
      }
    }
  }

  function handleSignup(e){
    e.preventDefault();
    if(!formData.email || !formData.password || !formData.confirm_password){
      setCommonError("All* the fields are mandatory..");
    }else{
      setCommonError("");
      alert("User signup successfull..");
      console.log("User signup successfull..");
      setFormData({
        email: "",
        password: "",
        confirm_password: ""
      })
    }
  }

  return (
    <div id='main'>
      <p className='logError'>{commonError}</p>
      <form>
        <div className='formItem'>
          <label htmlFor='email'>Email</label><br />
          <input type='email' id='email' name='email' placeholder='Enter email' value={formData.email} onChange={(e) => {handleFormData(e)}} />
          <p className='logError'>{error.email}</p>
        </div>
        <div className='formItem'>
          <label htmlFor='password'>Password</label><br />
          <input type='password' id='password' name="password" placeholder='Enter password' value={formData.password} onChange={(e) => {handleFormData(e)}}/>
          <p className='logError'>{error.password}</p>
        </div>
        <div className='formItem'>
          <label htmlFor='confirm_password'>Confirm Password</label><br />
          <input type='password' id='confirm_password' name="confirm_password" placeholder='Enter confirm password' value={formData.confirm_password} onChange={(e) => {handleFormData(e)}} />
          <p className='logError'>{error.confirm_password}</p>
        </div>
        <div className='forItem'>
          <button onClick={(e)=>{handleSignup(e)}}>Sign Up</button>
        </div>
      </form>
    </div>
  );
}

export default App;
