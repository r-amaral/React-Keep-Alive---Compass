import ButtonsFooter from './Buttons';
import FooterDescription from './Description';
import Refresh from './Refresh';
import { Container, FooterButtons } from './style'
import Wellcome from './Welcome';

export default function Footer() {

    return (
        <Container>
            <Wellcome />
            <FooterDescription />
            <FooterButtons>
                <Refresh />
                <ButtonsFooter />
            </FooterButtons>
        </Container >
    )
}