import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import {useParams} from "react-router-dom"
import db from "../firebase"


function Detail() {
    const { id } = useParams();
    const [movie, setMovie ] = useState();

    useEffect(()=>{
        // Grab the movie info from DB
        db.collection("movies")
        .doc(id)
        .get()
        .then((doc)=>{
            if (doc.exists) {
                // save the movie data
                setMovie(doc.data());
            } else{
                //redirect the home page
            }
        });
    }, []);   //the empty brackets means that call the funtionality whenever the component is load

    return (
        <Container>
            {movie && (
                <>
                        <Background>
                        {/* <img src={movie.backgroundImg} alt=""/> */} 
                        <img src="/images/weltstadte.jpg" alt="" />
                    </Background>
                    <ImageTitle>
                        {/* <img src={movie.titleImg} alt=""/> */}
                        <img src="/images/logo.png" alt="" />
                    </ImageTitle>
                    <Controls>
                        <PlayButton>
                            <img src="/images/play-icon-black.png" alt=""/>
                            <span>PLAY</span>
                        </PlayButton>
                        <TrailerButton>
                            <img src="/images/play-icon-white.png" alt=""/>
                            <span>Trailer</span>
                        </TrailerButton>
                        <AddButton>
                            <span>+</span>
                        </AddButton>
                        <GroupWatchButton>
                            <img src="/images/group-icon.png" alt=""/>
                        </GroupWatchButton>
                    </Controls>
                    <SubTitle>
                        {/* {movie.subTitle} */}
                        2022 ▲ 31Years ▲ 30Years ▲ MyFamily ▲ 7Years ▲ 3Years
                    </SubTitle>
                    <Description>
                        {/* {movie.description} */}
                        Family is the one of the most important and valuable gifts of our life. The word “Family” itself is so important<br/> that it means to feel secure with people around you whom you can always count on, whom you can always share your problems,<br/> whom you can play with all the time, whom you can freshen up your mood anytime.
                    </Description>
                </>
            )}
            <Background>
                {/* <img src={movie.backgroundImg} alt=""/> */} 
                <img src="/images/weltstadte.jpg" alt="" />
            </Background>
            <ImageTitle>
                {/* <img src={movie.titleImg} alt=""/> */}
                <img src="/images/logo.png" alt="" />
            </ImageTitle>
            <Controls>
                <PlayButton>
                    <img src="/images/play-icon-black.png" alt=""/>
                    <span>PLAY</span>
                </PlayButton>
                <TrailerButton>
                    <img src="/images/play-icon-white.png" alt=""/>
                    <span>Trailer</span>
                </TrailerButton>
                <AddButton>
                    <span>+</span>
                </AddButton>
                <GroupWatchButton>
                    <img src="/images/group-icon.png" alt=""/>
                </GroupWatchButton>
            </Controls>
            <SubTitle>
                {/* {movie.subTitle} */}
                2022 ▲ 31Years ▲ 30Years ▲ MyFamily ▲ 7Years ▲ 3Years
            </SubTitle>
            <Description>
                {/* {movie.description} */}
                Family is the one of the most important and valuable gifts of our life. The word “Family” itself is so important<br/> that it means to feel secure with people around you whom you can always count on, whom you can always share your problems,<br/> whom you can play with all the time, whom you can freshen up your mood anytime.
            </Description>
        </Container>
    )
}

export default Detail

const Container = styled.div`
    min-height: calc(100vh - 70px);
    /* padding: 0 calc(3.5vw + 5px); */
    position: relative;
`

const Background = styled.div`
    position: fixed;
    /* top: 0,
    left: 0;
    bottom: 0;
    right: 0; */
    z-index: -1;
    opacity: 0.6;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
`

const ImageTitle = styled.div`
    padding: 0 calc(3.5vw + 5px);
    height: 30vh;
    min-height: 170px;
    width: 35vw;
    min-width: 200px; 
    margin-top: 60px;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`

const Controls = styled.div`
    padding: 0 calc(3.5vw + 5px);
    display: flex;
    align-items: center;
`

const PlayButton = styled.button`
    border-radius: 4px;
    font-size: 15px;
    padding: 0px 24px;
    margin-right: 22px;
    display: flex;
    align-items: center;
    height: 56px;
    background-color: rgb (249, 249, 249);
    border: none;
    letter-spacing: 1.8px;
    cursor: pointer;
    &:hover {
        background: rgb(198, 198, 198);
    }
`

const TrailerButton = styled(PlayButton)`
    background: rgba(0, 0, 0, 0.3);
    border: 1px solid rgb(249, 249, 249);
    color: rgb(249, 249, 249);
    text-transform: uppercase;
`

const AddButton = styled.button`
    margin-right: 16px;
    width: 44px;
    height: 44px;
    display: flex;
    align-item: center;
    justify-content: center; /* center the + icon*/
    border-radius: 50%;
    border: 2px solid white;
    background-color: rgba(0, 0, 0, 0.6);
    cursor: pointer;
    span {
        font-size: 30px;
        color: white;
    }
`

const GroupWatchButton = styled(AddButton)`
    background: rgb(0, 0, 0);
`

const SubTitle = styled.div`
    padding: 0 calc(3.5vw + 5px);
    color: rgb(249, 249, 249);
    font-size: 15px;
    min-height: 20px;
    margin-top: 28px;
`
const Description = styled.div`
    padding: 0 calc(3.5vw + 5px);
    line-height: 1.4;
    font-size: 20px;
    margin-top: 16px;
    color: rgb(249, 249, 249);
    max-width: 700px;
`
