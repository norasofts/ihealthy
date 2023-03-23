// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCSuWv_TNIx2MwDZ6erMdA9NLUhjLHgdbM',
  authDomain: 'dotask-a26f4.firebaseapp.com',
  projectId: 'dotask-a26f4',
  storageBucket: 'dotask-a26f4.appspot.com',
  messagingSenderId: '393835604958',
  appId: '1:393835604958:web:c156133727413a6e6e8b4f',
  measurementId: 'G-7KF47YPJNV',
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export const initFirebase = () => app;
