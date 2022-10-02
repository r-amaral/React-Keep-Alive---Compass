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

@media screen and (max-width:1025px) {
    font-size: 30px;
  }
`

export const FirstTitle = styled(Title)`
font-size:1.88vw; //36px
`

export const Translate = styled.span`
font-weight: 400;
font-size: 24px;
text-align: right;
color: #222222;
line-height: 20px;
`