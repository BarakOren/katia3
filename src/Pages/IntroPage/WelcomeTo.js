import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
`


const Title = styled.h1`
    color: white; 
    font-size: 4vw;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 0.478em;
    font-style: italic;
`

const SpanOne = styled.span`
    font-weight: 300;
    font-style: normal;
    font-size: 6vw;
    letter-spacing: 0.888em;
`

const WelcomeTo = () => {

    return <Container>
        <Title>Welcome To Fresh</Title>
    </Container>
}

export default WelcomeTo;