import styled from 'styled-components';
import { secondaryColor } from '../../UI/variables';

export const Container = styled.div`
display: flex;
align-items: center;
color: ${secondaryColor};
margin-left:12%;
box-sizing: border-box;

@media screen and (max-width:1025px) {
   margin-left: 0;
   margin-right: 30px;
  }
`

export const Text = styled.span`
font-size: 14px;
text-align: right;
width: 109px;
`

export const Box = styled.div`
display: flex;
flex-direction: column;
align-items:center;
margin-left: 33px;
`

export const Time = styled.span`
font-size: 2.55vw;
align-self: center;
font-weight: 700;
line-height: 44px;
`

export const Seconds = styled.span`
font-size: 14px;
/* line-height: 10px; */
`