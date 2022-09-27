import { useState, useEffect } from "react";

export default function Localization({ locate, getTemperatureData }: any) {

    const [city, setCity] = useState<any>();
    const [subdivision, setSubdivision] = useState<any>();

    let urlCity = locate ? "https://www.iplocate.io/api/lookup" : "https://www.iplocate.io/api/lookup/185.61.218.198";
    useEffect(() => {
        fetch(urlCity)
            .then(response => response.json())
            .then(data => {
                setCity(data.city)
                setSubdivision(data.subdivision)
                getTemperatureData(data.city)
            })
    }, [locate])

    return (
        <span>{city} - {subdivision}</span>
    )
}