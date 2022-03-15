import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, limit, getDocs, doc, getDoc, setDoc } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDb2wRF-dpRgSZY2DjCE5wfba0nus6Nrk4",
    authDomain: "otterplusmanatee.firebaseapp.com",
    projectId: "otterplusmanatee",
    storageBucket: "otterplusmanatee.appspot.com",
    messagingSenderId: "283778893292",
    appId: "1:283778893292:web:5c34edd7c8bbe6f225acc9",
    measurementId: "G-Z53XBCJ8FK"
  };

const app = initializeApp(firebaseConfig);

const dataBase = getFirestore();


const participationCollection = collection(dataBase,'rspv');

export { participationCollection, dataBase, query, where, limit, getDocs, doc, getDoc, setDoc };