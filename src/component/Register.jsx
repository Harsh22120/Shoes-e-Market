import React, { useState} from 'react'
import { useHistory } from 'react-router-dom';
const Register = () => {
  const [firstname, setFirstname]= useState("");
  const [lastname, setLastname]=useState("");
  const [email,setEmail]=useState("");
  const[password,setPassword]=useState("");
  const[configpassword, setConfigpassword]=useState("");
  const history=useHistory();
  // useEffect(() => {
  //   if(localStorage.getItem('user-info')){
  //     history.push("/add")
  //   }
  // },[])
  
async function register(){
    console.warn(email, password)
    let item = {firstname, lastname, email, password, configpassword};
    let result = await fetch("localhost:4000/api/register",
    {
      method: 'POST',
      body: JSON.stringify(item),
      headers:{
        "Content Type": "applicaion/json",
        "Accept": "application/json"
      }     
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
            <h1>Register</h1>
            <hr />

          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">First Name</label>
                <input type="text" value={firstname} class="form-control" 
                    id="exampleForm1" 
                    placeholder="Enter Your  FirstName" 
                    onChange={(e)=>setFirstname(e.target.value)} />
              </div>
              
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Last Name</label>
                <input type="text" value={lastname} class="form-control"
                    id="exampleForm2"
                    placeholder="Enter Your  LastName" 
                    onChange={(e)=>setLastname(e.target.value)} />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email address</label>
                <input type="email" value={email} class="form-control" 
                    id="exampleFormControlInput1"
                    placeholder="name@example.com" 
                    onChange={(e)=>setEmail(e.target.value)} />
              </div>
             
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Password</label>
                <input type="password" value={password} class="form-control" 
                    id="exampleForm3" 
                    placeholder="Enter Your Password" 
                    onChange={(e)=>setPassword(e.target.value)} />
              </div>
             
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Config Password</label>
                <input type="password" value={configpassword} class="form-control"
                      id="exampleForm4"
                      placeholder="Enter Your ConfigPassword" 
                      onChange={(e)=>setConfigpassword(e.target.value)} />
              </div>

              
              <button onClick={register} class="btn btn-outline-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register