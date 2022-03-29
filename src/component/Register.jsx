import React from 'react'

const Register = () => {
  return (
    <div>
      <div className="container mb-5">
        <div className="row">
          <div className="col-12 text-center py-4 my-4">
            <h1>Register</h1>
            <hr />

          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                <input type="text" class="form-control" id="exampleForm" placeholder="Enter Your  FirstName" />
              </div>
              
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                <input type="text" class="form-control" id="exampleForm" placeholder="Enter Your  LastName" />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" class="form-control" id="exampleForm" placeholder="Enter Your Password" />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Config Password</label>
                <input type="password" class="form-control" id="exampleForm" placeholder="Enter Your ConfigPassword" />
              </div>

              
              <button type="submit" class="btn btn-outline-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register