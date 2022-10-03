import Form from '../../components/Form';
import compassLogo from '../../assets/images/Logo-Compass.png';
import compassLogoMobile from '../../assets/images/Logo-Compass.png';
import { Content, H1, Paragraph, Banner, Section, CompassLogo, CompassLogoMobile, Header } from './style';

function Login() {
  return (
    <Section>
      <Content>
        <CompassLogoMobile src={compassLogoMobile} alt="Logo da compasso" />
        <Header>
          <H1>Olá,</H1>
          <Paragraph>Para continuar navegando de forma segura, efetue o login na rede.</Paragraph>
        </Header>
        <Form />
      </Content>

      <Banner >
        <CompassLogo src={compassLogo} alt="Logo da compasso" />
      </Banner>
    </Section>
  );
}

export default Login;
