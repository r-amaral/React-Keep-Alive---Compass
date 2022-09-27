import styled from 'styled-components';
import { invalidColor, primaryColor, secondaryColor } from '../../UI/variables';
import { IInput } from '../../../interface/IInput';

const Input = styled.input<IInput>`
    border: 1px solid ${({ invalidLogin }: any) => invalidLogin ? invalidColor : secondaryColor} ;
    border-radius: 50px;
    height: 60px;
    color: ${primaryColor};
    background: #26292C;
    font-size: 16px;
    padding-left: 20px;
    padding-right: 45px;
    width: 100%;
    box-sizing: border-box;

    ::placeholder{
    color:${primaryColor}
    }
`

export default Input;
