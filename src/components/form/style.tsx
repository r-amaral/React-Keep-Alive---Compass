import styled, { StyledComponent } from 'styled-components';
import { primaryColor } from '../UI/variables';
import UserIcon from '../../assets/icons/icon-user.svg'
import PasswordIcon from '../../assets/icons/icon-password.svg'
import { IIcon } from '../../interface/IIcon';

export const FormTitle = styled.h3`
    font-weight: normal;
    font-size: 30px;
    color: ${primaryColor};
    margin: 0;
`

export const FormLogin = styled.form`
    display: flex;
    flex-direction: column;
    width: 40%;
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
`

export const IconUser = styled(Icon)`
  margin-left: ${({ iconUser }: any) => iconUser ? '-40px' : '18px'};
`

export const IconPassword = styled(Icon)`
 margin-left: ${({ iconPassword }: any) => iconPassword ? '-40px' : '18px'};
`

export const InvalidText = styled.span`
    align-self:center;
    margin-top: 28px;
    color: #E9B425;
    text-align: center;
    font-weight:700;
    width: 70%;
`