import { Container, ContinueButton, LogoutButton } from './style';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../../firebaseConfig';

export default function ButtonsFooter() {

    const navigate = useNavigate();

    return (
        <Container>
            <ContinueButton onClick={() => window.open('https://google.com', '_blank')}><span>Continuar</span> <span>Navegando</span></ContinueButton>
            <LogoutButton onClick={() => auth.signOut().then(() => navigate('/'))}>Logout</LogoutButton>
        </Container >
    )
}

