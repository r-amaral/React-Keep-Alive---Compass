import { useContext } from 'react';
import { AuthContext } from '../../../common/context/AuthContext';
import { Container, Title, Name } from './style';

export default function Welcome() {
    const { nameHome } = useContext(AuthContext)
    return (
        <Container>
            <Title>Bem Vindo(a)</Title>
            <Name>{nameHome}</Name>
        </Container>
    )
}