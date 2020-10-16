import React from 'react';
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA5I9aU1GSDdzLHz2h1Sm2Kmd-oKxFViuk",
    authDomain: "clone-f36e3.firebaseapp.com",
    databaseURL: "https://clone-f36e3.firebaseio.com",
    projectId: "clone-f36e3",
    storageBucket: "clone-f36e3.appspot.com",
    messagingSenderId: "1034224810173",
    appId: "1:1034224810173:web:f93da617f0c44c88569fd4",
    measurementId: "G-64G7JWCF68",
});
    

const auth = firebase.auth();

export { auth }



