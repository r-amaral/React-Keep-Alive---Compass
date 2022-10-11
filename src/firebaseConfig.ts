import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";

export const firebaseConfig = {
    apiKey: "AIzaSyCbHlefkaixi_NRQWwv_sf6XR_jxLeUcsk",
    authDomain: "keepalive-db.firebaseapp.com",
    databaseURL: "https://keepalive-db-default-rtdb.firebaseio.com",
    projectId: "keepalive-db",
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const useCollectionRef = collection(db, 'users')

export const auth = getAuth(app);