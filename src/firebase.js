// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

export const firebaseConfig = {
    apiKey: "AIzaSyBDe2GXR4OgscTpECL1j3RDPcxmb2Wbg7k",

    authDomain: "js-test-76a32.firebaseapp.com",

    databaseURL:
        "https://js-test-76a32-default-rtdb.europe-west1.firebasedatabase.app",

    projectId: "js-test-76a32",

    storageBucket: "js-test-76a32.appspot.com",

    messagingSenderId: "830676468235",

    appId: "1:830676468235:web:4a2c5de34ef4fa94abbd0e",
};

// Initialize Firebase

export const firebaseApp = initializeApp(firebaseConfig);
