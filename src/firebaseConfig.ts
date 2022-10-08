import { initializeApp } from "firebase/app";
import { collection, getFirestore, getDocs } from "firebase/firestore";
import { useEffect } from "react";

export const firebaseConfig = {
    apiKey: "AIzaSyCbHlefkaixi_NRQWwv_sf6XR_jxLeUcsk",
    authDomain: "keepalive-db.firebaseapp.com",
    databaseURL: "https://keepalive-db-default-rtdb.firebaseio.com",
    projectId: "keepalive-db",
};

export const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const useCollectionRef = collection(db, 'users')

// useEffect(() => {
//     const getUsers = async () => {
//         const data = await getDocs(useCollectionRef);
//         // console.log(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })))
//     }
//     getUsers()
// }, [])

