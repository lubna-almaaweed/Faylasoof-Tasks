import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDpfHbp2rWg7weLfYtYS3MiX210fwiEmVw",
  authDomain: "taskmanager-cc0d4.firebaseapp.com",
  projectId: "taskmanager-cc0d4",
  storageBucket: "taskmanager-cc0d4.appspot.com",
  messagingSenderId: "538455514013",
  appId: "1:538455514013:web:1b3af60b95afb32f36ad74",
  measurementId: "G-NQ222RZ8QJ"
};

const fire = firebase.initializeApp(firebaseConfig);
export default fire;