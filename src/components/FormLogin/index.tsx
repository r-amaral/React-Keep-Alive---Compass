import { FormEvent, useContext, useEffect, useState } from 'react';
import Button from '../Button';
import Input from '../Input';
import { FormTitle, FormLogin, ContainerInput, Icon, InvalidText, FormLink, FormRedirection } from './style';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from "firebase/auth";
import Loading from '../Loading';
import { UserContext } from '../../common/context/RegistrationData';
import { auth } from '../../firebaseConfig';

export default function Form() {

    const navigate = useNavigate()
    auth.signOut();

    const { loading, setLoading } = useContext(UserContext);

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [loggedError, setErrorLogged] = useState<boolean>(false);

    const loginUser = async (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();
        setLoading(true);

        signInWithEmailAndPassword(auth, email, password)
            .then(() => {
                setLoading(false)
                localStorage.setItem('token', 'logged')
                navigate('/home')
            }
            )
            .catch(() => {
                setLoading(false)
                setErrorLogged(true)
            });
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

            {loading && <Loading>Loading...</Loading>}
        </FormLogin >
    )
}