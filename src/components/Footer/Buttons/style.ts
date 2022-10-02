import styled from 'styled-components'
import { secondaryColor } from '../../UI/variables'

export const Container = styled.div`
height: 100%;
display: flex;

@media screen and (max-width:830px) {
 margin-top: 25px;
}
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

@media screen and (max-width:830px) {
   width: 50vw;
   height: 66px;
   font-size: 16px;
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
  }
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

@media screen and (max-width:830px) {
   width: 50vw;
   height: 66px;
   font-size: 16px;
  }
`