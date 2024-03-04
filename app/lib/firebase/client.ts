import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBVXIlsiNtQ4h5s-bKTVlacvBCcdoqdxwc",
  authDomain: "koma-ai.firebaseapp.com",
  projectId: "koma-ai",
  storageBucket: "koma-ai.appspot.com",
  messagingSenderId: "387420971884",
  appId: "1:387420971884:web:16eb2c05f69cc25b38c949"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const storage = getStorage(app);

export {db, storage};