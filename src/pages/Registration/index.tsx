import { Banner, CompassLogo, CompassLogoMobile, Content, H1, Paragraph, Section } from "../Login/style";
import compassLogo from '../../assets/images/Logo-Compass.png';
import compassLogoMobile from '../../assets/images/Logo-Compass.png';
import FormRegistration from "../../components/FormRegistration";
import { HeaderRegistration } from "./style";

export default function Registration() {
    return (
        <Section>
            <Content>
                <CompassLogoMobile src={compassLogoMobile} alt="Logo da compasso" />
                <HeaderRegistration>
                    <H1>Olá</H1>
                    <Paragraph>Para continuar navegando de forma segura, efetue o cadastro na rede.</Paragraph>
                </HeaderRegistration>
                <FormRegistration />
            </Content>
            <Banner>
                <CompassLogo src={compassLogo} alt="Logo da compasso" />
            </Banner>
        </Section>
    )
}