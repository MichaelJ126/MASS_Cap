import React from 'react'
import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'

const Header = (props) => {
    const navigate = useNavigate()
    return (
        <HeaderContainer>
            <div className='logo'>
                <img src='MassMovies.png' />
            </div>
            <button onClick={()=>navigate(props.login ? '/login' : '/signup')}>
            {props.login ? 'Log In ' : 'Sign In'}

            </button>
        </HeaderContainer>
    )
}

const HeaderContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 4rem;
    .logo{
        img{
            height: 3rem;
            cursor: pointer;
            margin-top: 5%;
            height: 100%;
            width: 100%;
            
        }
    }
    button{
        padding: 0.5rem 1rem;
        background-color :#B88400;
        border: none;
        cursor: pointer;
        color: white;
        border-radius: 0.2rem;
        font-weight: bolder;
        font-size: 1.05rem;
        margin-top: -4rem;
        margin-right: 1rem;

    }

`


export default Header