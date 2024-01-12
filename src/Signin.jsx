import React, {useState} from 'react'
import {signInWithEmailAndPassword} from 'firebase/auth'
// import { Auth } from '../../firebase';
// import { Auth } from 'firebase/auth';
// import {auth} from './firebase'
// import {auth} from './firebase.js'
import { auth } from './firebase'
const Signin = () => {
    
    const [email,setEmail]=useState('');
    const [password,setpassword]=useState('');
    const signIn=(e)=>{
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            console.log(userCredential);
        }).catch((error)=>{
            console.log(error);
        })
    }
    return (
        <div className='signin_container'>
            <form  onSubmit={signIn}>
                <h1>Log In</h1>
                <input type="text" placeholder='Enter your email' 
                value={email}  onChange={(e)=>setEmail(e.target.value)}  />
                <input type="password" placeholder='Enter password' 
                value={password}   onChange={(e)=>setpassword(e.target.value)} />
                <button type='submit'>Log In</button>
            </form>
        </div>
    )
}

export default Signin
