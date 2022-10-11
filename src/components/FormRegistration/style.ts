import styled from 'styled-components';
import Input from '../Input';
import Button from '../Button';
import { primaryColor, invalidColor, secondaryColor } from '../UI/variables';
import EyeActive from '../../assets/icons/eyeActive.png';
import EyeDesactive from '../../assets/icons/eyeDesactive.png';

export const FormRegistrationContainer = styled.form`
display:flex;
flex-direction: column;
width:100%;
`

export const FormTitle = styled.h3`
    font-weight: normal;
    font-size: 30px;
    color: ${primaryColor};
    margin: 0;
    margin-bottom:35px;

@media screen and (max-width:425px){
    font-size: 26px;
}
`

export const ContainerInputs = styled.div`
width: 100%;
display: flex;
flex-direction: column;
gap: 25px;
`

export const InvalidText = styled.span`
    align-self:center;
    margin-top: 28px;
    color: ${invalidColor};
    text-align: center;
    font-weight:700;
    width: 70%;
`

export const InputRegistration = styled(Input) <{ error: boolean }>`
border: 1px solid ${({ error }) => error ? invalidColor : secondaryColor};

@media screen and (max-width: 768px){
    width: 100%;
}
`
export const LabelRegistration = styled.label<{ error: boolean }>`
    font-size:16px;
    color: ${({ error }) => error ? invalidColor : secondaryColor};
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
display: flex;
flex-direction:column;
gap:5px;
`

export const Eye = styled.span`
background: url(${EyeDesactive}) no-repeat;
width: 16px;
height:16px;
top:46px;
right:20px;
position:absolute;
cursor: pointer;

&:active{
    background: url(${EyeActive}) no-repeat;
}
`
