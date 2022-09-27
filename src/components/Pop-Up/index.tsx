import { IPop } from '../../interface/Ipop';
import { TextPop, Box, Button, Pop, Container } from './style';

export default function PopUp({ pop, setPop, setLocate }: IPop) {
    return (
        <Container pop={pop}>
            <Pop>
                <TextPop>Compass.uol deseja receber sua localização</TextPop>
                <Box>
                    <Button onClick={() => {
                        setPop(true)
                        setLocate(true)
                    }} acept>Aceitar</Button>
                    <Button onClick={() => setPop(true)} acept={false}>Rejeitar</Button>
                </Box>
            </Pop>
        </Container>
    )
}