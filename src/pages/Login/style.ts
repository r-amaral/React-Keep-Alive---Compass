import { primaryColor } from '../../components/UI/variables';
import banner from '../../assets/images/img.png';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  height: 100vh;
`

export const Section = styled.section`
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  height: 100%;
  width: 50%;
  display: flex;
  /* justify-content: center; */
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  padding-left: 15.2%;
  padding-right: 15.2%;

  @media screen and (max-width:768px) {
   width: 100%;
  }
`
export const Header = styled.div`
/* padding-top: 52%; */
padding-top: 18vh;
padding-bottom: 13vh;
  /* width:40%; */
`

export const H1 = styled.h1`
  color: ${primaryColor};
  margin:0;
  font-weight: 400;
  font-size: 60px;
`

export const Paragraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${primaryColor};
  width: 90%;
  /* height: 90px; */
  /* margin-bottom: 97px; */
  margin: 17px 0 0 0 ;
`

export const Banner = styled.section`
  background-image: url(${banner});
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  display: flex;
  justify-content: center;

  @media screen and (max-width:768px) {
    display: none;
  }
`

export const CompassLogo = styled.img`
  width: 307px;
  height: 70px;
  margin-top: 35px;
`

