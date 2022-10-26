import { useNavigate } from "react-router-dom";
import { ButtonRegistration, LabelRegistration, ContainerInput, ContainerInputs, Eye, FormRegistrationContainer, InputRegistration, FormTitle, FormLink, FormRedirection, InvalidText } from "./style";
import { FormEvent, useState, useContext } from "react";
import PasswordNeeds from "./PasswordNeeds";
import { addDoc } from "firebase/firestore";
import { useCollectionRef, auth } from '../../firebaseConfig';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { UserContext } from "../../common/context/RegistrationData";
import Loading from "../Loading";
import RegistrattionModal from "./RegistrationModal";

export default function FormRegistration() {

    const navigate = useNavigate();

    const {
        fullName,
        email,
        password,
        confirmPassword,
        setFullName,
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
    const [successfulRegistration, setSuccessfulRegistration] = useState<boolean>(false);

    const [errorStyle, setErrorStyle] = useState({
        fullName: false,
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
        const regName = /^([A-Za-z\u00C0-\u017F´]\s?){3,40}$/g
        const regStrongPassword = /^(?=.*[A-Z])(?=.*[\W|_])(?=.*[0-9])(?=.*[a-z]).{6,}$/;

        const ErrorObj = {
            ...errorStyle,
            fullName: regName.test(fullName) ? false : true,
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

        createUserWithEmailAndPassword(auth, email, password)
            .then(() => addDoc(useCollectionRef, {
                fullName,
                email,
                password
            }))
            .then(() => {
                setLoading(false)
                setSuccessfulRegistration(true);
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
            <ContainerInputs>
                <ContainerInput>
                    <LabelRegistration error={errorStyle.fullName} htmlFor="fullName">Nome Completo</LabelRegistration>
                    <InputRegistration id='fullName' error={errorStyle.fullName} onChange={event => setFullName(event.target.value)} type='text' placeholder='Nome' required />
                </ContainerInput>
                <ContainerInput>
                    <LabelRegistration error={errorStyle.email} htmlFor="email">E-mail</LabelRegistration>
                    <InputRegistration id='email' error={errorStyle.email} onChange={event => setEmail(event.target.value)} type='text' placeholder='Email' required />
                </ContainerInput>
                <ContainerInput>
                    <LabelRegistration error={errorStyle.password} htmlFor="password">Senha</LabelRegistration>
                    <InputRegistration
                        id='password'
                        error={errorStyle.password}
                        onChange={event => setPassword(event.target.value)}
                        onBlur={() => setFade(false)}
                        onFocus={() => setFade(true)}
                        type={showPassword ? 'text' : 'password'}
                        placeholder='Senha' required
                    />
                    <Eye onPointerDown={() => setShowPassword(true)} onPointerUp={() => setShowPassword(false)} />
                    <PasswordNeeds password={password} fade={fade} />
                </ContainerInput>
                <ContainerInput>
                    <LabelRegistration error={errorStyle.confirmPassword} htmlFor="confirmPassword">Confirmar senha</LabelRegistration>
                    <InputRegistration
                        id='confirmPassword'
                        error={errorStyle.confirmPassword}
                        onChange={event => setConfirmPassword(event.target.value)}
                        type={showConfirmPassword ? 'text' : 'password'}
                        placeholder='Confirmar Senha' required
                    />
                    <Eye onPointerDown={() => setShowConfirmPassword(true)} onPointerUp={() => setShowConfirmPassword(false)} />
                </ContainerInput>
            </ContainerInputs>
            {error && <InvalidText>{error}</InvalidText>}
            <ButtonRegistration error={error}>Cadastrar</ButtonRegistration>
            <FormLink>Caso você possua cadastro, <FormRedirection onClick={() => navigate('/')}>clique aqui</FormRedirection></FormLink>
            {loading && <Loading>Loading...</Loading>}
            {successfulRegistration && <RegistrattionModal />}
        </FormRegistrationContainer >
    )
}