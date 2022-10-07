import React, { useState, useEffect, memo } from "react";
import { TempCont, IconCloud, BoxTemp, Local } from './style'

export default function Localization() {

    const [city, setCity] = useState<string>("Brasília");
    const [country, setCountry] = useState<string>("BR");
    const [temperature, setTemperature] = useState<number>(0);

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(position => getData(position.coords.latitude, position.coords.longitude), () => getData())
    }, [])

    const getData = (lat: number = -15.7801, lon: number = -47.9292) => {
        const apiKey = 'ba605efc18f1572f61892fe426f18a1a';
        fetch(`https://api.openweathermap.org/data/2.5/weather/?lat=${lat}&lon=${lon}&units=metric&APPID=${apiKey}`)
            .then(res => res.json())
            .then(data => {
                setCity(data.name)
                setCountry(data.sys.country)
                setTemperature(data.main.temp)
            })
    }

    return (
        <React.Fragment>
            <Local>{city} - {country}</Local>
            <BoxTemp>
                <IconCloud />
                <TempCont>{Math.round(temperature)}º</TempCont>
            </BoxTemp>
        </React.Fragment>
    )
}