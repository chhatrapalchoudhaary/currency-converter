import styled from 'styled-components';
import Login from './Login';
import Signup from './Signup';





const LoginSignup = (props) =>{
    return(
        <Container>
            <Login/>
            {/* <Signup/> */}
            <ImgSection>
            <LoginImg src="/images/login-bro.svg" alt="currency-converter"/>
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
top: 72px;
padding: 0 calc(3.5vw + 5px);


&:after{
    background-color: #f5f5f5;
    content: ' ';
    position: absolute;
    inset: 0px;
    opacity: 1;
    z-index:-1;
}
`;

const ImgSection = styled.div`
width:40%;
`;
const LoginImg = styled.img`
width: 500px;

`;

export default LoginSignup