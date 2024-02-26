import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyA-fHwt6joSZopQjgkmgSeqCht-ontiIYk",
  authDomain: "miniblog-ea37d.firebaseapp.com",
  projectId: "miniblog-ea37d",
  storageBucket: "miniblog-ea37d.appspot.com",
  messagingSenderId: "186785155887",
  appId: "1:186785155887:web:1f453745c4db3a05abefda"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db };