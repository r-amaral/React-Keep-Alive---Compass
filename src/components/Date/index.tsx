import React, { useState } from "react";
import styled from 'styled-components';

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

const Time = styled.div`
font-weight: 700;
font-size: 144px;
line-height: 100px;
color: #222222;
`

const DataInfo = styled.div`
font-weight: 400;
font-size: 14px;
color: #222222;
line-height: 18px;
`

export default function CurrentDate() {

    const date = new Date();
    const currentHour = date.getHours();
    const currentMinutes = date.getMinutes();
    const currentDay = date.getDay();
    const currentDate = date.getDate();
    const currentMonth = date.getMonth();
    const currentYear = date.getFullYear();

    const dayOfTheWeek = ['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sábado'];
    const month = ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'];

    return (
        <Container>
            <Time>{`${currentHour}:${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}`}</Time>
            <DataInfo>{`${dayOfTheWeek[currentDay]}, ${currentDate} de ${month[currentMonth]} de ${currentYear}`}</DataInfo>
        </Container>
    )

}