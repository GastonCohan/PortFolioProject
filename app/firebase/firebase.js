import firebase from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
    apiKey: "AIzaSyBIBxFQTS955kVvYxV4WJ5nkdxL8FG6Ko8",
    authDomain: "andiamoproject.firebaseapp.com",
    projectId: "andiamoproject",
    storageBucket: "andiamoproject.appspot.com",
    messagingSenderId: "202054547234",
    appId: "1:202054547234:web:a0c798f0d9f6e6b7d6d77b",
    measurementId: "G-LMZ6PK102Y"
};

let fb

if (firebase.apps.length === 0) {
    fb = firebase.initializeApp(firebaseConfig);
} else {
    fb = firebase.app();
}

// firebase.analytics();

const auth = firebase.auth()
const db = fb.firestore();

export { db, auth }