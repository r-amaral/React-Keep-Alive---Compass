import logoCompass from '../../assets/images/LogoCompassHome.png';
import MainLogoCompass from '../../assets/images/bola-LogoCompasso.png';
import CurrentDate from "../../components/Date";
import Text from "../../components/TextHome";
import Footer from '../../components/Footer';
import { Container, ImgLogoCompass, Header, Section, MainLogo, BoxText } from './style';
import { useEffect, useState } from 'react';
import PopUp from '../../components/Pop-Up';

export default function Home() {

    const [city, setCity] = useState<any>({});
    const [pop, setPop] = useState<boolean>(false);
    const [locate, setLocate] = useState<boolean>(false);

    let url = locate ? "https://www.iplocate.io/api/lookup" : "https://www.iplocate.io/api/lookup/185.61.218.198";

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => {
                setCity(data)
                console.log(data)
            })
    }, [locate])


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
                <div style={{ justifySelf: "flex-end" }} className="clima">

                    {city['city']}

                </div>

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