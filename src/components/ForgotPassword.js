import styled from 'styled-components';
import { useState,useEffect } from "react";
import { useHistory } from "react-router-dom";

const ForgotPassword = (props) => {

    const state = useState();

    const [emaillog, setEmaillog] = useState("");
    const [flag, setFlag] = useState(false);
    const [password,setPassword] = useState("");
    const [match,setMatch] = useState(false);
    const history = useHistory()
    let passwordVal = "";
    
    const handleLogin=(e) =>{
        e.preventDefault();
        let mail = localStorage.getItem('SubmissionEmail').replace(/"/g, "");

        if (!emaillog) {
            setFlag(true);
            console.log("EMPTY");
        } else if ((emaillog !== mail)) {
            setFlag(true);
        } else {
            let passwordVal = localStorage.getItem('SubmissionPassword').replace(/"/g, "");
            console.log(passwordVal)
            setPassword(passwordVal);
            setMatch(true);
            setFlag(false);
        }
    }
 

    return(
        <Container>
            <Wrapper>
                <h1>Recover Password</h1>
           
                <>
                    <Form onSubmit={handleLogin}>
                    <Input
                        type="email"
                        name="email"
                        placeholder="Your Email Address"
                        value={emaillog}
                        onChange={(event) => setEmaillog(event.target.value)}
                        
                    />
                    <Button>Check Password</Button>
                    </Form>
                    
                    {flag && <Error>
                                Email Address is not Registered.
                            </Error>}
                    { <Password>Your Password is : {password}</Password>} 
                    </> 

                
                
            </Wrapper>
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
    align-items: center;
}
`;

const Error = styled.p`
 font-size: 14px;
 color: red;
`;

const Password = styled.h3`
font-size:20px;
color: blue;
`;
const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 400px;
  border-radius: 8px;
  width: 90%;
  box-shadow: -1px 1px 3px 0px rgba(0,0,0,0.75);
  margin:10px;
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

export default ForgotPassword