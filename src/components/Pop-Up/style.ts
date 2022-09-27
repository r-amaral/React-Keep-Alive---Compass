import styled from 'styled-components';
import { secondaryColor } from '../UI/variables';
import IconCompassUol from '../../assets/images/LogoCompassHome.png';

export const Container = styled.div<{ pop: boolean }>`
position: absolute;
display: ${({ pop }: any) => pop ? 'none' : 'flex'};
justify-content: center;
inset: 0px;
height: auto;
width: 100%;
box-sizing: border-box;
font-size: 20px;
padding: 20px;
z-index: 2;
background:rgba(0, 0, 0, 0.5);
`

export const Pop = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-end;
position: relative;
height: 20%;
width: 22%;
background: rgb(255, 255, 255);
border-radius: 10px;
z-index: 70;
top: 0px;
left: 10px;
padding: 20px;
box-sizing: border-box;
`

export const IconCompass = styled.i`
background-image: url(${IconCompassUol});
width: 150px;
height: 40px;
position: absolute;
left: 0;
top: 0;
z-index: 5;
`

export const TextPop = styled.span`
text-align: center;
margin-top: 40px;
`

export const Box = styled.div`
display: flex;
gap: 10px;
`

export const Button = styled.button<{ acept: boolean }>`
border: none;
cursor: pointer;
color: ${secondaryColor};
background: ${({ acept }) => acept ? "#E9B425" : 'black'};
border-radius: 5px;
padding: 5px;
`