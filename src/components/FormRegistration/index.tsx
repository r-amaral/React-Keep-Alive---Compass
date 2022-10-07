import { useNavigate } from "react-router-dom";
import { ButtonRegistration, ContainerEmail, ContainerName, FormRegistrationContainer, InputEmail, InputName, FormTitle, FormLink, FormRedirection } from "./style";
import React, { useState } from "react";
import PasswordNeeds from "./PasswordNeeds";

export default function FormRegistration() {

    const navigate = useNavigate()

    const [password, setPassowd] = useState('');
    const [fade, setFade] = useState(false);

    return (
        <FormRegistrationContainer>
            <FormTitle>Cadastro</FormTitle>
            <ContainerName>
                <InputName type='text' placeholder='Nome' required />
                <InputName type='text' placeholder='Sobrenome' required />
            </ContainerName>
            <ContainerEmail>
                <InputEmail type='text' placeholder='Email' required />
                <InputEmail
                    onChange={event => setPassowd(event.target.value)}
                    onBlur={() => setFade(false)}
                    onFocus={() => setFade(true)}
                    type='text' placeholder='Senha' required />
                <PasswordNeeds password={password} fade={fade} />
                <InputEmail type='password' placeholder='Confirmar Senha' required />
            </ContainerEmail>

            <ButtonRegistration>Cadastrar</ButtonRegistration>
            <FormLink>Caso você possua cadastro, <FormRedirection onClick={() => navigate('/')}>clique aqui</FormRedirection></FormLink>
        </FormRegistrationContainer >
    )
}