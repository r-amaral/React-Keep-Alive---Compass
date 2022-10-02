import styled from 'styled-components';

export const BoxText = styled.div`
display: flex;
flex-direction: column;
`
export const Title = styled.p`
font-weight: 700;
font-size: 3.33vw; //64px
text-align: right;
color: #C12D18;
margin: 0;

@media screen and (max-width:1440px) {
    font-size: 50px;
}
@media screen and (max-width:1024px) {
    font-size: 40px;
}
@media screen and (max-width:768px) {
    font-size: 33px;
} 
@media screen and (max-width:425px) {
    font-size: 25px;
}
`

export const FirstTitle = styled(Title)`
font-size:1.88vw; //36px

@media screen and (max-width:1440px) {
    font-size: 35px;
} 
@media screen and (max-width:1024px) {
    font-size: 30px;
} 
@media screen and (max-width:768px) {
    font-size: 25px;
} 
@media screen and (max-width:425px) {
    font-size: 20px;
}
`

export const Translate = styled.span`
font-weight: 400;
font-size: 1.25vw;//24px
text-align: right;
color: #222222;
line-height: 20px;

@media screen and (max-width:1440px) {
    font-size: 25px;
} 

@media screen and (max-width:1024px) {
    font-size: 20px;
} 

@media screen and (max-width:425px) {
    font-size: 14px;
}
`