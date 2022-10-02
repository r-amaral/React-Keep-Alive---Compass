import styled from 'styled-components';

export const Container = styled.footer`
background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
height: 10vh;
width: 100%;
display: flex;
align-items: center;
justify-self: center;


@media screen and (max-width:830px) {
    flex-direction: column;
    height:initial;
    padding-left: 5%;
    padding-right: 5%;
    z-index: 2;
  }
`

export const FooterButtons = styled.div`
width: 51.5%;
height: 100%;
display: flex;
justify-content:space-between;

@media screen and (max-width:830px) {
    flex-direction: column;
    width: 100%;
    align-items: center;
  }
`