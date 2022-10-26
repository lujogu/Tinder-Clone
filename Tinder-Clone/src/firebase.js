import {useState, useEffect} from "react";

import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyB8ABR0gEvHiG1K8GIf0IP4u_WY3sA5zr8",
  authDomain: "friendly-77e96.firebaseapp.com",
  projectId: "friendly-77e96",
  storageBucket: "friendly-77e96.appspot.com",
  messagingSenderId: "152568540955",
  appId: "1:152568540955:web:d966d7b4124bb6a9ffedbe",
  measurementId: "G-JN3V3BSYQ9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const database = firebaseApp.firestore();

export default database;
