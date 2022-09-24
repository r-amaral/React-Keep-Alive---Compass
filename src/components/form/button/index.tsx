import styled from 'styled-components'

export default function Button() {

    const Button = styled.button`
        width: 100%;
        background: linear-gradient(90deg, #FF2D04 0%, #C13216 100%);
        box-shadow: inset 5px 5px 15px rgba(0, 0, 0, 0.15);
        border-radius: 50px;
        color: #FFFFFF;
        margin-top:115px;
        height: 67px;
        border: none;
        outline: none;
        font-weight: 700;
        cursor:pointer;
    `

    return (
        <Button>Continuar</Button>
    )
}