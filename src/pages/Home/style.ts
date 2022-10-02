import styled from 'styled-components';

export const Container = styled.div`
background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
height: 100vh;
display: flex;
flex-direction: column;

@media screen and (max-width:768px){
    height: initial;
}
`

export const ImgLogoCompass = styled.img`
width: 150px;

@media screen and (max-width:300px){
width: 120px;
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
`

export const BoxText = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
margin: 169px 7% 210px 0%;
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
`

export const BoxLocal = styled.div`
justify-self: flex-end;
display: flex;
flex-direction: column;
align-items: center;
`
