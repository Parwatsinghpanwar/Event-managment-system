
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCdh5IiNIslWXC5fkhmE1as-lCIKKoykpI",
  authDomain: "eventique-44a7c.firebaseapp.com",
  projectId: "eventique-44a7c",
  storageBucket: "eventique-44a7c.firebasestorage.app",
  messagingSenderId: "758958277418",
  appId: "1:758958277418:web:ede45b6005f8747362d453",
  measurementId: "G-HF7W9XQQP5"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { app, auth };