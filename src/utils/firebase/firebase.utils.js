import { initializeApp } from "firebase/app";
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyDMd9zkO8jw5lNyphjY4Ma95D-TSwhiiHU",
  authDomain: "e-com-web-app-e07d8.firebaseapp.com",
  projectId: "e-com-web-app-e07d8",
  storageBucket: "e-com-web-app-e07d8.firebasestorage.app",
  messagingSenderId: "842060525041",
  appId: "1:842060525041:web:6a70f112ddcc29805da850",
  measurementId: "G-6WM0SP0PD0"
};
// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize provider
const provider = new GoogleAuthProvider();
// Set up Google auth
provider.setCustomParameters({
    prompt: "select_account" // Force users to select an account
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);