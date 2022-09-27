import styled from 'styled-components';
import { secondaryColor } from '../../components/UI/variables';

export const Container = styled.div`
background: linear-gradient(105.96deg, secondaryColor 0%, #F0F0F0 97.86%);
height: 100vh;
display: flex;
flex-direction: column;
`

export const ImgLogoCompass = styled.img`
width: 150px;
`

export const Header = styled.header`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-row: 1fr;
padding: 25px 40px 0 40px;
height: 15.6vh;
`

export const Section = styled.section`
display: flex;
justify-content: space-between;
align-items: center;
height: 74.4vh;
`

export const MainLogo = styled.img`
align-self: flex-end;
width: 42vw;
background-size: cover;
max-width: 600px;
max-height: 750px;
`

export const BoxText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin-top: 169px;
margin-bottom: 169px;
margin-right: 134px; 
box-sizing: border-box;
`

export const BoxLocal = styled.div`
justify-self: flex-end;
display: flex;
flex-direction: column;
align-items: center;
`
