import styled from "styled-components";
import React from "react";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`

const Text = styled.p`
    width: 70%;
    font-size: 2.5vw;
    text-align: center;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 400;
    font-style: italic;
`

const FirstText = () => {

    return <Container>
    <Text>
    Smoking is a social problem of society, both for smokers and non-smokers. For the first 
    <br/>
    - the problem is to quit smoking, for the second - to avoid the influence of the smoking society.
    </Text>
    </Container>
}


export default FirstText