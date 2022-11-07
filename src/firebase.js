// import firebase from "firebase";
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA-Jf7uQAfl6cqewWCjrCyDPF1881ULwxM",
    authDomain: "clone-9931a.firebaseapp.com",
    projectId: "clone-9931a",
    storageBucket: "clone-9931a.appspot.com",
    messagingSenderId: "891531305697",
    appId: "1:891531305697:web:35aa45084ee5622e3bcda0",
    measurementId: "G-K6RR9ZE3QQ"
  };

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);


// import { initializeApp } from 'firebase/app';

// const firebaseConfig = {
//     apiKey: "AIzaSyA-Jf7uQAfl6cqewWCjrCyDPF1881ULwxM",
//     authDomain: "clone-9931a.firebaseapp.com",
//     databaseURL: "https://console.firebase.google.com/project/clone-9931a/",
//     projectId: "clone-9931a",
//     storageBucket: "clone-9931a.appspot.com",
//     messagingSenderId: "891531305697",
//     appId: "1:891531305697:web:35aa45084ee5622e3bcda0",
//     measurementId: "G-K6RR9ZE3QQ"
// };

// const firebaseApp = initializeApp(firebaseConfig);
// export const auth = auth(firebaseApp);