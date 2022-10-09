import ButtonsFooter from './Buttons';
import FooterDescription from './Description';
import Refresh from './Refresh';
import { Container, FooterButtons } from './style'
import Welcome from './Welcome';

export default function Footer() {

    return (
        <Container>
            <Welcome />
            <FooterDescription />
            <FooterButtons>
                <Refresh />
                <ButtonsFooter />
            </FooterButtons>
        </Container >
    )
}