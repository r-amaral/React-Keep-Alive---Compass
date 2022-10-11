import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyAuDl80-UMmWOGrodzri4ySy11Rz7LHp9s",
    authDomain: "keepalive-999cc.firebaseapp.com",
    projectId: "keepalive-999cc",
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const useCollectionRef = collection(db, 'users')

export const auth = getAuth(app);