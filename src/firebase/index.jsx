import firebase from 'firebase/app';
import '@firebase/firestore';

const app = firebase.initializeApp({
  apiKey: "AIzaSyD4RfYcGqhPo5_KCuQTWgzgRDwp8VzqudM",
  authDomain: "curso-3773c.firebaseapp.com",
  projectId: "curso-3773c",
  storageBucket: "curso-3773c.appspot.com",
  messagingSenderId: "684230679290",
  appId: "1:684230679290:web:1e09fb9c9b5a1b8065c743"
});

export function getFirebase() {
  return app;
}

export function getFirestore() {
  return firebase.firestore(app);
}