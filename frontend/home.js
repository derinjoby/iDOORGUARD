import React from "react";
import{ signOut } from "firebase/auth";
import { database } from "./FirebaseConfig"
import { useNavigate } from "react-router-dom";
import "./home.css"

function HomeScreen(){
    const history= useNavigate()
    const handleClick = () => {
        signOut(database).then(val=>{
            console.log(val)
            history('/')
        })
    }
    return(
    <div className="bbb">
        <div className='d-flex justify-content-center align-items-center vh-100'>
            <div className="bg-white p-3 rounded ">
    
        <div>
            <h1>HOME</h1>
            <button className="btn btn-default border w-100 bg-light" onClick={handleClick}>SignOut</button>
            <button className="btn btn-default border w-100 bg-light" onClick={()=>history("/ImageDisplay")}>go to Image display</button>
        </div>
        </div>
        </div>
        </div>
    )
}
export default HomeScreen;