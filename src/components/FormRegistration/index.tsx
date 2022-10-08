import { useNavigate } from "react-router-dom";
import { ButtonRegistration, ContainerEmail, ContainerName, FormRegistrationContainer, InputEmail, InputName, FormTitle, FormLink, FormRedirection, InvalidText } from "./style";
import { FormEvent, useState, useContext } from "react";
import PasswordNeeds from "./PasswordNeeds";
import { addDoc } from "firebase/firestore";
import { useCollectionRef } from '../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app } from '../../firebaseConfig';
import { UserContext } from "../../common/context/RegistrationData";

export default function FormRegistration() {

    const navigate = useNavigate();

    const {
        name,
        lastName,
        email,
        password,
        confirmPassword,
        setName,
        setLastName,
        setEmail,
        setPassword,
        setConfirmPassword
    } = useContext(UserContext);

    const [fade, setFade] = useState(false);
    const [error, setError] = useState<any>(false);

    const validate = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        let regEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
        let regStrongPassword = /^(?=.*[A-Z])(?=.*[\W|_])(?=.*[0-9])(?=.*[a-z]).{6,}$/;

        if (name.length <= 3) return setError(true)
        if (lastName.length <= 3) return setError(true)
        if (!regEmail.test(email)) return setError(true)
        if (!regStrongPassword.test(password)) return setError(true)
        if (confirmPassword !== password) return setError(true)

        createUser()
    }

    const createUser = async () => {

        const auth = getAuth(app);

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => addDoc(useCollectionRef, {
                name,
                lastName,
                email,
                password
            }))
            .then(() => navigate('/'))
            .catch((error) => console.log(error));
    }

    return (
        <FormRegistrationContainer onSubmit={validate}>
            <FormTitle>Cadastro</FormTitle>
            <ContainerName>
                <InputName onChange={event => setName(event.target.value)} type='text' placeholder='Nome' required />
                <InputName onChange={event => setLastName(event.target.value)} type='text' placeholder='Sobrenome' required />
            </ContainerName>
            <ContainerEmail>
                <InputEmail onChange={event => setEmail(event.target.value)} type='text' placeholder='Email' required />
                <InputEmail
                    onChange={event => setPassword(event.target.value)}
                    onBlur={() => setFade(false)}
                    onFocus={() => setFade(true)}
                    type='text' placeholder='Senha' required
                />
                <PasswordNeeds password={password} fade={fade} />
                <InputEmail onChange={event => setConfirmPassword(event.target.value)} type='password' placeholder='Confirmar Senha' required />
            </ContainerEmail>

            {error && <InvalidText>Ops, credenciais incorretas. Tente novamente!</InvalidText>}
            <ButtonRegistration error={error}>Cadastrar</ButtonRegistration>

            <FormLink>Caso você possua cadastro, <FormRedirection onClick={() => navigate('/')}>clique aqui</FormRedirection></FormLink>
        </FormRegistrationContainer >
    )
}