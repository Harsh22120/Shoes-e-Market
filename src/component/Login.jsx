import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';
import { useHistory } from 'react-router-dom';
const Login = () => {
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const history = useHistory();

useEffect(() => {
  if(localStorage.getItem('user-info')){
    history.push("/add")
  }
},[])

async function login(){
  console.log(email, password)
  let item = {email, password};
  let result = await fetch("localhost:4000/api/login",{
    method: 'POST',
    headers:{
      "Content Type": "applicaion/json",
      "Accept": "application/json"
    },
    body: JSON.stringify(item)
  });
  result = await result.json();
  localStorage.setItem("user-info",JSON.stringify(result))
  history.push("/add")
}

return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Login</h1>
            <hr />

          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form>
              
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email"  class="form-control" 
                    id="exampleFormControlInput1"
                    placeholder="name@example.com" 
                    onChange={(e)=>setEmail(e.target.value)} />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" class="form-control" 
                      id="exampleForm"
                      placeholder="Enter Your Password"
                      onChange={(e)=>setPassword(e.target.value)}  />
              </div>            
              
              <button onClick={login} class="btn btn-outline-dark">Login</button>
              &nbsp;
              <NavLink to="/register" class="btn btn-outline-dark">Sing Up</NavLink>
            
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login