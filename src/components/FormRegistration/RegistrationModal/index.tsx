import LogoCompass from '../../../assets/images/Logo-Compass.png';
import { useNavigate } from 'react-router-dom';
import { Container, Modal, LogoCompassElement, ButtonModal, TextModal } from './styled';

export default function RegistrattionModal() {

    const navigate = useNavigate()

    return (
        <Container>
            <Modal>
                <LogoCompassElement src={LogoCompass} />
                <TextModal>Cadastro realizado com sucesso, clique no botão para continuar!!!</TextModal>
                <ButtonModal onClick={() => navigate('/')}>Continuar Navegando</ButtonModal>
            </Modal>
        </Container>
    )
}