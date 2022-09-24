import styled from 'styled-components';
import { primaryColor } from '../../UI/variables';

export default function Input({ placeholder, type }: string | any) {

    const Input = styled.input`
    border: 1px solid #FFFFFF;
    border-radius: 50px;
    height: 60px;
    color: ${primaryColor};
    background: #26292C;
    font-size: 16px;
    padding-left: 20px;
    width: 100%;
    box-sizing: border-box;

    &::placeholder{
    color:${primaryColor}
    }
    
    `
    return (
        <Input type={type} placeholder={placeholder} />
    )
}