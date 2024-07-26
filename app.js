import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-analytics.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/10.12.4/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyCrPjrNnlqu7qzk66mCh-FWFloOY3spzlY",
  authDomain: "authentication-form-3993b.firebaseapp.com",
  projectId: "authentication-form-3993b",
  storageBucket: "authentication-form-3993b.appspot.com",
  messagingSenderId: "914637601798",
  appId: "1:914637601798:web:d7f0e63bb23e45f2fb9787",
  measurementId: "G-L9N3VQ7V4X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);

const auth_container = document.getElementById("authentication-container");
const dashboard = document.getElementById("dashboard");
const signup_email = document.getElementById("signup-email");
const signup_password = document.getElementById("signup-password");
const signin_email = document.getElementById("signin-email");
const signin_password = document.getElementById("signin-password");
const signup_btn = document.getElementById("signup-btn");
const signin_btn = document.getElementById("signin-btn");
const logout_btn = document.getElementById("logout");

onAuthStateChanged(auth, (user) => {
  if (user) {
    // User is signed in, see docs for a list of available properties
    // https://firebase.google.com/docs/reference/js/auth.user
    console.log(user, "logged in");
    const uid = user.uid;
    auth_container.style.display = "none";
    dashboard.style.display = "block";
    user_info.innerHTML = user.email;
    // ...
  } else {
    console.log("user is not logged in");
    auth_container.style.display = "block";
    dashboard.style.display = "none";
    // User is signed out
    // ...
  }
});

logout_btn.addEventListener("click", () => {
  signOut(auth)
  .then(() => {
    // Sign-out successful.
  })
  .catch((error) => {
    // An error happened.
  });
});

const signUpUser = () => {
  const email = signup_email.value;
  const password = signup_password.value;
  if (!email || !password) {
    alert("invalid email or password");
  }
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });
};

const signInUser = async () => {
  const email = signin_email.value;
  const password = signin_password.value;
  if (!email || !password) {
    return alert("invalid email or password");
  }
  try {
    const res = await signInWithEmailAndPassword(auth, email, password);
    console.log(res);
  } catch (err) {
    console.log(err, "error");
  }
};

signup_btn.addEventListener("click", signUpUser);
signin_btn.addEventListener("click", signInUser);