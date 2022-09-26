import ButtonsFooter from './Buttons';
import FooterDescription from './Description';
import Refresh from './Refresh';
import { Container, FooterButtons } from './style'

export default function Footer() {

    return (
        <Container>
            <FooterDescription />
            <FooterButtons>
                <Refresh />
                <ButtonsFooter />
            </FooterButtons>
        </Container >
    )
}