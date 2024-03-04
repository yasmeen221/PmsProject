import { jwtDecode } from 'jwt-decode';
import React from 'react';
import { Navigate } from 'react-router-dom';
import Cookies from "universal-cookie";

export default function ProtectedRouting(props) {
    const cookie = new Cookies();
    let token = cookie.get("userToken");
    if(token){
        console.log(token);
        const decodedUserToken = jwtDecode(token);
        console.log("nnjjnjnjjnj",decodedUserToken.role);
        console.log(props.children)
        return props.children;
        } else {
        console.log('elseeeeeee');
        return <Navigate to='/'/>; // Added return statement here
    }
}






