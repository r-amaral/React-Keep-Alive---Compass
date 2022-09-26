import React, { useState, useEffect } from "react";
import { Container, Text, Box, Time, Seconds } from './style'

export default function Refresh() {

    const [time, setTime] = useState<number>(60);

    useEffect(() => {
        setTimeout(() => {
            setTime(time - 1);
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