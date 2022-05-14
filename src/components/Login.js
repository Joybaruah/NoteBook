import React , { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";

const Login = (props) => {

    let navigate = useNavigate();
    const [credentials, setCredentials] = useState({email: "", password: ""})

    const handleLogin = async (e , email, password)=>{
        e.preventDefault();
        const response = await fetch("https://notebook-joy.herokuapp.com/login", {
            method : 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({email: credentials.email, password: credentials.password})
        })
        const json = await response.json();
        console.log(json);
        if(json.success){
          localStorage.setItem('token', json.authtoken);
          navigate("/")
          props.showAlert("Loged in Successfully", "success")
        }
        else{
          props.showAlert("Invalid credentials", "danger")
        }
    }

    const onChange = (e) => {
        setCredentials({...credentials, [e.target.name]: e.target.value})
      };

  return (

    <div className="d-flex container justify-content-center" style={{maxWidth: "30rem"}}>
      <div>
        <h5 className='login-header my-3'>
          Login to NoteBook
        </h5>
          <form onSubmit={handleLogin} >
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name='email'
            value={credentials.email}
            aria-describedby="emailHelp"
            onChange={onChange}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name='password'
            value={credentials.password}
            onChange={onChange}
          />
        </div>
        <button type="submit" className="btn btn-dark">
          Login
        </button>
        <p className="my-3">
              Dont have an Acccount? <Link to="/signup">Create one</Link>
        </p>
      </form>
    </div>
    </div>
  )
}

export default Login