import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import { firebaseAuth } from '../utils/firebase-config';

import { onAuthStateChanged, signOut } from "firebase/auth";

const TopNav = ({ isScrolled }) => {

    const navlink = [
        { name: 'Home', link: '/' },
        { name: 'Tv Show', link: '/tv' },
        { name: 'Movies', link: '/movies' },
        { name: 'My List', link: '/mylist' },
    ];

    const navigate = useNavigate()
    onAuthStateChanged(firebaseAuth, (currentUser) => {
        if (!currentUser) navigate('/login');
    });


    return (
        <NavContainer>
            <nav className={`${isScrolled ? "scrolled" : "notScroll"}`}>
                <div className='leftSide'>
                    <div className='logo'>
                        <img 
                            src='MassMovies.png'
                            alt='logo'
                        />
                    </div>
                    <ul className='links'>
                        {navlink.map(({ name, link }) => {
                            return (
                                <li key={name}>
                                    <Link to={link}>{name}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </div>
                <div className='rightSide'>
                    <button onClick={()=>signOut(firebaseAuth)}>
                        <AiOutlineLogout />
                    </button>
                </div>
            </nav >

        </NavContainer>
    )
}

const NavContainer = styled.div`
    .notScroll{
        display: flex;
    }
    .scrolled{
        display: flex;
        background-color: black;
    }
    nav{
        position: sticky;
        top: 0;
        height: 6rem;
        width: 100%;
        justify-content: space-between;
        position: fixed;
        z-index: 2;
        padding: 0.4rem;
        align-items: center;
        transition: 0.3s ease-in-out;
        .leftSide{
            display: flex;
            align-items: center;
            gap: 2rem;
            margin-left: 5rem;
        .logo{
            display: flex;
            justify-content: center;
            align-items: center;
        }
        img{
            width: 10rem;
            margin-top: 20%;
            height: 2rem;
            height: 100%;
            width: 100%;
            
        }
    }
    .links{
        display: flex;
        list-style-type: none;
        gap: 3rem;
        li{
            a{
                color: white;
                text-decoration: none;
            }
        }
    }
}
.rightSide{
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-right: 1rem;
    button{
        background-color: #B88400;
        border: none;
        cursor: pointer;
        border-radius: 50%;
        
    }svg{
        color: white;
        font-size: 2rem;
    }

}
`;

export default TopNav;