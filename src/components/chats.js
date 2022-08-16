import React ,{useRef,useState,useEffect} from 'react';
import { useHistory } from 'react-router-dom';
import{ChatEngine} from 'react-chat-engine';
import{auth} from '../firebase';
import {useAuth} from '../contexts/AuthContext';
const Chats=()=>{
    
    const history=useHistory();
    const {user}=useAuth();
    const [loading,setLoading]=useState(true);
    console.log(user);
    const handleLogout=async()=>
    await auth.signOut();
    history.push('/');
}
const getFile=async(url)=>{
    const response=await fetch(url);
    const data =await response.blob();
    return new File([data],"userPhoto.jpg",{type:'image/jpeg'})
}
useEffect(()=>{
    if(!user){
        history.push('/');
        return;
    }
    axios.get('http://api.chatengine.io/users/me',{
        Headers:{
            
            "project-id": "5cbf28c6-1278-4831-b79e-6df8d7defe59",
            "user-name" :user.email,
            "user-secret":user.uid,
        }
    })
    .then(()=>{
        setLoading(false);
    })
    .catch(()=>{
        let formdata=new FormData();
        formdata.append('email',user.email);
        formdata.append('username',user.email);
        formdata.append('secret',user.uid);
        getFile(user.photoURL)
        .then((avatar) => {
            formadata.append('avatar',avatar,avatar.name)
            axios.post('https://api.chatengine.io/users',formData,
            {headers:{"private-key":"ccbbd1cf-4dc3-4a16-9d80-5347ecd188f3"}})
            .then(()=>setLoading(false))
            .catch((error)=>console.log(error))
        })
    })
}, [user,history]);

if(!user || loading) return 'Loading...';

    return(
        <div className="chats-page">
            <div className="nav-bar">
                <div className="logo-tab">
                    Unichat
                </div>
                <div onClick={handleLogout} className="Logout-tab">
                    Logout
                </div>
                
                
            </div>
            <ChatEngine
            height="calc{(100vh-66px)"
            projectID="
            5cbf28c6-1278-4831-b79e-6df8d7defe59"
            userName={user.email}
            userSecret={user.uid}
            />
        </div>
    );
    
    
    export default Chats;