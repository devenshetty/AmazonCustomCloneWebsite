import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCqHxJ9RtbG90rOMtCVwNpiNovNL1xuPM4",
  authDomain: "clone-project-a55ab.firebaseapp.com",
  projectId: "clone-project-a55ab",
  storageBucket: "clone-project-a55ab.appspot.com",
  messagingSenderId: "944781789131",
  appId: "1:944781789131:web:1f8cb1e864ea172403984e",
  measurementId: "G-CRP1957Y2R"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
