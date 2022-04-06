import React, { useEffect, useState } from 'react';
import {NavLink} from 'react-router-dom';


const Login = () => {
  async function loginUser(credentials) {
  return fetch('https://localhost:4000/api/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(credentials)
  })
    .then(data => data.json())
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
                    id="email"
                    placeholder="Your Email" 
                     />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" class="form-control" id="password" placeholder="Enter Your Password"/>
              </div>            
              
              <button onClick={""} class="btn btn-outline-dark">Login</button>
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