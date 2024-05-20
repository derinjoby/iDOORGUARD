import React, { useState } from "react";
import { database } from "./FirebaseConfig";
import {createUserWithEmailAndPassword} from 'firebase/auth'
import { useNavigate } from 'react-router-dom';
import {signInWithEmailAndPassword} from 'firebase/auth'
import './RegisterandLogin.css'


function ResgisterandLogin(){
    const [login,setLogin]= useState(false)
    const history = useNavigate()


    const handleSubmit=(e,type)=>{
        e.preventDefault()
        const email =e.target.email.value
        const password=e.target.password.value
        if(type == 'signup'){
        createUserWithEmailAndPassword(database,email,password).then(data =>{
            console.log(data,"authData")
            history('/home')
        }).catch(err=>{
            alert(err.code)
            setLogin(true)
        })
    }else{
        signInWithEmailAndPassword(database,email,password).then(data =>{
            console.log(data,"authData")
            history('/home')
        }).catch(err=>{
            alert(err.code)
        })

    }

        
        
    }
    return(
        <div className="aaa">
        <div className='d-flex justify-content-center align-items-center vh-100'>
            
            <div className="bg-white p-3 rounded ">
                
                    <div className='App'>
                        <div className="row">
                            <button className={login==false?'.activeColor':'.pointer'}onClick={()=>setLogin(false)}>CREATE ACCOUNT</button>
                            <button className={login==true?'.activeColor':'.pointer'}onClick={()=>setLogin(true)}>LOGIN</button>
                        </div>
                    <h1>{login?'SignIn':'SignUp'}</h1>
                    <form onSubmit={(e)=>handleSubmit(e,login?"signin":"signup")}>
                        <label htmlFor="email"><strong>Email</strong></label>
                        <input name="email" placeholder='Email' className="form-control rounded-0"/><br/>
                        <label htmlFor="password"><strong>Password</strong></label>
                        <input name="password" type="password" placeholder="Password" className="form-control rounded-0"/><br/>
                        <button className="btn btn-default border w-100 bg-light">{login?'SignIn':'SignUp'}</button>
                    </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResgisterandLogin;