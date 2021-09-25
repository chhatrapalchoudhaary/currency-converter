import styled from 'styled-components';
import { useState,useEffect } from "react";
import {useDispatch,useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { auth, provider } from "../firebase";
import { selectUserName,setUserLoginDetails,setSignOutState } from "../features/user/userSlice";



const Header = (props) => {

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

    const handleNormalLogin = () =>{
        localStorage.setItem("isLoggedIn",false);
        history.push("/")
    }
    const setUser = (user) => {
        dispatch(setUserLoginDetails({
            name: user.displayName,
            email: user.email,
            photo: user.photoURL,
        }))
    }

    const logoClicked = () => {
        history.push('/');
        
    }

    
    return(
        <Nav>
            <Logo><img src="/images/logo.png" onClick={logoClicked} alt="logo"/></Logo>
           
        <NavMenu>
            <a href="/">
                <span>HOME</span>
            </a> 
            <a href="/converter">
                <span>CONVERTER</span>
            </a>
             
        </NavMenu>
        {
            !userName?"":
        <SignOut>
            <span onClick={handleAuth}>Sign out</span>
        </SignOut>
}
        </Nav>
    )
}


const Nav = styled.nav`
position: fixed;
top: 0;
width: 100vw;
right: 0;
left: 0;
height: 70px;
background-color: #2e418f;
display: flex;
justify-content: space-between;
align-items: center;
padding: 0 30px;
flex-direction: row;
letter-spacing: 16px;
z-index:3;
`;

const Logo = styled.a`
padding: 0;
width: 160px;
margin-top: 4px;
max-height: 70px;
display: inline-block;
img{
display: block;
width: 100%;
cursor: pointer;

&:hover{
    transform:scale(1.05)
}
}
`;

const NavMenu = styled.div`
align-items: center;
display: flex;
flex-flow: row nowrap;
height: 100%;
justify-content: flex-end;
margin: 0px;
padding: 0px;


a{
    display: flex;
    align-items: center;
    padding: 0 12px;

    img{
        height: 20px;
        min-width: 20px;
        width: 20px;
        z-index:auto;
    }

    span{
        color: rgb(249,249,249);
        font-size: 13px;
        letter-spacing: 1.42px;
        line-height: 1.08;
        padding: 2px 0px;
        white-space:nowrap;
        position: relative;
    


    &:before{
    
        background-color: rgb(249,249,249);
        border-radius: 0px 0px 4px 4px;
        bottom: -6px;
        content: "";
        height: 2px;
        left: 0px;
        opacity: 0;
        position: absolute;
        right: 0px;
        transform-origin: left center;
        transform: scaleX(0);
        transition: all 250ms cubic-bezier(0.25,0.46,0.46,0.94) 0s;
        visibility: hidden;
        width: auto;

    }
}
    &:hover{
    span:before {
        transform: scaleX(1);
        visibility: visible;
        opacity: 1 !important;
    }
    }
}
`;



const SignOut = styled.div`
position: relative;

display: flex;
cursor: pointer;
align-items: center;
justify-content: center;
border: 1px solid black;
letter-spacing: normal;
padding:10px;
background-color: white;
border-radius: 3px;
color: #2e418f;
font-weight: 700;

&:hover{
    background-color:#f5f5f5;
}


`;
export default Header