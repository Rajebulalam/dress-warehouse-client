// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCA4kaqthOxg0G1xivVlQmETr5-FBRfRz0",
    authDomain: "dress-warehouse-client.firebaseapp.com",
    projectId: "dress-warehouse-client",
    storageBucket: "dress-warehouse-client.appspot.com",
    messagingSenderId: "142833554382",
    appId: "1:142833554382:web:0eaef925e3ed6b47c1d19f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;