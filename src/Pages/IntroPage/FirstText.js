import styled, { keyframes } from 'styled-components'
import React from "react";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`

const Text = styled.p`
    width: 70%;
    font-size: 3.5vw;
    text-align: center;
    font-family: 'Amiri', sans-serif;
    font-weight: 400;
    font-style: italic;
    z-index: 1;
    line-height: 96px;

    @media only screen and (max-width: 1601px) {
        font-size: 3vw;
        line-height: 73px;
    }
`

const CircleAnimation = keyframes`
    0% { top: 50%; right: 0%; }
    25% { top: 30%; right: 30%; }
    50% { top: 50%; right: 90%; }
    75% { top: 70%; right: 45%; }
    100% { top: 50%; right: 0%; }

`

const circleSize = 500

const Circle = styled.div`
    position: absolute;
    width: ${`${circleSize}px`};
    height: ${`${circleSize}px`};
    transform: translate(50%, -50%);
    background: radial-gradient(circle, rgba(205,109,29,0.5) 0%, rgba(205,109,29,0) 60%);
    animation-name: ${CircleAnimation};
    animation-duration: 25s;
    animation-iteration-count: infinite;

`

const FirstText = () => {

    return <Container>
    <Circle />
    <Text>
    Smoking is a social problem of society, both for smokers and non - smokers. For the first - the problem is to quit smoking, for the second - to avoid the influence of the smoking society.
    </Text>
    </Container>
}


export default FirstText