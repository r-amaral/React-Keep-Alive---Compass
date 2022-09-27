import styled from 'styled-components'
import { secondaryColor } from '../../UI/variables'

export const Container = styled.div`
height: 100%;
display: flex;
`

export const ContinueButton = styled.button`
height: 100%;
color: #C13216;
background: ${secondaryColor};
outline: none;
border: none;
font-weight: 400;
font-size: 13px;
width: 48%;
text-align: center;
cursor: pointer;
padding: 0;
align-self: flex-start;
`

export const LogoutButton = styled.button`
height: 100%;
color: ${secondaryColor}; 
background: transparent;
outline: none;
border: none;
font-weight: 700;
font-size: 12px;
width: 130px;
text-align: center;
cursor: pointer;
`