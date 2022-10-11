import logoCompass from '../../assets/images/LogoCompassHome.png';
import MainLogoCompass from '../../assets/images/bolaLogoCompass.png';
import CurrentDate from "../../components/Date";
import Text from "../../components/TextHome";
import Footer from '../../components/Footer';
import { Container, ImgLogoCompass, Header, Section, MainLogo, BoxText, BoxLocal } from './style';
import Localization from '../../components/Localization';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../firebaseConfig';

export default function Home() {

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => !auth.currentUser && navigate('/'), 400)
    }, [])

    return (
        <Container>
            <Header>
                <ImgLogoCompass src={logoCompass} alt="Logo Compass" />
                <CurrentDate />
                <BoxLocal>
                    <Localization />
                </BoxLocal>
            </Header>
            <Section>
                <MainLogo src={MainLogoCompass} alt="Logo Compass" />
                <BoxText>
                    <Text />
                </BoxText>
            </Section>
            <Footer />
        </Container >
    )
}