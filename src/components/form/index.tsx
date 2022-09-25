import styled from 'styled-components';
import { primaryColor } from '../UI/variables';
import UserIcon from '../../assets/images/icon-user.svg'
import PasswordIcon from '../../assets/images/icon-password.svg'
import { useState } from 'react';
import Button from './Button';
import Input from './Input';

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

const Icon = styled.i`
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

export default function Form() {

    const [iconUser, setIconUser] = useState<string>('');
    const [iconPassword, setIconPassword] = useState<string>('');
    const [invalidLogin, setinvalidLogin] = useState<boolean>(false);

    function validation(event: any) {

        event.preventDefault();

        let regEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/

        if (regEmail.test(iconUser)) return setinvalidLogin(true)
    }

    return (
        <FormLogin>
            <FormTitle>Login</FormTitle>
            <ContainerInput>
                <Input
                    onChange={event => setIconUser(event.target.value)}
                    value={iconUser}
                    type='text' placeholder='Usuário' />
                <IconUser iconUser={iconUser} user />
            </ContainerInput>
            <ContainerInput>
                <Input
                    onChange={event => setIconPassword(event.target.value)}
                    value={iconPassword}
                    type='password'
                    placeholder='Senha' />
                <IconPassword iconPassword={iconPassword} />
            </ContainerInput>

            {/* {invalidLogin ? <span>Ops, usuário ou senha inválidos. Tente novamente!</span> : <span>Passou</span>} */}

            <Button onClick={validation}>Continuar</Button>
        </FormLogin >
    )
}