import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4qjcw8uqTKCgiF33f3vcJfrhstcgUybs",
  authDomain: "twitter-bcdf4.firebaseapp.com",
  projectId: "twitter-bcdf4",
  storageBucket: "twitter-bcdf4.appspot.com",
  messagingSenderId: "894519105522",
  appId: "1:894519105522:web:f724b59ab88964714d7d6b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
