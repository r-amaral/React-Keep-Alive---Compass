import { FormEvent, useState } from 'react';
import Button from './Button';
import Input from './Input';
import { FormTitle, FormLogin, ContainerInput, IconUser, IconPassword, InvalidText } from './style';

export default function Form() {

    const [user, setIconUser] = useState<string>('');
    const [password, setIconPassword] = useState<string>('');
    const [invalidLogin, setinvalidLogin] = useState<boolean>(false);

    const validation = (event: FormEvent<HTMLFormElement> | any) => {

        event.preventDefault();

        let regEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

        if (regEmail.test(user) && password.length > 3) {
            return setinvalidLogin(false)
        } else return setinvalidLogin(true)
    }

    return (
        <FormLogin>
            <FormTitle>Login</FormTitle>
            <ContainerInput>
                <Input
                    onChange={(event: any) => setIconUser(event.target.value)}
                    value={user}
                    type='text'
                    placeholder='Usuário'
                    invalidLogin={invalidLogin}
                />
                <IconUser iconUser={user} user />
            </ContainerInput>
            <ContainerInput>
                <Input
                    onChange={(event: any) => setIconPassword(event.target.value)}
                    value={password}
                    type='password'
                    placeholder='Senha'
                    invalidLogin={invalidLogin}
                />
                <IconPassword iconPassword={password} />
            </ContainerInput>

            {invalidLogin ? <InvalidText>Ops, usuário ou senha inválidos. Tente novamente!</InvalidText> : ''}

            <Button onClick={validation}>Continuar</Button>
        </FormLogin >
    )
}