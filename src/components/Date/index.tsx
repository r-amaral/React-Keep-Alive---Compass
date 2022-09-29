import { Container, Time, DataInfo } from './style';

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
            <Time>{`${currentHour < 10 ? '0' + currentHour : currentHour}:${currentMinutes < 10 ? '0' + currentMinutes : currentMinutes}`}</Time>
            <DataInfo>{`${dayOfTheWeek[currentDay]}, ${currentDate} de ${month[currentMonth]} de ${currentYear}`}</DataInfo>
        </Container>
    )

}
