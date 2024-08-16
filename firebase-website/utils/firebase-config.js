import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-analytics.js";
import { 
    getAuth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signOut,
    signInWithEmailAndPassword,
 } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { 
    getFirestore,
    addDoc,
    collection,
    doc,
    setDoc,
    getDoc,
    getDocs,
 } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";
import { 
    getStorage,
    ref,
    uploadBytes,
    getDownloadURL,
 } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";

const firebaseConfig = {
    apiKey: "AIzaSyCRJQljuF9TwFGk9kNwLNfGdtyh7JwdxcQ",
    authDomain: "fir-website-c6c3f.firebaseapp.com",
    projectId: "fir-website-c6c3f",
    storageBucket: "fir-website-c6c3f.appspot.com",
    messagingSenderId: "634706400915",
    appId: "1:634706400915:web:7335e0db669c03ef549f66",
    measurementId: "G-JTPVYTKCXZ"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export {
    app,
    auth,
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    db,
    collection,
    addDoc,
    setDoc,
    doc,
    getDoc,
    getDocs,
    signOut,
    signInWithEmailAndPassword,
    storage,
    uploadBytes,
    ref,
    getDownloadURL,
}