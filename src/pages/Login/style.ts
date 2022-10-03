import { primaryColor } from '../../components/UI/variables';
import banner from '../../assets/images/img.png';
import styled from 'styled-components';

export const Section = styled.section`
  display: flex;
  height: 100vh;
  width: 100%;

@media screen and (max-width:768px) {
    height: 100vh;
    width: 100vw;
}

@media screen and (max-width:280px){
    height: 100%;
}

@media screen and (max-height:420px){
    height: 100%;
}

@media screen and (height:540px) and (width:720px){
    height: 100%;
}
`

export const Content = styled.div`
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  height: 100%;
  width: 50%;
  display: flex;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 15.2%;
  padding-right: 15.2%;

@media screen and (max-width:1024px) {
  padding-left: 10%;
  padding-right: 10%;
}

@media screen and (max-width:768px) {
  width: 100%;
  padding-left: 15%;
  padding-right: 15%;
}

@media screen and (max-width:425px) {
  padding-left: 10%;
  padding-right: 10%;
}
`

export const Header = styled.div`
  padding-top: 18vh;
  padding-bottom: 13vh;
  width: 100%;

@media screen and (width:1024px) and (height:600px){
  padding-top: 5vh;
  padding-bottom:3vh;
  margin-bottom:4.14vh;
}

@media screen and (max-width:768px){
  padding: 0;
  margin-bottom:4.14vh;
}
`

export const H1 = styled.h1`
  color: ${primaryColor};
  margin:0;
  font-weight: 400;
  font-size: 60px;

@media screen and (max-width:425px){
  font-size: 48px;
}
`

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${primaryColor};
  width: 90%;
  margin: 16px 0 0 0 ;

@media screen and (max-width:425px){
  font-size: 14px;
}
`

export const Banner = styled.div`
  background-image: url(${banner});
  height: 100vh;
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  width: 50%;
  display: flex;
  justify-content: center;

@media screen and (max-width:768px) {
    display: none;
}

@media screen and (max-height:420px){
    min-height: 100%;
    height:initial;
    background-position: center center;
}
`

export const CompassLogo = styled.img`
  width: 307px;
  height: 70px;
  margin-top: 35px;
`

export const CompassLogoMobile = styled(CompassLogo)`
  display: none;

@media screen and (max-width:768px){
  display: block;
  margin-bottom:8.44vh;
}

@media screen and (max-width:375px){
  width: 250px;
  height: 60px;
}

@media screen and (max-width:320px){
  width: 200px;
  height: 50px;
}
`