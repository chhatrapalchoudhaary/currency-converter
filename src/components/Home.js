import styled from 'styled-components';
import {Link} from 'react-router-dom';

const Home = (props) =>{
    return(
        <Container>
            
            <MainHeadingSection>
                <Heading>Convert Currencies in Seconds</Heading>
                <Link to="/login">
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
`;

const MainHeadingSection = styled.div`
align-self: flex-start;
padding-top: 20px;
width: 40%;
`;

const Heading  = styled.h1`
font-size: 48px;
font-family: poppins;
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
`;

const ImgSection = styled.div`
width:50%;
`;
const CurrencyImg = styled.img`
width: 580px;

`;

export default Home