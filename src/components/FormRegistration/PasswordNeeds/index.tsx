import { Container, Arrow, Needs, Title, Requirement, Icon } from "./style";
import IPasswordModal from "../../../interface/IPasswordModal";

export default function PasswordNeeds({ password, fade }: IPasswordModal) {

    const validate = {
        characterAmount: password.length >= 6 ? true : false,
        specialCharacter: /\W|_/.test(password),
        upperCase: /[A-Z]/gm.test(password),
        lowerCase: /[a-z]/gm.test(password),
        number: /[0-9]/gm.test(password)
    }

    return (
        <Container fade={fade} >
            <Arrow />
            <Needs>
                <Title>Senha requerida:</Title>
                <Requirement status={validate.characterAmount}><Icon status={validate.characterAmount} />6 Caracteres</Requirement>
                <Requirement status={validate.specialCharacter}><Icon status={validate.specialCharacter} />1 Caracter Especial</Requirement>
                <Requirement status={validate.upperCase}><Icon status={validate.upperCase} />1 Letra Maiúscula</Requirement>
                <Requirement status={validate.lowerCase}><Icon status={validate.lowerCase} />1 Letra Minúscula</Requirement>
                <Requirement status={validate.number}><Icon status={validate.number} />1 Número</Requirement>
            </Needs>
        </Container >
    )
}