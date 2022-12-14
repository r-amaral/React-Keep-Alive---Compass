import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebaseConfig";
import { Container, Text, Box, Time, Seconds } from './style'

export default function Refresh() {

    const [time, setTime] = useState<number>(60);

    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
            if (time == 0) auth.signOut().then(() => {
                localStorage.setItem('token', 'loggedOut')
                navigate('/')
            });
        }, 1000);
    }, [time]);

    return (
        <Container>
            <Text>Application refresh in</Text>
            <Box>
                <Time>{time}</Time>
                <Seconds>seconds</Seconds>
            </Box>
        </Container>
    )
}