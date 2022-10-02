import styled from 'styled-components';
import Icon from '../../assets/icons/nuvem.svg';

export const Local = styled.span`
font-weight: 400;
font-size: 14px;
`

export const TempCont = styled.span`
font-weight: 700;
font-size: 48px;
color: #222222;

@media screen and (max-width:280px){
font-size: 30px;
}
`

export const IconCloud = styled.i`
background: url(${Icon});
width: 35px;
height: 35px;
background-repeat: no-repeat;

@media screen and (max-width:280px){
background-size: 90% 90%;
}
`
export const BoxTemp = styled.div`
display: flex;
align-items: center;
gap: 12px;
`