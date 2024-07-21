import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDjWpNinA66khRjKs_zhXe_m446wfzUVmY",
  authDomain: "myntra-web-app-9fe8f.firebaseapp.com",
  projectId: "myntra-web-app-9fe8f",
  storageBucket: "myntra-web-app-9fe8f.appspot.com",
  messagingSenderId: "1054508023912",
  appId: "1:1054508023912:web:a5c8d3834740e4c4d5bbdd",
});

export const db = firebase.firestore();

export const auth = app.auth();
export default app;
