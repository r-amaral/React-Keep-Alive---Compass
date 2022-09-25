import Form from '../../components/Form';
import 'normalize.css';
import compassLogo from '../../assets/images/Logo-Compass.png';

import { Login, H1, Paragraph, Banner, Container, CompassLogo, Header } from './style'

function App() {
  return (
    <Container>
      <Login>
        <Header>
          <H1>Olá,</H1>
          <Paragraph>Para continuar navegando de forma segura, efetue o login na rede.</Paragraph>
        </Header>
        <Form />
      </Login>

      <Banner >
        <CompassLogo src={compassLogo} alt="Logo da compasso" />
      </Banner>
    </Container>
  );
}

export default App;
