import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import { secondaryColor } from '../UI/variables';
import { primaryColor } from '../UI/variables';

export const FormRegistrationContainer = styled.form`
display:flex;
flex-direction: column;
`

export const FormTitle = styled.h3`
    font-weight: normal;
    font-size: 30px;
    color: ${primaryColor};
    margin: 0;

@media screen and (max-width:425px){
    font-size: 26px;
}
`

export const ContainerName = styled.div`
width: 100%;
display: flex;
flex-direction: row;
margin-top: 32px;
gap: 15px;
`

export const ContainerEmail = styled.div`
display: flex;
position: relative;
transition: 1s ease - out;
width: 100%;
flex-direction: column;
margin-top: 32px;
gap: 32px;
`

export const InputName = styled(Input)`
border: 1px solid ${secondaryColor};
width: 50%;
padding-right: 20px;
`

export const InputEmail = styled(Input)`

@media screen and (max-width: 768px){
    width: 100%;
}
`

export const ButtonRegistration = styled(Button)`
margin-top: 50px;
`

export const FormLink = styled.span`
margin-top: 20px;
font-size: 16px;
text-align: center;
color: ${primaryColor};
`

export const FormRedirection = styled.a`
color: #FF2D04;
font-weight:700;
cursor:pointer;
`
