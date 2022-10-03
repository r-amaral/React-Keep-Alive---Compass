import { FormEvent, useState } from 'react';
import Button from './Button';
import Input from './Input';
import { FormTitle, FormLogin, ContainerInput, Icon, InvalidText } from './style';
import { useNavigate } from 'react-router-dom';

export default function Form() {

    const [user, setUser] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [logged, setLogged] = useState<boolean>(false);

    const navigate = useNavigate();

    const validationInput = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        let regEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

        if (regEmail.test(user) && password.length > 3) {
            setLogged(false)
            navigate('/home')
        } else setLogged(true)
    }


    return (
        <FormLogin onSubmit={validationInput}>
            <FormTitle>Login</FormTitle>
            <ContainerInput>
                <Input
                    onChange={(event: any) => setUser(event.target.value)}
                    type='text'
                    placeholder='Usuário'
                    invalidLogin={logged}
                />
                <Icon Icon={user} user />
            </ContainerInput>
            <ContainerInput>
                <Input
                    onChange={(event: any) => setPassword(event.target.value)}
                    type='password'
                    placeholder='Senha'
                    invalidLogin={logged}
                />
                <Icon Icon={password} user={false} />
            </ContainerInput>

            {logged ? <InvalidText>Ops, usuário ou senha inválidos. Tente novamente!</InvalidText> : ''}

            <Button>Continuar</Button>
        </FormLogin >
    )
}