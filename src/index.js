// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAB6T1dR-6zbWTt8eCQoHWzOnQyQAMT41g",
  authDomain: "nacaj-66723.firebaseapp.com",
  projectId: "nacaj-66723",
  storageBucket: "nacaj-66723.firebasestorage.app",
  messagingSenderId: "762195624686",
  appId: "1:762195624686:web:9c9e50103f904aff9da9ff",
  measurementId: "G-PWDFQ3DKS3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);