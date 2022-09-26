import Form from '../../components/Form';
import compassLogo from '../../assets/images/Logo-Compass.png';
import { Section, H1, Paragraph, Banner, Container, CompassLogo, Header } from './style';

function Login() {
  return (
    <Container>
      <Section>
        <Header>
          <H1>Olá,</H1>
          <Paragraph>Para continuar navegando de forma segura, efetue o login na rede.</Paragraph>
        </Header>
        <Form />
      </Section>

      <Banner >
        <CompassLogo src={compassLogo} alt="Logo da compasso" />
      </Banner>
    </Container>
  );
}

export default Login;
