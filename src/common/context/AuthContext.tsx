import { createContext, useState } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { auth, useCollectionRef } from '../../firebaseConfig';

export const AuthContext = createContext(null as any);
AuthContext.displayName = "Authentication";

export default function AuthContextProvider({ children }: any) {

    const [nameHome, setNameHome] = useState<string>('');

    onAuthStateChanged(auth, (user: any) => {

        const getUser = async () => {

            const data = await getDocs(useCollectionRef);

            const usersDataBase = data.docs.map((doc): any => ({ ...doc.data(), id: doc.id }));

            const userDataBase = usersDataBase.find(element => element.email === user?.email);

            user ? setNameHome(userDataBase.name) : console.log('Sing-out');
        }
        getUser()
    });

    return (
        <AuthContext.Provider value={{ nameHome }}>
            {children}
        </AuthContext.Provider>
    )
}