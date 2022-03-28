import React from 'react';
import {NavLink} from 'react-router-dom';
const Login = () => {
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
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="text" class="form-control" id="exampleForm" placeholder="Enter Your Password" />
              </div>            
              <button type="submit" class="btn btn-outline-dark">Login</button>
              <NavLink to="/register" class="btn btn-outline-dark">Sing Up</NavLink>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login