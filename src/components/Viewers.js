import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom"

function Viewers() {
    return (
        <Container>
            <Wrap>
                <Link to="/detail">
                    <img src="/images/viewers-disney.png" alt="" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/detail">
                    <img src="/images/viewers-marvel.png" alt="" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/detail">
                    <img src="/images/viewers-national.png" alt="" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/detail">
                    <img src="/images/viewers-pixar.png" alt="" />
                </Link>
            </Wrap>
            <Wrap>
                <Link to="/detail">
                    <img src="/images/viewers-starwars.png" alt="" />
                </Link>
            </Wrap>
            
        </Container>
    )
}

export default Viewers

const Container = styled.div`
    margin-top: 30px ;
    padding: 30px 0px 26px;
    display: grid; /*have more options then flex*/
    grid-gap: 25px; /*space between the images*/
    grid-template-columns: repeat(5, minmax(0, 1fr)); /*display all 5 images in one row*/
`

const Wrap = styled.div`
    border-radius: 10px;
    cursor: pointer;
    border: 3px solid rgba(249, 249, 249, 0.1);
    box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
    transition: all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.95) 0s;

    img {
        width: 100%;
        height: 100%;
        object-fit: cover; /*fit the object as much as possible inside the div*/
    }
    &:hover {   /*concatenate the hover to the Wrap div*/
        transform: scale(1.05); /*makes the image bigger*/
        border-color: white;
        box-shadow: rgb(0 0 0 / 90%) 0px 26px 30px -10px,
        rgb(0 0 0 / 82%) 0px 16px 10px -10px;
    }
`
