import { initializeApp } from "firebase/app";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const firebaseConfig = {
  apiKey: process.env.FIREBASE_TOKEN,
  authDomain: "beatz-anidb.firebaseapp.com",
  projectId: "beatz-anidb",
  storageBucket: "beatz-anidb.appspot.com",
  messagingSenderId: "655273172822",
  appId: "1:655273172822:web:1ebf7b9cb01c1332c0c0f7"
};

export const app = initializeApp(firebaseConfig);
