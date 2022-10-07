import styled from 'styled-components';
import { primaryColor } from '../../components/UI/variables';
import banner from '../../assets/images/img.png';

export const HeaderRegistration = styled.header`
padding-bottom: 50px;
  width: 100%;

@media screen and (width:1024px) and (height:600px){
  padding-bottom:3vh;
  margin-bottom:4.14vh;
}

@media screen and (max-width:768px){
  padding: 0;
  margin-bottom:4.14vh;
}
`

export const Section = styled.section`
  display: flex;
  min-height: 100vh;
  height: 100%;
  width: 100%;
`

export const Content = styled.div`
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  padding: 20px 15.1% 50px 15.1%;

@media screen and (max-width:1024px) {
  padding: 20px 10% 50px 10%;
}

@media screen and (max-width:768px) {
  width: 100%;
  justify-content: flex-start;
  padding: 20px 15.1% 50px 15.1%;
}

@media screen and (max-width:425px) {
  padding: 10px 10% 50px 10%;
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