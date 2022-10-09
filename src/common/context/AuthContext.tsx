import { createContext, useState } from 'react';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { getDocs } from "firebase/firestore";
import { useCollectionRef } from '../../firebaseConfig';

export const AuthContext = createContext(null as any);
AuthContext.displayName = "Authentication";

export default function AuthContextProvider({ children }: any) {

    const [nameHome, setNameHome] = useState<string>('');

    const auth = getAuth();

    onAuthStateChanged(auth, (user: any) => {

        const getUser = async () => {

            const data = await getDocs(useCollectionRef);
            var usersDataBase = data.docs.map((doc): any => ({ ...doc.data(), id: doc.id }))
            const userDataBase = usersDataBase.find(element => element.email === user?.email)

            // user ? setNameHome(userDataBase.name) : console.log('User sing-out')

            if (user) {
                console.log(user)
                setNameHome(userDataBase.name)
            } else {
                console.log('sing-out')
            }
        }
        getUser()
    });

    return (
        <AuthContext.Provider value={{ nameHome }}>
            {children}
        </AuthContext.Provider>
    )
}