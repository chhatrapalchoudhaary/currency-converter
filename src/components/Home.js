import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Home = (props) =>{
    return(
        <Container>
            
            <MainHeadingSection>
                <Heading>Convert Currencies in Seconds</Heading>
                <Link to="/signup">
                <LoginButton> Login to Convert</LoginButton>
                </Link>
            </MainHeadingSection>
            <ImgSection>
            <CurrencyImg src="/images/currency.png" alt="currency-converter"/>
            </ImgSection>
        
        </Container>
    )
}


const Container = styled.main`

position: relative;
min-height: calc(100vh-250px);
overflow-x: hidden;
display: flex;
flex-direction: row;
justify-content: space-around;
align-items: center;
top: 102px;
padding: 0 calc(3.5vw + 15px);



&:after{
    background-color: #f5f5f5;
    content: ' ';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index:-1;
}


@media(max-width:768px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    overflow: auto;
    text-align: center;
    top:80px;
    min-height: auto;

}
`;

const MainHeadingSection = styled.div`
align-self: flex-start;
padding-top: 20px;
width: 40%;
@media(max-width:768px){
    margin-bottom: 80px;
    width: 100%;
}
`;

const Heading  = styled.h1`
font-size: 48px;
font-family: poppins;


@media(max-width:768px){
    font-size: 32px;
}
`;

const LoginButton = styled.a`
background-color: #34529e;
padding: 8px 16px;
text-transform: uppercase;
border-radius:3px;
color: #fff;
letter-spacing: 1.5px;
border: 1px solid #34529e;
transition: all 0.2s ease 0s;

&:hover{
    background-color: #f9f9f9;
    color: #34529e;
    border-color: #34529e;
}

@media(max-width:768px){
    width:240px;
    font-size: 15px;

}
`;

const ImgSection = styled.div`
width:50%;
@media(max-width:768px){
   margin-top: 20px;

}


`;
const CurrencyImg = styled.img`
width: 580px;
@media(max-width:768px){
    width:250px;

}
`;

export default Home