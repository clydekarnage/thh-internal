import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyAFcoTPQ-TYUIz7hbtgexXxSI7chBH8XGE",
    authDomain: "thh-internal.firebaseapp.com",
    databaseURL: "https://thh-internal.firebaseio.com",
    projectId: "thh-internal",
    storageBucket: "thh-internal.appspot.com",
    messagingSenderId: "541135022369",
    appId: "1:541135022369:web:90fda22b58c26058ab3660"
});


var db = firebaseConfig.firestore()

// const fire = firebase.initializeApp(firebaseConfig);

export { db, firebaseConfig };