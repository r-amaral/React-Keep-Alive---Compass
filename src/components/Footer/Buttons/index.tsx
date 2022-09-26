import { Container, ContinueButton, LogoutButton } from './style';
import { useNavigate } from 'react-router-dom';

export default function ButtonsFooter() {

    const navigate = useNavigate();

    return (
        <Container>
            <ContinueButton onClick={() => window.open('www.google.com', '_blank')}>Continuar Navegando</ContinueButton>
            <LogoutButton onClick={() => navigate('/')} >Logout</LogoutButton>
        </Container>
    )
}

