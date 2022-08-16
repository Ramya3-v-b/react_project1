import React from 'react';
import {GoogleOutlined,FacebookOutlined} from '@ant-design/icons';
import "firebase/app";
import {auth} from '../firebase';
const Login=()=>{
    return(
        <div id='login-page'>
            <div id="login-card">
                <h2>welcome to Unichat!</h2>
                <div className="login-button google"
                onClick={()=>auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
                    <GoogleOutlined/>Sign in with google
                </div>
                <br/><br/>
                <div className="login-button google"
                onClick={()=>auth.signInWithRedirect(new firebase.auth.Facebook3AuthProvider())}><FacebookOutlined/>Sign in with Facebook
                </div>
            </div>

        </div>
    );
}
export default Login;