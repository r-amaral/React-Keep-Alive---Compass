import styled from "styled-components"
import { secondaryColor } from "../../UI/variables"

export const ContainerText = styled.div`
display:flex;
justify-content: flex-end;
align-items: center;
border-right: 1px solid ${secondaryColor};
width: 48.5%;
height: 50%;

@media screen and (max-width:830px) {
    flex-direction: column;
    height:initial;
    border-right: none;
    border-bottom: 1px solid ${secondaryColor};
    margin-top: 25px;
    width: 100%;
  }
`

export const FooterText = styled.span`
margin-left:18.5%;
margin-right:35px;
font-size: 12px;
color:${secondaryColor};
font-weight: 400;
text-align: right;
width: 60%;

@media screen and (max-width:830px) {
    flex-direction: column;
    height:initial;
    text-align: center;
    margin:0 0 25px 0;
    width: 100%;
}
`