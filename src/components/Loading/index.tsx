import styled from 'styled-components'
import { secondaryColor } from '../UI/variables';

const LoagindElement = styled.div`
width: 100%;
height:100%;
background:rgba(0, 0, 0, 0.5);
position: fixed;
top: 0;
left: 0;
display: flex;
justify-content: center;
align-items: center;
color: ${secondaryColor};
font-size: 20px;
`
export default LoagindElement;