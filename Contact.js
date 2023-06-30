
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
// Add other necessary Firebase imports

const firebaseConfig = {
    apiKey: "AIzaSyC2vTc89oJuS4YOOKQTfA0rHihxP8-GZyo",
    authDomain: "auth2-ba783.firebaseapp.com",
    projectId: "auth2-ba783",
    storageBucket: "auth2-ba783.appspot.com",
    messagingSenderId: "920127653187",
    appId: "1:920127653187:web:bd41edc6c1aef6dfb5dbf6",
    measurementId: "G-6J11N25J9H"
  };

// Initialize Firebase app
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
// Add other necessary Firebase initializations

export { auth, provider };
