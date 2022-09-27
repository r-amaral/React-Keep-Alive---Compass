import styled from "styled-components"
import { secondaryColor } from "../../UI/variables"

export const ContainerText = styled.div`
display:flex;
justify-content: flex-end;
align-items: center;
border-right: 1px solid ${secondaryColor};
width: 48.5%;
height: 50%;
`

export const FooterText = styled.span`
margin-left:18.5%;
margin-right:35px;
font-size: 12px;
color:${secondaryColor};
font-weight: 400;
text-align: right;
width: 60%;
`