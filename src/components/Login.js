import styled from 'styled-components';
import { FcGoogle } from "react-icons/fc";
import { useState,useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { selectUserName,setUserLoginDetails,setSignOutState } from "../features/user/userSlice";




const Login = (props) =>{

    const [emaillog, setEmaillog] = useState("");
    const [passwordlog, setPasswordlog] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);
    const [loggedin, setLoggedIn] = useState(false);


    const handleLogin=(e) =>{
        e.preventDefault();
        let pass = localStorage.getItem('SubmissionPassword').replace(/"/g, "");
        let mail = localStorage.getItem('SubmissionEmail').replace(/"/g, "");
        // .replace(/"/g,"") is used to remove the double quotes for the string

        if (!emaillog || !passwordlog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((passwordlog !== pass) || (emaillog !== mail)) {
            setFlag(true);
        } else {
            history.push('/converter')
            setHome(!home);
            setFlag(false);
            setLoggedIn(true);
            localStorage.setItem("isLoggedIn",true);
        }
    }


    const dispatch = useDispatch()
    const history = useHistory()
    const userName = useSelector(selectUserName);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{
            if(user){
                setUser(user)
                history.push('/converter')
                localStorage.setItem("isLoggedIn",true);
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
    
        <div>
            <Heading>Welcome Back!</Heading>
                <SubHeading>New to Currency Conversion App?<a href="/signup"><Span>Signup</Span></a> </SubHeading>
            <Form onSubmit={handleLogin}>
                <Input
                    type="email"
                    name="email"
                    placeholder="Your Email Address"
                    value={emaillog}
                    onChange={(event) => setEmaillog(event.target.value)}
                    
                />
                <Input
                    type="password"
                    name="password"
                    placeholder="Your Password"
                    value={passwordlog}
                    onChange={(event) => setPasswordlog(event.target.value)}
                    
                />
                <Button>Login</Button>
                <SubHeading><a href="/forgot-password"><Span>Forgot Password</Span></a> </SubHeading>
                {flag && <Error>
                            Fill correct Info else keep trying.
                        </Error>}
                <SubHeading>Or Login With</SubHeading>
                
            </Form>
            </div>
    )
}


const Span = styled.span`
color:blue;`;

const Error = styled.p`
 font-size: 14px;
 color: red;
`;

const Heading = styled.h2`
font-size:18px;
font-family: Poppins;
font-weight:700;
`;
const SubHeading = styled.p`
font-size:14px;

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


export default Login