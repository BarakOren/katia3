import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: 1;
`


const Title = styled.h1`
    color: white; 
    width: 80%;
    font-size: 4vw;
    font-style: italic;
    font-weight: 700;
    letter-spacing: 500%;
    font-style: italic;
    font-family: Amiri;
    text-align: center;
    letter-spacing: 60px;

    @media only screen and (max-width: 1300px) {
        letter-spacing: 30px;
    }

    @media only screen and (max-width: 1200px) {
        letter-spacing: 20px;
        color: beige;
    }

    @media only screen and (max-width: 1000px) {
        letter-spacing: 12px;
    }
`

const WelcomeTo = () => {

    return <Container>
        <Title>Welcome To Fresh</Title>
    </Container>
}

export default WelcomeTo;