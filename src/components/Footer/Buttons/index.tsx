import { Container, ContinueButton, LogoutButton } from './style';
import { useNavigate } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

export default function ButtonsFooter() {

    const auth = getAuth();

    const navigate = useNavigate();

    function logout() {
        auth.signOut().then(() => navigate('/'))
    }

    return (
        <Container>
            <ContinueButton onClick={() => window.open('https://google.com', '_blank')}><span>Continuar</span> <span>Navegando</span></ContinueButton>
            <LogoutButton onClick={() => logout()} >Logout</LogoutButton>
        </Container >
    )
}

