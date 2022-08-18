import React, { useState } from 'react'
import { Alert} from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom'
import { useUserAuth } from '../context/UserAuthContext';
import GoogleButton from 'react-google-button';
// import {ToastContainer,toast} from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [email,setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { logIn, googleSignIn } = useUserAuth();
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError("");
        try{
            await logIn(email,password);
            navigate("/summary");
            
        }catch(err){
            setError(err.message);
        }
    };

    const handleGoogleSignIn = async(e) =>{
        e.preventDefault();

        try{
            await googleSignIn();
            navigate("/summary");
        }catch(err){
            setError(err.message);
        }
    }

    // const succesful =  () =>{
    //     if(error){
    //         toast.error("Login failed", {
    //             position:'top-center'
    //         });
    //     }
    //     else{
    //         toast.success("Login Succesful", {
    //             position:'top-center'
    //         });
    //     }
    // }
  return (
        
    <div class="wrap">
    <form class="login-form" action="" onSubmit={handleSubmit}>
        <div class="form-header">
            <h3>Login page</h3>
            {error && <Alert variant='danger'>{error}</Alert>}
        </div>

        <div class="form-group">
            <input type="text" class="form-input" placeholder="email@example.com"
            onChange={(e) => setEmail(e.target.value)} />
        </div>
        
        <div class="form-group">
            <input type="password" class="form-input" placeholder="Password"
             onChange={(e) => setPassword(e.target.value)} />
        </div>

        {/* <div class="form-group">
            <input type="text" class="form-input" placeholder="Enter Dilevery Address" />
        </div> */}
        <div class="form-group">
           <button class="form-button" type="submit"
        //    onClick={succesful}
           >Login</button>
          
        </div>
        {/* <ToastContainer /> */}
        <hr />
        <div class="form-group">
           <GoogleButton className="g-btn" type="dark" style={{width:280}} 
           onClick={handleGoogleSignIn} />
          
           {/* <button class="form-button" type="submit">
            <img src='https://www.outsystems.com/forge/DownloadResource.aspx?FileName=&ImageBinaryId=31800' className='GoogleImg' alt='not found'
            onClick={handleGoogleSignIn} />
            Sign in with Google</button> */}
          
        </div>
        <hr />
       <Link to ="/signup">
       <div class="form-footer">
        Not have an account? <a>Signup</a>
        </div>
       </Link>
    </form>
</div>
    
    
  )
}

export default Login