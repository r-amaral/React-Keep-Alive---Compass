import { useContext } from 'react';
import { UserContext } from "../../../common/context/RegistrationData";
import { Container, Title, Name } from './style';

export default function Wellcome() {
    const { name } = useContext(UserContext)
    return (
        <Container>
            <Title>Bem Vindo(a)</Title>
            <Name>{name}</Name>
        </Container>
    )
}