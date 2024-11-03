import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword , onAuthStateChanged, signOut  } from "firebase/auth";
import { getFirestore ,collection, addDoc } from "firebase/firestore";

// const firebaseConfig = {
//     apikey: process.env.NEXT_PUBLIC_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_APP_ID
// };
const firebaseConfig = {
    apiKey: "AIzaSyCLEhN8HEeoSMT5fh5p--xn6RX5ojUGSPQ",
    authDomain: "dashboard-64835.firebaseapp.com",
    projectId: "dashboard-64835",
    storageBucket: "dashboard-64835.appspot.com",
    messagingSenderId: "276206053403",
    appId: "1:276206053403:web:c77ed90bc9834c072c70be"
  };

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
const db = getFirestore(app)

export {auth, createUserWithEmailAndPassword ,signInWithEmailAndPassword , db ,collection, addDoc , onAuthStateChanged, signOut }

