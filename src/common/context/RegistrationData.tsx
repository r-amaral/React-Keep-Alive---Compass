import { createContext, useState } from 'react';

export const UserContext = createContext<any>(null);
UserContext.displayName = "User";

export default function RegistrationProvider({ children }: any) {
    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    return (
        <UserContext.Provider
            value={{
                name,
                setName,
                lastName,
                setLastName,
                email,
                setEmail,
                password,
                setPassword,
                confirmPassword,
                setConfirmPassword
            }}
        >
            {children}
        </UserContext.Provider>
    )
}
