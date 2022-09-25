import styled, { StyledComponent } from 'styled-components';
import { primaryColor } from '../UI/variables';
import UserIcon from '../../assets/images/icon-user.svg'
import PasswordIcon from '../../assets/images/icon-password.svg'
import { useState } from 'react';
import Button from './Button';
import Input from './Input';

interface IIcon {
    iconUser: string;
    iconPassword: string;
    user: boolean;
}

const FormTitle = styled.h3`
    font-weight: normal;
    font-size: 30px;
    color: ${primaryColor};
    margin: 0;
`

const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 40%;
`

const ContainerInput = styled.div`
    position: relative;
    width: 100%;
    margin-top:32px;
`

const Icon = styled.i<IIcon>`
    background-image:url(${({ user }: any) => user ? UserIcon : PasswordIcon});
    position: absolute;
    width: 20px;
    height:25px;
    background-repeat: no-repeat;
    top: 16px;
    transition: .4s;
`

const IconUser = styled(Icon)`
  margin-left: ${({ iconUser }: any) => iconUser ? '-40px' : '18px'};
`

const IconPassword = styled(Icon)`
 margin-left: ${({ iconPassword }: any) => iconPassword ? '-40px' : '18px'};
`

const InvalidText = styled.span`
    margin-top: 28px;
    color: #E9B425;
    text-align: center;
    font-weight:700;
    width: 90%;
`

export default function Form() {

    const [user, setIconUser] = useState<string>('');
    const [password, setIconPassword] = useState<string>('');
    const [invalidLogin, setinvalidLogin] = useState<boolean>(false);

    const validation = (event: any) => {

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