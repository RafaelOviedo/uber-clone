import { initializeApp } from "firebase/app";
import {GoogleAuthProvider, getAuth} from "firebase/auth"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCS1rVIwBXn6s1UEl9tQjAz-2bW5Y4lg78",
  authDomain: "uber-clone-f7127.firebaseapp.com",
  projectId: "uber-clone-f7127",
  storageBucket: "uber-clone-f7127.appspot.com",
  messagingSenderId: "238532310117",
  appId: "1:238532310117:web:44bcfbec196abfc9b8c28c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider()
const auth = getAuth()

export { app, provider, auth }