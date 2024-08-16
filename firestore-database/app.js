import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import { 
    getFirestore,
    addDoc,
    collection,

 } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";

const firebaseConfig = {
    apiKey: "AIzaSyCrPjrNnlqu7qzk66mCh-FWFloOY3spzlY",
    authDomain: "authentication-form-3993b.firebaseapp.com",
    projectId: "authentication-form-3993b",
    storageBucket: "authentication-form-3993b.appspot.com",
    messagingSenderId: "914637601798",
    appId: "1:914637601798:web:c2762c224bac70dbfb9787",
    measurementId: "G-9ZQZM1B56Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const db = getFirestore(app);

const title = document.getElementById("title");
const description = document.getElementById("description");
const price = document.getElementById("price");
const createBtn = document.getElementById("create");

const productsCollection = collection(dp, "products");
