import { FormEvent, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import { FormTitle, FormLogin, ContainerInput, Icon, InvalidText, FormLink, FormRedirection } from './style';
import { useNavigate } from 'react-router-dom';
// import { getDocs } from "firebase/firestore";
// import { useCollectionRef } from '../../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Form() {

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loggedError, setErrorLogged] = useState<boolean>(false);

    const navigate = useNavigate();

    const loginUser = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        // const data = await getDocs(useCollectionRef);
        // const users = data.docs.map((doc): any => ({ ...doc.data(), id: doc.id }))

        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then(() => navigate('/home'))
            .catch((error) => setErrorLogged(true));
    }

    return (
        <FormLogin onSubmit={loginUser}>
            <FormTitle>Login</FormTitle>
            <ContainerInput>
                <Input
                    onChange={(event: any) => setEmail(event.target.value)}
                    type='text'
                    placeholder='Usuário'
                    invalidLogin={loggedError}
                />
                <Icon Icon={email} user />
            </ContainerInput>
            <ContainerInput>
                <Input
                    onChange={(event: any) => setPassword(event.target.value)}
                    type='password'
                    placeholder='Senha'
                    invalidLogin={loggedError}
                />
                <Icon Icon={password} user={false} />
            </ContainerInput>

            {loggedError && <InvalidText>Ops, usuário ou senha inválidos. Tente novamente!</InvalidText>}

            <Button logged={loggedError}>Continuar</Button>

            <FormLink>Caso você não possua um cadastro, <FormRedirection onClick={() => navigate('/registration')}>clique aqui</FormRedirection></FormLink>
        </FormLogin >
    )
}