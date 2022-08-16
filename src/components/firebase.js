import firebase from "firebase/app";
import "firebase/auth";
export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDyda-s-KkU95brQqCxdLxNxFeY_rp69sA",
    authDomain: "unichat-f7f1d.firebaseapp.com",
    projectId: "unichat-f7f1d",
    storageBucket: "unichat-f7f1d.appspot.com",
    messagingSenderId: "779218902481",
    appId: "1:779218902481:web:0d5f84fbd10d521c3a14f0"
  }).auth();