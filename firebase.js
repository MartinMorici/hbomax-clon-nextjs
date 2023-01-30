// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyCaxIdZFJoy-7ovLkpYnrrcgXHSGmJAIxE',
  authDomain: 'hbo-clone-897cb.firebaseapp.com',
  projectId: 'hbo-clone-897cb',
  storageBucket: 'hbo-clone-897cb.appspot.com',
  messagingSenderId: '1096160028788',
  appId: '1:1096160028788:web:d04c80d13097851166c921',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const auth = getAuth();

export default app;
export { auth, db };
