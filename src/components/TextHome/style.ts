import styled from 'styled-components';

export const BoxText = styled.div`
display: flex;
flex-direction: column;
`
export const Title = styled.p<{ size: number }>`
font-weight: 700;
font-size: ${({ size }) => size}px;
text-align: right;
color: #C12D18;
margin: 0;


@media screen and (max-width:1025px) {
    font-size: ${({ size }) => (size / 1.2)}px;
  }
`
export const Translate = styled.span`
font-weight: 400;
font-size: 24px;
text-align: right;
color: #222222;
line-height: 20px;
`