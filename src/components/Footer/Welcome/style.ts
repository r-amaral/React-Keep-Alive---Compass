import styled from 'styled-components';

export const Container = styled.div`
position: absolute;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin-left: 50px;

@media screen and (max-width:1300px){
    margin-left: 10px;
}

@media screen and (max-width:1050px){
    position: relative;
}

@media screen and (max-width:830px){
    margin-left: 0;
    margin-top: 25px;
}
`

export const Title = styled.span`
text-align: center;
font-size: 24px;
width: 160px;
font-weight: bold;
color:white;

@media screen and (max-width:1036px){
    width: 150px;
    font-size: 20px;
}
`

export const Name = styled.span`
text-align: center;
font-size: 20px;
font-weight: bold;
color:white;

@media screen and (max-width:1036px){
    font-size: 18px;
}
`
