import styled from 'styled-components';
import { secondaryColor } from '../../UI/variables';

export const Container = styled.div`
width:100vw;
height: 100vh;
position:fixed;
background: rgba(0,0,0,0.5);
top:0;
left:0;
display: flex;
justify-content: center;
align-items: center;
`

export const Modal = styled.div`
display:flex;
flex-direction: column;
align-items: center;
justify-content: space-between;
background: #26292C;
height:35%;
width: 30%;
padding:1% 2%;
text-align: center;

@media screen and (max-width:950px){
width: 40%;
padding:3% 5%;
}

@media screen and (max-width:630px){
width: 60%;
}

@media screen and (max-width:425px){
height:40%;
width: 80%;
padding:5% 7%;
}
`

export const LogoCompassElement = styled.img`
width: 40%;
min-width: 130px;
`
export const TextModal = styled.span`
color:${secondaryColor};

font-size:22px;

@media screen and (max-width:950px){
font-size:18px;
}

@media screen and (max-width:630px){
    font-size:16px;
}
`

export const ButtonModal = styled.button`
background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
border:none;
outline: none;
padding:15px;
cursor: pointer;
color:${secondaryColor};

@media screen and (max-width:425px){
width: 80%;
padding:15px 8px;
}
`