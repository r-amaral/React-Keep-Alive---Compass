import Form from '../../components/Form'
import styled from 'styled-components'
import 'normalize.css';
import { primaryColor } from '../../components/UI/variables';
import banner from '../../assets/images/img.png'
import compassLogo from '../../assets/images/Logo-Compass.png'

const Login = styled.section`
  background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
  height: 100vh;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const H1 = styled.h1`
  color: ${primaryColor};
  margin:0;
  font-weight: 400;
  font-size: 60px;
`

const Paragraph = styled.p`
  font-weight: 400;
  font-size: 16px;
  color: ${primaryColor};
  width: 90%;
  height: 90px;
  margin-bottom: 97px;
  margin-top: 17px;
`

const Banner = styled.section`
  background-image: url(${banner});
  height: 100vh;
  background-size: cover;
  background-repeat: no-repeat;
  width: 50%;
  display: flex;
  justify-content: center;
`

const Div = styled.div`
  display: flex;
`

const CompassLogo = styled.img`
  width: 307px;
  height: 70px;
  margin-top: 35px;
`

const Header = styled.div`
  width:40%;
`

function App() {
  return (
    <Div>
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
    </Div>
  );
}

export default App;
