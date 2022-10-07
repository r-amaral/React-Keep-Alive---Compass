import logoCompass from '../../assets/images/LogoCompassHome.png';
import MainLogoCompass from '../../assets/images/bolaLogoCompass.png';
import CurrentDate from "../../components/Date";
import Text from "../../components/TextHome";
import Footer from '../../components/Footer';
import { Container, ImgLogoCompass, Header, Section, MainLogo, BoxText, BoxLocal } from './style';
import Localization from '../../components/Localization';

export default function Home() {

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