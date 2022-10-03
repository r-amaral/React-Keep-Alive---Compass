import styled from 'styled-components';
import { invalidColor, primaryColor } from '../UI/variables';
import UserIcon from '../../assets/icons/icon-user.svg'
import PasswordIcon from '../../assets/icons/icon-password.svg'
import { IIcon } from '../../interface/IIcon';

export const FormTitle = styled.h3`
    font-weight: normal;
    font-size: 30px;
    color: ${primaryColor};
    margin: 0;

@media screen and (max-width:425px){
    font-size: 26px;
}
`

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 100%;
@media screen and (max-width:280px){
    padding-bottom: 17vh;
}
`

export const ContainerInput = styled.div`
    position: relative;
    width: 100%;
    margin-top:32px;
`

export const Icon = styled.i<IIcon>`
    background-image:url(${({ user }: any) => user ? UserIcon : PasswordIcon});
    position: absolute;
    width: 20px;
    height:25px;
    background-repeat: no-repeat;
    top: 16px;
    transition: .4s;
    margin-left: ${({ Icon }: any) => Icon ? '-40px' : '18px'};
`


export const InvalidText = styled.span`
    align-self:center;
    margin-top: 28px;
    color: ${invalidColor};
    text-align: center;
    font-weight:700;
    width: 70%;
`