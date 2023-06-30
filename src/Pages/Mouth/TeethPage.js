import styled from "styled-components"
// import background from '../../Assets/lungsBG.gif';
import SideControls from "../../Components/SideControls/SideControls";
import ModelViewer from "./Model/ModelViewer"
import { useState } from "react";
import StatisticsPage from "./Statistics/StatisticsPage";
import background from '../../Assets/mouthBG.mp4';


const Container = styled.div`
    width: 100vw;
    height: 90vh;
    justify-content: space-evenly;
    position: relative;
`

const BackgroundContainer = styled.div`
    width: 100vw;
    height: 100vh;
    z-index: -1;
    position: fixed;
    top: 0;
    left: 0;
`

const BlackShade = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2;
    background-color: black;
`

const BackgroundVideo = styled.video`
    width: 100%;
    height: auto;
`

const Circle = styled.div`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${p => `${p.size}vw`};
    height: ${p => `${p.size}vw`}; 
    border-radius: 50%;
    background: none;
    border: ${p => `solid 1px rgba(255, 255, 255, ${p.opacity})`};
`


const Glow = styled.div`
    position: absolute;
    top: 60%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${p => `${p.size - 15}vw`};
    height: ${p => `${p.size - 15}vw`}; 
    border-radius: 50%;
    filter: blur(70px);
    background-color: rgba(255, 255, 255, 0.7);
`

const Title = styled.p`
    width: 20vw;
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 190%;
    position: absolute;
    margin: 0;
    top: 60%;
    transform: translateY(-50%);
    left: 15vw;
    letter-spacing: 12px;
`

const Span = styled.span`
    font-size: 40px;
    font-family: 'Amiri', serif;
    font-weight: 400;
    font-style: italic;
`

const GitBackground = styled.img`
    width: 100%;
    height: auto;
`

// <BackgroundVideo autoPlay loop muted>
//         <source src={background} type='video/mp4' />
//     </BackgroundVideo>

const TeethPage = (props) => {

    const {totalValue, setTotalValue, Age, SmokingPeriod, NumberOfCig} = props

    return <Container>
    
    <BackgroundContainer>
    <BlackShade />
    <BackgroundVideo autoPlay loop muted>
        <source src={background} type='video/mp4' />
    </BackgroundVideo>
    </BackgroundContainer>

    <Circle size={24} opacity={0.7}/>
    <Circle size={27} opacity={0.5}/>
    <Circle size={30} opacity={0.3}/>
    <Circle size={33} opacity={0.2}/>
    <Glow size={30} />


    <Title>These<br />Are<br />Your<br /><Span>teeth</Span></Title>

    <ModelViewer totalValue={totalValue} setTotalValue={setTotalValue}
    />

    </Container>
}

export default TeethPage
