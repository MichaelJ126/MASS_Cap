import React from 'react'
import styled from 'styled-components'

const BackgroundImage = () => {
    return (
        <BackgroundContainer>
        <img src='https://themotionpictureblog.files.wordpress.com/2018/01/best-movie-fight-scenes.jpg'/>
      
       </BackgroundContainer>  
    )
}

const BackgroundContainer = styled.div`
    height: 100vh;
    width: 100vw;
    img{
        height: 100vh;
        width: 100vw;
    }


`

export default BackgroundImage