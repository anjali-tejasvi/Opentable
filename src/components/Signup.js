import React, { useState } from 'react'
import { Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';

function Signup() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { signup } = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            await signup(email,password);
            navigate("/login");
        }catch(err){
            setError(err.message);
        }
    };

  return (
    <div className="wrap">
    <form className="login-form" action="" onSubmit={handleSubmit}>
        <div className="form-header">
            <h3>Enter Your Details</h3>
            {error && <Alert variant='danger'> { error } </Alert>}
        </div>

        <div className="form-group">
            <input type="text" className="form-input" placeholder="Enter Your Name" 
             />
        </div>
        <div className="form-group">
            <input type="text" className="form-input" placeholder="email@example.com" 
            onChange={(e) => setEmail(e.target.value)}/>
        </div>
        
        <div className="form-group">
            <input type="password" className="form-input" placeholder=" Create Password" 
            onChange={(e) => setPassword(e.target.value)} />
        </div>

        <div className="form-group">
            <input type="text" className="form-input" placeholder="Enter Dilevery Address" />
        </div>
        <div className="form-group">
      
           <button className="form-button" type="submit">SignUp</button>
         
        </div>
        <Link to = "/login">
        <div className="form-footer">
        Not have an account? <a>Login</a>
        </div>
        </Link>
        
    </form>
</div>
  )
}

export default Signup