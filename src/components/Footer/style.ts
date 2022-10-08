import styled from 'styled-components';

export const Container = styled.footer`
background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
min-height: 10vh;
width: 100%;
display: flex;
align-items: center;
justify-self: center;

@media screen and (max-width:830px) {
    flex-direction: column;
    justify-content: space-between;
    min-height: auto;
    height:initial;
    padding-left: 5%;
    padding-right: 5%;
    z-index: 2;
  }

  @media screen and (max-height:500px){
    min-height: auto;
  }

  @media screen and (max-width:425px) {
    height:100%;
    min-height: 32.4vh;
  }
`

export const FooterButtons = styled.div`
width: 51.5%;
min-height: 10vh;
display: flex;
justify-content:space-between;

@media screen and (max-width:830px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`