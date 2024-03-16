import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
import {getStorage} from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBv7hwEAZvgA-IYedN7VjP5f0m0_BhM154",
  authDomain: "social-media-application-ce2d7.firebaseapp.com",
  projectId: "social-media-application-ce2d7",
  storageBucket: "social-media-application-ce2d7.appspot.com",
  messagingSenderId: "705401643990",
  appId: "1:705401643990:web:4ed3e4e438fe58e3f5fa77",
  measurementId: "G-FJRCYR3P7J"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const fireStore = getFirestore(app);
const storage = getStorage(app);

export {app, auth, fireStore, storage, analytics};