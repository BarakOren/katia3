import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    flex-direction: column;
`

const Text = styled.p`
    font-size: 3.7vw;
    font-weight: 400;
    font-family: 'Amiri', sans-serif;
    font-style: italic;

    @media only screen and (max-width: 1601px) {
        font-size: 3.5vw;
    }
`

const StartButton = styled(Link)`
    background-color: white;
    border-radius: 26px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 2vw;
    padding: 12px 40px;
    color: black;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 300;
    transition: .5s background-color;

    &:hover{
        background-color: #67CEC4;
    }

    &:focus {
        box-shadow: inset 0px -2px 12px black;
    }

    @media only screen and (max-width: 1601px) {
        font-size: 16px;
        padding: 10px 32px;
        border-radius: 12px;
    }
`

const SecondText = (props) => {
    const {SecondRef} = props
    return <Container ref={SecondRef}>
        <Text>
        I propose to look at the problem from the inside...        
        </Text>
        <StartButton to="/lungs">Start</StartButton>
    </Container>
}

export default SecondText