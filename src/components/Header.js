import React, { useEffect } from 'react'
import { auth, provider } from "../firebase"
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import {
    selectUserName,
    selectUserPhoto,
    setUserLogin,
    setSignOut
} from "../features/user/userSlice"
import { useDispatch, useSelector } from "react-redux"

function Header() {
    const dispatch = useDispatch();
    const history = useHistory();
    const userName = useSelector(selectUserName);
    const userPhoto = useSelector(selectUserPhoto);

    useEffect(()=>{
        auth.onAuthStateChanged(async (user)=>{         // makes the User stays logged in after the page is refreshed
            if(user){                               
                dispatch(setUserLogin({                 
                    name: user.displayName,             
                    email: user.email,                      
                    photo: user.photoURL
                }));
                history.push("/");
            }
        });
    }, []);

    const signIn = () => {
        auth.signInWithPopup(provider)
        .then((result)=>{
            let user = result.user;
            dispatch(setUserLogin({
                name: user.displayName,
                email: user.email,
                photo: user.photoURL
            }))
            history.push("/");
        })
    }

    const signOut = () => {
        auth.signOut()
        .then(()=>{
            dispatch(setSignOut());
            history.push("/login");
        })
    }

    return (
        <Nav>
            <Logo src="/images/logo.png"/>
            { /* !userName */ userName ? (
                <LoginContainer>
                    <Login onClick={signIn}>Login</Login>
                </LoginContainer>
                 ):
                <>
                <NavMenu>
                    <a>
                        <img alt="" src="/images/home-icon.svg" />
                        <span>HOME</span>
                    </a>
                    <a>
                        <img alt="" src="/images/search-icon.svg" />
                        <span>SEARCH</span>
                    </a>
                    <a>
                        <img alt="" src="/images/watchlist-icon.svg" />
                        <span>watchlist</span>
                    </a>
                    <a>
                        <img alt="" src="/images/original-icon.svg" />
                        <span>originals</span>
                    </a>
                    <a>
                        <img alt="" src="/images/movie-icon.svg" />
                        <span>movies</span>
                    </a>
                    <a>
                        <img alt="" src="/images/series-icon.svg" />
                        <span>series</span>
                    </a>

                </NavMenu>
                <UserImg onClick={signOut} src="/images/me.jpg"/>
                </>
            }
            
        </Nav>
    )
}

export default Header

const Nav = styled.nav`
    height: 70px;
    background-color: #090b13;
    display: flex;
    align-item: center;
    padding: 0 16px;
`

const Logo = styled.img`
    width: 110px;
    height: 60px;
    padding: 5px;
`
const NavMenu = styled.div`
    display: flex;
    flex: 1;
    margin-left: 25px;
    align-items: center;
    text-transform: uppercase;

    a {
        display: flex;
        align-items: center;
        padding: 0 12px;
        cursor: pointer;
        img {
            height: 20px;
        }
        span {
            font-size: 13px;
            letter-spacing: 1.42px;
            position: relative;
            &:after { /*adds a div*/
                content: "";
                height: 2px;
                background: white;
                position: absolute;
                top: -6px;
                left: 0;
                right: 0;
                bottom: 0;
                opacity: 0; /*hiding*/
                transform-origin: left center; 
                transition: all 450ms cubic-bezier(0.25, 0.46, 0.45, 0.94); /* makes a delayed effect*/
                transform: scaleX(0); /*hiding*/
            }
        }
        &:hover {
            span:after {
                transform: scaleX(1);
                opacity: 1;
            }
        }
    }
`

const UserImg = styled.img`
    margin-top: 10px;
    margin-right: 5px;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    cursor: pointer;
    
    &: hover {
        width: 52px;
        height: 52px;
    }
`

const Login = styled.div`
    border: 1px solid #f9f9f9;
    margin-top: 15px;
    max-height: 40px;
    padding: 8px 16px;
    border-radius: 4px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    background-color: rgba(0, 0, 0, 0.6);
    transition: all 550ms ease 0s;
    cursor: pointer;
    
    &:hover {
        background-color: #f9f9f9;
        color: #000;
        border-color: transparent;
    }
`

const LoginContainer = styled.div`
    display: felx;
    flex: 1;
    justify-content: flex-end;
`