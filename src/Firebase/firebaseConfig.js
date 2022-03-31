// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import {API_KEY, AUTH_DOMAIN, PROJECT_ID, STORAGE_BUCKET, MEASUREMENT_ID, MESSAGING_SENDER_ID, APP_ID} from './firebaseKeys'
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: API_KEY,
    authDomain: AUTH_DOMAIN,
    projectId: PROJECT_ID,
    storageBucket: STORAGE_BUCKET,
    messagingSenderId: MESSAGING_SENDER_ID,
    appId: APP_ID,
    measurementId: MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const firestoreDB = initializeFirestore(app, {
    experimentalForceLongPolling: true,
    useFetchStreams: false,
  })
const auth = getAuth(app);

export {firestoreDB, auth}

