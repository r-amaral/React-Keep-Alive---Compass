import styled from 'styled-components';

export const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

@media screen and (max-width:740px) {
    display: none;
}

@media screen and (max-height:500px){
    display: none
}
`

export const Time = styled.div`
font-weight: 700;
font-size: 144px;
line-height: 100px;
color: #222222;

@media screen and (max-height:600px){
  font-size: 100px;
}
`

export const DataInfo = styled.div`
font-weight: 400;
font-size: 14px;
color: #222222;
line-height: 18px;
`