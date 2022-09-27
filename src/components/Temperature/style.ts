import styled from 'styled-components';
import Icon from '../../assets/icons/nuvem.svg';

export const TempCont = styled.span`
font-weight: 700;
font-size: 48px;
color: #222222;
`

export const IconCloud = styled.i`
background: url(${Icon});
width: 35px;
height: 35px;
background-repeat: no-repeat;
`
export const BoxTemp = styled.div`
display: flex;
align-items: center;
gap: 12px;
`