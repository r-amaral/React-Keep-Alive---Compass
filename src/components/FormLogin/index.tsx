import { FormEvent, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import { FormTitle, FormLogin, ContainerInput, Icon, InvalidText, FormLink, FormRedirection } from './style';
import { useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function Form() {

    const navigate = useNavigate();

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loggedError, setErrorLogged] = useState<boolean>(false);

    const auth = getAuth();
    auth.signOut()

    const loginUser = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        signInWithEmailAndPassword(auth, email, password)
            .then(() => navigate('/home'))
            .catch(() => setErrorLogged(true));
    }

    return (
        <FormLogin onSubmit={loginUser}>
            <FormTitle>Login</FormTitle>
            <ContainerInput>
                <Input
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value)}
                    type='text'
                    placeholder='Email'
                    invalidLogin={loggedError}
                />
                <Icon Icon={email} user />
            </ContainerInput>
            <ContainerInput>
                <Input
                    onChange={(event: React.ChangeEvent<HTMLInputElement>) => setPassword(event.target.value)}
                    type='password'
                    placeholder='Senha'
                    invalidLogin={loggedError}
                />
                <Icon Icon={password} user={false} />
            </ContainerInput>

            {loggedError && <InvalidText>Ops, email ou senha inválidos. Tente novamente!</InvalidText>}

            <Button logged={loggedError}>Continuar</Button>

            <FormLink>Caso você não possua um cadastro, <FormRedirection onClick={() => navigate('/registration')}>clique aqui</FormRedirection></FormLink>
        </FormLogin >
    )
}