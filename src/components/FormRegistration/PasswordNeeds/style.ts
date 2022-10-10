import styled from 'styled-components';
import XIcon from '../../../assets/icons/botaox.png';
import VIcon from '../../../assets/icons/check.png';

export const Container = styled.div<{ fade: boolean }>`
opacity:${({ fade }) => fade ? 1 : 0};
visibility: ${({ fade }) => fade ? 'visible' : 'hidden'};
transition: .3s;
position: absolute;
width: 85%;
left:0;
right: 0;
margin:auto;
max-width:200px;
background: white;
color: black;
top:170px;
display:flex;
justify-content: center;
box-shadow: 0 3px 6px -4px black;
z-index: 1000;
pointer-events: none;
`
export const Arrow = styled.span`
position: absolute;
box-shadow: -3px -3px 7px rgb(0 0 0 / 7%);
transform: translateY(6.53553391px) rotate(45deg);
width: 5px;
height: 5px;
background: white;
top: -9px;
`

export const Needs = styled.div`
width: 100%;
padding: 5% 10%;
display: flex;
flex-direction: column;
gap:5px;
`

export const Title = styled.h5`
font-size:16px;
`

export const Requirement = styled.span<{ status: boolean }>`
display: flex;
gap:5px;
font-size:14px;
font-weight:300;
color: ${({ status }) => status ? 'green' : 'red'};

`
export const Icon = styled.i<{ status: boolean }>`
display: inline-block;
background-image:url(${({ status }) => status ? VIcon : XIcon});
background-size: cover;
width:16px;
height: 16px;
`