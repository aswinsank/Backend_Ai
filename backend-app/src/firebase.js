// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDUIT_BrSpPcP4oINH2p-hs-37TY499_1g",
    authDomain: "backend-app-cf689.firebaseapp.com",
    projectId: "backend-app-cf689",
    storageBucket: "backend-app-cf689.firebasestorage.app",
    messagingSenderId: "648073400631",
    appId: "1:648073400631:web:5ad1bd9cb2edd08b5fcab2",
    measurementId: "G-5P2VSKCDKR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);