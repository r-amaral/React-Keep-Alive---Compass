import logoCompass from '../../assets/images/LogoCompassHome.png';
import MainLogoCompass from '../../assets/images/bola-LogoCompasso.png';
import CurrentDate from "../../components/Date";
import Text from "../../components/TextHome";
import Footer from '../../components/Footer';
import { Container, ImgLogoCompass, Header, Section, MainLogo, BoxText, BoxLocal } from './style';
import { useEffect, useState } from 'react';
import PopUp from '../../components/Pop-Up';
import Localization from '../../components/LocalizationApi';
import Temperature from '../../components/Temperature';

export default function Home() {

    const [pop, setPop] = useState<boolean>(false);
    const [locate, setLocate] = useState<boolean>(false);

    const [temperature, setTemperature] = useState<number>(0);

    async function getTemperatureData(city: string) {

        const apiKey = 'ba605efc18f1572f61892fe426f18a1a';

        const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`);
        const data = await res.json();
        setTemperature(data.main.temp);
    }

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


    return (
        <Container>
            <PopUp setLocate={setLocate} pop={pop} setPop={setPop} />
            <Header>
                <ImgLogoCompass src={logoCompass} alt="Logo Compass" />
                <CurrentDate />
                <BoxLocal>
                    <Localization getTemperatureData={getTemperatureData} locate={locate} />
                    <Temperature temperature={temperature} />
                </BoxLocal>
            </Header>
            <Section>
                <MainLogo src={MainLogoCompass} alt="Logo Compass" />
                <BoxText>
                    <Text title={textHome[0].title} translate={textHome[0].translate} size={36} />
                    <Text title={textHome[1].title} translate={textHome[1].translate} size={64} />
                    <Text title={textHome[2].title} translate={textHome[2].translate} size={64} />
                    <Text title={textHome[3].title} translate={textHome[3].translate} size={64} />
                </BoxText>
            </Section>
            <Footer />
        </Container >
    )
}