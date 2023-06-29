import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
    flex-direction: column;
`

const Text = styled.p`
    font-size: 3.5vw;
    font-weight: 400;
    font-family: 'Libre Franklin', sans-serif;
    font-style: italic;
`

const StartButton = styled(Link)`
    width: 112.29px;
    height: 46px;
    background: white;
    border-radius: 14px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    color: black;
    font-family: 'Libre Franklin', sans-serif;
    font-weight: 300;

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