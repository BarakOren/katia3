import styled from "styled-components"
import background from '../../Assets/lungsbg.mp4';
import ModelViewer from "./Model/ModelViewer"

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
    filter: ${p => p.width ? 'blur(70px)' : 'blur(130px)'};
    background-color: rgba(255, 255, 255, 0.7);
`

const Title = styled.p`
    width: 20vw;
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 400;
    font-size: 70px;
    line-height: 170%;
    position: absolute;
    margin: 0;
    top: 58%;
    transform: translateY(-50%);
    left: 10vw;
    letter-spacing: 12px;

    @media only screen and (max-width: 1600px) {
        font-size: 38px;
        line-height: 190%;
        left: 13vw;
    }
`

const Span = styled.span`
    font-size: 76px;
    font-family: 'Amiri', serif;
    font-weight: 400;
    font-style: italic;

    @media only screen and (max-width: 1600px) {
        font-size: 38px;
    }
`

const LungsPage = (props) => {

    const {totalValue, setTotalValue, Age, SmokingPeriod, NumberOfCig} = props
    const width = window.innerWidth

    return <Container>
    
    <BackgroundContainer>
    <BlackShade />
    <BackgroundVideo autoPlay loop muted>
        <source src={background} type='video/mp4' />
    </BackgroundVideo>
    </BackgroundContainer>


    <Circle size={width < 1601 ? 24 : 32} opacity={0.7}/>
    <Circle size={width < 1601 ? 28 : 37} opacity={0.5}/>
    <Circle size={width < 1601 ? 32 : 43} opacity={0.3}/>
    <Circle size={width < 1601 ? 36 : 48} opacity={0.2}/>
    <Glow size={width < 1601 ? 30 : 40} width={width < 1601}/>


    <Title>These<br />Are<br />Your<br /><Span>lungs</Span></Title>

    <ModelViewer 
    totalValue={totalValue} setTotalValue={setTotalValue}
    />

    </Container>
}

export default LungsPage
