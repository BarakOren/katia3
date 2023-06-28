import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`


const Title = styled.h1`
    color: white; 
    font-size: 4vw;
    font-family: 'Montserrat', sans-serif;
    font-style: italic;
    font-weight: 300;
    letter-spacing: 0.478em;
`

const SpanOne = styled.span`
    font-family: 'Montserrat', sans-serif;
    font-weight: 300;
    font-style: normal;
    font-size: 6vw;
    letter-spacing: 0.888em;
`

const WelcomeTo = () => {

    return <Container>
        <Title>Welcome To <SpanOne>Fresh</SpanOne></Title>
    </Container>
}

export default WelcomeTo;