import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import { primaryColor, invalidColor, secondaryColor } from '../UI/variables';
import EyeActive from '../../assets/icons/eyeActive.png';
import EyeDesactive from '../../assets/icons/eyeDesactive.png';

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
transition: 1s ease-out;
width: 100%;
flex-direction: column;
margin-top: 32px;
gap: 32px;
`

export const InputName = styled(Input) <{ error: boolean }>`
border: 1px solid ${({ error }) => error ? invalidColor : secondaryColor};
width: 50%;
padding-right: 20px;
`

export const InvalidText = styled.span`
    align-self:center;
    margin-top: 28px;
    color: ${invalidColor};
    text-align: center;
    font-weight:700;
    width: 70%;
`

export const InputEmail = styled(Input) <{ error: boolean }>`
border: 1px solid ${({ error }) => error ? invalidColor : secondaryColor};

@media screen and (max-width: 768px){
    width: 100%;
}
`

export const ButtonRegistration = styled(Button) <{ error: any }>`
margin-top: ${({ error }) => error ? '28px' : '50px'};
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

export const ContainerInput = styled.div`
width: 100%;
position:relative;
`

export const Eye = styled.span`
background: url(${EyeDesactive}) no-repeat;
width: 16px;
height:16px;
top:22px;
right:20px;
position:absolute;
cursor: pointer;

&:active{
    background: url(${EyeActive}) no-repeat;
}
`
