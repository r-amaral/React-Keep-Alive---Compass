import styled from 'styled-components';
import { IText } from '../../interface/IText';

const BoxText = styled.div`
display: flex;
flex-direction: column;
`
const Title = styled.p<{ size: number }>`
font-weight: 700;
font-size: ${({ size }) => size}px;
text-align: right;
color: #C12D18;
margin: 0;
`
const Translate = styled.span`
font-weight: 400;
font-size: 24px;
text-align: right;
color: #222222;
line-height: 20px;
`



export default function Text({ title, translate, size }: IText) {
    return (
        <BoxText>
            <Title size={size}>{title}</Title>
            <Translate>{translate}</Translate>
        </BoxText>
    )
}