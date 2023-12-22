import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { FaPlay } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';

import TopNav from '../components/TopNav';
import Card from "../components/Card";
import { fetchMovies, getGenres } from '../store';
import SliderContainer from '../components/SliderContainter';

const MassMovies = () => {

    const [isScrolled, setIsScrolled] = useState(false);

    const navigate = useNavigate();

    const movies = useSelector((state)=> state.massmovies.movies)

    const genresLoaded = useSelector((state)=> state.massmovies.genresLoaded)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(getGenres())
    },[])

    useEffect(() => {
        if(genresLoaded){
            dispatch(fetchMovies({type: 'all'}))
        }
    });

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);

    };

 
    return (
        <HeroContainer>
            <div className='hero'>
                <TopNav isScrolled={isScrolled} />
                <img 
                className='background-image'
                src='https://res.cloudinary.com/ehizeex-shop/image/upload/v1668267540/NetflixApp/avengers-age-of-ultron-team-together-poster-wallpaper-1600x600-92751_84_qvwbif.jpg'
                    alt='hero image'
                />
                <div className='container'>
                    <div className='title'>
                        <h1>The Avengers</h1>
                        <p>
                           
                        </p>
                    </div>
                    <div className="buttons">
                        <button onClick={()=>navigate('/player')} className="playBtn">Play</button>
                        <button className="moreBtn">More</button>
                    </div>
                </div>
            </div>
            <SliderContainer movies={movies}/>
        </HeroContainer>
    );
};

const HeroContainer = styled.div`

.hero{
    position: relative;
    .background-image {
        filter: brightness(40%);
    }
    img{
        height: 70vh;
        width: 100%;
    }
    .container{
        position: absolute;
        bottom: 1rem;
        .title{
            h1{
                margin-left: 5rem;
                text-transform: uppercase;
                font-size: 73px;
                background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
                -webkit-background-clip: text;
                -webkit-text-fill-color: transparent;
            }
            p{
                margin-bottom: -50px;
                width: 640px;
                margin-left: 5rem;
                font-family: "lexend Deca", sans-serif;
                color: white;
            }
        }
        .buttons{
            display: flex;
            margin: 5rem;
            gap: 2rem;
        }

        .playBtn{
            display: flex;
            align-items: center;
            justify-content: center;
            color: #B88400;
            border-radius: 1rem;
            font-size: 1.4rem;
            gap: 1rem;
            padding: 0.9rem;
            padding-left: 2.5rem;
            padding-right: 2.4rem;
            border: none;
            cursor: pointer;
        }
        .moreBtn{
            display: flex;
            align-items: center;
            justify-content: center;
            color: white;
            background-color: #B88400;
            border-color: black;
            border-radius: 1rem;
            font-size: 1.4rem;
            gap: 1rem;
            padding: 0.9rem;
            padding-left: 2.5rem;
            padding-right: 2.4rem;
            border: 0.1rem solid black;
            cursor: pointer;
        }
    }
}
`

export default MassMovies