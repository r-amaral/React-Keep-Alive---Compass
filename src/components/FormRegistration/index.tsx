import { useNavigate } from "react-router-dom";
import { ButtonRegistration, ContainerInput, ContainerEmail, Eye, ContainerName, FormRegistrationContainer, InputEmail, InputName, FormTitle, FormLink, FormRedirection, InvalidText } from "./style";
import { FormEvent, useState, useContext } from "react";
import PasswordNeeds from "./PasswordNeeds";
import { addDoc } from "firebase/firestore";
import { useCollectionRef, app } from '../../firebaseConfig'
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../common/context/RegistrationData";
import Loading from "../Loading";

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
        setConfirmPassword,
        loading,
        setLoading
    } = useContext(UserContext);

    const [fade, setFade] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [showPassword, setShowPassword] = useState<boolean>(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState<boolean>(false);

    const [errorStyle, setErrorStyle] = useState({
        name: false,
        lastName: false,
        email: false,
        password: false,
        confirmPassword: false
    })

    const errorType = {
        incorrectCredentials: 'Ops, credenciais inválidas. Corrija e Tente novamente!',
        existingEmail: 'Ops, Esse email já foi cadastrado. Tente outro email!'
    }

    const validate = (event: FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const regEmail = /[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/;
        const regName = /^[a-zA-Z]{3,15}$/;
        const regStrongPassword = /^(?=.*[A-Z])(?=.*[\W|_])(?=.*[0-9])(?=.*[a-z]).{6,}$/;

        const ErrorObj = {
            ...errorStyle,
            name: regName.test(name) ? false : true,
            lastName: regName.test(lastName) ? false : true,
            email: regEmail.test(email) ? false : true,
            password: regStrongPassword.test(password) ? false : true,
            confirmPassword: confirmPassword === password ? false : true
        }

        setErrorStyle(ErrorObj);

        if (Object.values(ErrorObj).find((attribute: boolean) => attribute === true)) return setError(errorType.incorrectCredentials);

        setLoading(true);
        createUser();
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
            .then(() => {
                setLoading(false)
                navigate('/')
            })
            .catch((error) => {
                setLoading(false)
                error.code == "auth/email-already-in-use"
                    ? setError(errorType.existingEmail)
                    : setError(errorType.incorrectCredentials)
            }
            );
    }

    return (
        <FormRegistrationContainer onSubmit={validate}>
            <FormTitle>Cadastro</FormTitle>
            <ContainerName>
                <InputName error={errorStyle.name} onChange={event => setName(event.target.value)} type='text' placeholder='Nome' required />
                <InputName error={errorStyle.lastName} onChange={event => setLastName(event.target.value)} type='text' placeholder='Sobrenome' required />
            </ContainerName>
            <ContainerEmail>
                <InputEmail error={errorStyle.email} onChange={event => setEmail(event.target.value)} type='text' placeholder='Email' required />
                <ContainerInput>
                    <InputEmail
                        error={errorStyle.password}
                        onChange={event => setPassword(event.target.value)}
                        onBlur={() => setFade(false)}
                        onFocus={() => setFade(true)}
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Senha' required
                    />
                    <Eye onPointerDown={() => setShowPassword(true)} onPointerUp={() => setShowPassword(false)} />
                </ContainerInput>
                <PasswordNeeds password={password} fade={fade} />
                <ContainerInput>
                    <InputEmail
                        error={errorStyle.confirmPassword}
                        onChange={event => setConfirmPassword(event.target.value)}
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='Confirmar Senha' required
                    />
                    <Eye onPointerDown={() => setShowConfirmPassword(true)} onPointerUp={() => setShowConfirmPassword(false)} />
                </ContainerInput>
            </ContainerEmail>

            {error && <InvalidText>{error}</InvalidText>}
            <ButtonRegistration error={error}>Cadastrar</ButtonRegistration>

            <FormLink>Caso você possua cadastro, <FormRedirection onClick={() => navigate('/')}>clique aqui</FormRedirection></FormLink>
            {loading && <Loading>Loading...</Loading>}
        </FormRegistrationContainer >
    )
}