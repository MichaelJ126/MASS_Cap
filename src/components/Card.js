import React, {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { IoPlayCircleSharp } from "react-icons/io5";
import { AiOutlinePlus } from "react-icons/ai";
import { RiThumbUpFill, RiThumbDownFill } from "react-icons/ri";
import { BiChevronDown } from "react-icons/bi";
import { BsCheck } from "react-icons/bs";
import { db, firebaseAuth } from '../utils/firebase-config';
import {collection,addDoc,getDocs,query, where,} from 'firebase/firestore';


export default React.memo(function Card ({movieData}) {
    const [addedToList, setAddedToList] = useState(false);
    const [onHovered, setHovered] = useState(false);
    const navigate = useNavigate();

    const handleAddToMyList = async () => {
        setAddedToList(true);

    try {
        const currentUser = firebaseAuth.currentUser;
        if (!currentUser) {
        navigate('/login');
        return;
        }
        
          const moviesCollection = collection(db, 'mylist');
          const querySnapshot = await getDocs(query(moviesCollection, where('movieId', '==', currentUser.uid), where('name', '==', movieData.name)));
          if (!querySnapshot.empty) {
            return;
          }
        
          await addDoc(moviesCollection, {
            movieId: currentUser.uid,
            image: movieData.image,
            name: movieData.name,
            genre: movieData.genres,
           
          });
        
          console.log('Adding to My List:', movieData);
        } catch (error) {
          console.error('Error adding to My List:', error.message);
        }
        };

    return (
        <CardContainer 
        onMouseEnter={()=>setHovered(true)}
        onMouseLeave={()=>setHovered(false)}
        >

            
            <img 
            src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
            alt='movie poster'
            onClick={()=>navigate('/player')}
            />
            {onHovered && (
                <div className='hover'>
                    <div className='image-video-wrapper'>
            <img 
            src={`https://image.tmdb.org/t/p/w500${movieData.image}`}
            alt='movie poster'
            onClick={()=>navigate('/player')}
            />
            <video src='https://res.cloudinary.com/ehizeex-shop/video/upload/v1668377666/NetflixApp/Action_mlw9wx.mp4'
                // autoPlay 
                loop 
                controls
                />
                </div>
                <div className='info-container'>
                    <h3 className='movieName' onClick={() => navigate('player')}>
                        {movieData.name}
                        </h3>
                    <div className='icons'>
                    <div className='controls'>
                        <IoPlayCircleSharp
                        title='play'
                        onClick={() => navigate('/player')}
                        />
                        <RiThumbUpFill title='like'/>
                        <RiThumbDownFill title='Dis like'/>
                        <BsCheck title='Remove from List'/>
                        <AiOutlinePlus title='Add to my List' onClick={handleAddToMyList}/>
                    </div>
                    <div className='info'>
                        <BiChevronDown title='More Info'/>
                        </div>
                </div>
                <div className='genres'>
                    <ul>
                      {movieData.genres.map((genre)=>{
                        <li>{genre}</li>
                      })} 
                    </ul>
                    <div className='mat'>
                {addedToList ? <p>{movieData.id}</p> : null}
              </div>
                    </div>
                    </div>
                </div>
            )}
        </CardContainer>
    );
});

const CardContainer = styled.div`
margin-top: 1rem;
max-width: 230px;
width: 230px;
height: 100%;
cursor: pointer;
position: relative;
background-color: #B88400;
img{
    border-radius: 0.2rem;
    width: 100%;
    height: 100%;
    z-index: 10;
}
.hover{
    z-index: 99;
    height: max-content;
    width: 20rem;
    position: absolute;
    top: -18vh;
    left: 0;
    border-radius: 0.2rem;
    border: 0.1rem solid gray;
    background-color: #181818;
    transform: 0.3s ease-out;
    .image-video-wrapper{
        position: relative;
        height: 140px;
        img{
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
        }
        video{
            width: 100%;
            height: 150px;
            object-fit: cover;
            border-radius: 0.3rem;
            top: 0;
            z-index: 4;
            position: absolute;
        }
    }
    .info-container{
        display: flex;
        flex-direction: column;
        padding: 1rem;
        gap: 0.5rem;
        .movieName{
            color: white;
        }
    }
    .icons{
        display: flex;
        justify-content: space-between;
        .controls{
            display: flex;
            gap: 0.5rem;
        
    }
    svg{
        color: white;
        border: 0.1rem solid white;
        border-radius: 50%;
        font-size: 1.5rem;
        cursor: pointer;
        transform: 0.3s ease-in-out;
        &:hover{
            color: #b8b8b8;
        }
    }
    }
    .genres{
        display: flex;
        ul{
            display: flex;
            gap: 1rem;
            li{
                padding-right: 0.7rem;
                &:first-of-type{
                    list-style-type: none;
                }
            }
        }

    }
}

`;
