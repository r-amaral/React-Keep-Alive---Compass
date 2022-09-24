import Input from '../components/input';
import styled from 'styled-components'
import 'normalize.css';
import { primaryColor } from '../components/UI/variables';
import banner from '../assets/images/img.png'
import compassLogo from '../assets/images/Logo-Compass.png'

function App() {

  const Login = styled.section`
    background: linear-gradient(180deg, #33383D 0%, #1C1D20 100%);
    height: 100vh;
    width: 50%;
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
   width: 250px;
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

  return (
    <Div>
      <Login className="App">
        <H1>Olá,</H1>
        <Paragraph>Para continuar navegando de forma segura, efetue o login na rede.</Paragraph>
        <Input />
      </Login>

      <Banner >
        <CompassLogo src={compassLogo} alt="" />
      </Banner>
    </Div>
  );
}

export default App;
