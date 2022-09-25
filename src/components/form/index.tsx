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

const IconInside = styled(Icon)`
    margin-left: ${({ inputValue }: any) => inputValue ? '-40px' : '18px'};
`

export default function Form() {

    const [inputValue, setInputValue] = useState(false);

    return (
        <FormLogin>
            <FormTitle>Login</FormTitle>
            <ContainerInput>
                <Input
                    onChange={(event) => event.target.value != '' ? setInputValue(true) : setInputValue(false)}
                    type='text'
                    placeholder='Usuário'
                />
                <Icon inputValue={inputValue} user />
            </ContainerInput>
            <ContainerInput>
                <Input
                    onChange={(event) => event.target.value != '' ? setInputValue(true) : setInputValue(false)}
                    type='password'
                    placeholder='Senha'
                />
                <Icon inputValue={inputValue} />
            </ContainerInput>
            <Button>Continuar</Button>
        </FormLogin >
    )
}