import React from "react";
import styled from 'styled-components';
import logoCompass from '../../assets/images/LogoCompassHome.png';
import MainLogoCompass from '../../assets/images/bolaLogoCompass.png';
import CurrentDate from "../../components/Date";
import Text from "../../components/TextHome";

const Container = styled.div`
 background: linear-gradient(105.96deg, #FFFFFF 0%, #F0F0F0 97.86%);
 height:100%;
`

const ImgLogoCompass = styled.img`
width: 150px;
`

const Header = styled.header`
display: grid;
grid-template-columns: 1fr 1fr 1fr;
grid-row: 1fr;
padding: 25px 40px 0 40px;
`

const Section = styled.section`
display: flex;
justify-content: space-between;
`

const Footer = styled.footer`
position: relative;
background: linear-gradient(90.16deg, #33383D 0%, #1C1D20 100%);
height: 100px;
z-index: 5;
`

const MainLogo = styled.img`
    max-width: 825px;
    max-height: 825px;
    position: absolute;
`

const BoxText = styled.div`
margin-top: 166px;
display: flex;
flex-direction: column;
margin-right: 134px;
`

const textHome = [
    {
        title: "Our mission is",
        translate: "Nossa missão é"
    },
    {
        title: "to transform the world",
        translate: "transformar o mundo"
    },
    {
        title: "building digital experiences",
        translate: "construindo experiências digitais"
    },
    {
        title: "that enable our client’s growth",
        translate: "que permitam o crescimento dos nossos clientes"
    }
]

export default function Home() {

    return (
        <Container>
            <Header>
                <ImgLogoCompass src={logoCompass} alt="Logo Compass" />
                <CurrentDate />
                <div style={{ justifySelf: "flex-end" }} className="clima">12G</div>
            </Header>
            <Section>
                <div style={{ width: "800px", height: "740px" }}>
                    <MainLogo src={MainLogoCompass} alt="Logo Compass" />
                </div>
                <BoxText>
                    <Text title={textHome[0].title} translate={textHome[0].translate} size={36} />
                    <Text title={textHome[1].title} translate={textHome[1].translate} size={64} />
                    <Text title={textHome[2].title} translate={textHome[2].translate} size={64} />
                    <Text title={textHome[3].title} translate={textHome[3].translate} size={64} />
                </BoxText>
            </Section>

            <Footer></Footer>

        </Container >
    )
}