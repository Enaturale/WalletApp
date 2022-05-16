// Import the functions you need from the SDKs you need
import * as firebase from "firebase";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBTMwnOQpjmvkeqpXGhUcAU5Preqh6DK70",
  authDomain: "loginreactnative-3c854.firebaseapp.com",
  projectId: "loginreactnative-3c854",
  storageBucket: "loginreactnative-3c854.appspot.com",
  messagingSenderId: "637337905470",
  appId: "1:637337905470:web:a0807e6e46cc57f668a46f",
  measurementId: "G-1YSDV35D0L"
};

// Initialize Firebase
let app;
if (firebase.apps.length == 0) {
    app = firebase.initializeApp(firebaseConfig);
}else{
    app = firebase.app();
}

const auth = firebase.auth()

export { auth};

