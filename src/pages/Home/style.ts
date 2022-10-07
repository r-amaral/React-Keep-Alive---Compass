import styled from 'styled-components';

export const Container = styled.div`
  background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
  min-height: 100vh;
  display: flex;
  justify-content: space-between;
  flex-direction: column;

@media screen and (max-width:768px){
  height: initial;
}
`

export const ImgLogoCompass = styled.img`
  width: 150px;

@media screen and (max-width:330px){
  width: 100px;
}
`

export const Header = styled.header`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-row: 1fr;
  padding: 25px 2.10% 0 2.10%;
  height: 15.6vh;

@media screen and (max-width:740px){
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px 5% 0 5%;
}

@media screen and (max-height:500px){
  justify-content: space-between;
  height: 35.6vh;
}
`

export const Section = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 74.4vh;

@media screen and (max-width:768px){
  padding-left: 5%;
  padding-right: 5%;
  position: relative;
  height: 61.55vh;
}

@media screen and (max-width:425px){
  height: 52vh;
}

@media screen and (max-width:375px){
  height: 60vh;
}
@media screen and (max-height:300px){
  margin-top: 40px;
}
`

export const MainLogo = styled.img`
  align-self: flex-end;
  max-height:83.3vh;
  box-sizing: border-box;
  max-width: 31.25vw;
  margin-bottom: -8vh;

@media screen and (max-width:768px){
  margin-bottom: -25px;
  margin-left:-6%;
}

@media screen and (max-width:425px){
  position: absolute;
}

@media screen and (max-height:500px){
  height: 50vh;
}
`

export const BoxText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 50px 7% 50px 0%;
  box-sizing: border-box;

@media screen and (max-width:768px){
  margin: 0;
}

@media screen and (max-width:425px){
  margin-top: 50px;
  margin-bottom: 178px;
}

@media screen and (max-width:280px){
  margin-top: 110px;
}

@media screen and (max-height: 500px){
  margin-bottom: 50px;
}
`

export const BoxLocal = styled.div`
  justify-self: flex-end;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-height: 500px){
    grid-column: 3;
}
`