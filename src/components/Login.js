import styled from 'styled-components';
import { FcGoogle } from "react-icons/fc";
import { useState,useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { selectUserName,setUserLoginDetails,setSignOutState } from "../features/user/userSlice";
import { useLocalStorage } from "../features/user/useLocalStorage";


const Login = (props) =>{
    const [email, setEmail] = useLocalStorage("signupemail", "");


    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                setUser(user)
                history.push('/converter')
            }
        })
    }, {userName});

    const handleAuth = () => {
        if(!userName){
            auth.signInWithPopup(provider).then((result)=>{
                setUser(result.user);
            }).catch((error)=>{
                alert(error.message)
            });
        }
        else if (userName){
            auth.signOut().then(()=>{
                dispatch(setSignOutState())
                history.push('/')
            }).catch((error)=> alert(error.message))
        }
        
    };

    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    }
    return(
        <Container>
        <LoginCard>
        <Wrapper>
            <Form>
                <Heading>Welcome Back!</Heading>
                <SubHeading>New to Currency Conversion App?<a href="/signup"><Span>Signup</Span></a> </SubHeading>
                <Input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    
                />
                <Button>Login</Button>
                <SubHeading>Forgot Password</SubHeading>
                <SubHeading>Or Login With</SubHeading>
                
            </Form>
            <GoogleLogin onClick={handleAuth}>
                    <FcGoogle/>
            </GoogleLogin>
        </Wrapper>
        
    </LoginCard>
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

const Span = styled.span`
color:blue;`;


const LoginCard = styled.div`

background-color: #ffffff;
border-radius: 8px;
box-shadow: rgb(0 0 0 / 69%) 0px 16px 10px -20px,rgb(0 0 0 / 45%) 0px 16px 10px -20px;
cursor: pointer;
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding-top: 20px;
width: 40%;
`;

const Heading = styled.h2`
font-size:18px;
font-family: Poppins;
font-weight:700;
`;
const SubHeading = styled.p`
font-size:14px;

`;


const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

const Form = styled.form`
  margin: 0 auto;
  width: 100%;
  max-width: 414px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  position: relative;
`;

const Input = styled.input`
  max-width: 100%;
  padding: 11px 13px;
  background: #f9f9fa;
  color: #f03d4e;
  margin-bottom: 10px;
  border-radius: 4px;
  outline: 0;
  border: 1px solid rgba(245, 245, 245, 0.7);
  font-size: 14px;
  transition: all 0.3s ease-out;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.1), 0 1px 1px rgba(0, 0, 0, 0.1);
  :focus,
  :hover {
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.15), 0 1px 5px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  max-width: 100%;
  padding: 11px 13px;
  color: rgb(253, 249, 243);
  font-weight: 600;
  text-transform: uppercase;
  background: #34529e;
  border: none;
  border-radius: 3px;
  outline: 0;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  :hover {
    background: rgb(200, 50, 70);
    animation: all 0.2s ease-out forwards;
  }
`;

const GoogleLogin = styled.button`

width: 200px;
padding: 5px 8px;
  background: #ffffff;
  border: 1px solid #34529e;
  border-radius: 3px;
  font-size: 22px;
  cursor: pointer;
  margin-top: 0.6rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease-out;
  margin-bottom: 0.9rem;
  :hover {
    background-color:#34529e;
    color:#ffffff;
    animation: all 0.2s ease-out forwards;
  }
`;


const ImgSection = styled.div`
width:40%;
`;
const LoginImg = styled.img`
width: 500px;

`;

export default Login