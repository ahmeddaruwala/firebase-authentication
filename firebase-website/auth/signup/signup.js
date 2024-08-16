import {
    auth,
    db,
    addDoc,
    setDoc,
    doc,
    collection,
    createUserWithEmailAndPassword,
} from "../../utils/firebase-config.js"

const signup_form = document.getElementById("signup_form");

signup_form.addEventListener("submit", function (e) {
    e.preventDefault();
    const email = e.srcElement[0].value;
    const password = e.srcElement[1].value;
    const confirmPassword = e.srcElement[2].value;
    const firstName = e.srcElement[3].value;
    const lastName = e.srcElement[4].value;

    const userData = {
        email,
        password,
        confirmPassword,
        firstName,
        lastName,
    };
    console.log(userData);
    createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            console.log(user);
            setDoc(doc(db, "users", user.uid), userData).then((userRef) => {
                window.location.href = "../../index.html";
            });
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorMessage);
        });
})


