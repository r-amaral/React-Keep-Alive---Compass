import Input from './input';
import styled from 'styled-components';
import { primaryColor } from '../UI/variables';
import Button from './button';
import UserIcon from '../../assets/images/icon-user.svg'
import PasswordIcon from '../../assets/images/icon-password.svg'

export default function Form() {

    const FormTitle = styled.h3`
    font-weight: normal;
    font-size: 30px;
    color: ${primaryColor};
    margin: 0;
`

    const Form = styled.form`
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
    top: 19px;
    margin-left: 18px;
`

    return (
        <Form>
            <FormTitle>Login</FormTitle>
            <ContainerInput>
                <Input type={'text'} placeholder={'Usuário'}></Input>
                <Icon user />
            </ContainerInput>
            <ContainerInput>
                <Input type={'password'} placeholder={'Senha'}></Input>
                <Icon />
            </ContainerInput>
            <Button />
        </Form>
    )
}