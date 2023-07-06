import styled from "styled-components"
import WelcomeTo from "./WelcomeTo"
import FirstText from "./FirstText"
import SecondText from "./SecondText"
import gif from "../../Assets/intro-background.gif"


const Backgroud = styled.img`
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100%;
    z-index: -1;
`


const LineContainer = styled.div`
    width: 100vw;
    height: 100vh;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    position: absolute;

    @media only screen and (min-width: 1601px) {
        
    }
`

const Line = styled.div`
    background: none;
    border: ${p => `1px solid rgba(255,255,255,${p.opacity})`};
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    width: ${p => `${p.size}vw`};
    height: ${p => `${p.size}vw`};
    border-radius: 50%;
`

const Sun = styled.div`
    width: 70vw;
    height: 70vw;
    position: absolute;
    top: 50%;
    right: 50%;
    transform: translate(50%, -50%);
    background: radial-gradient(circle, rgba(205,109,29,1) 0%, rgba(205,109,29,0) 60%);
`

const Gif = styled.img`
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: auto;
    transform: translate(-50%, -50%);
`



const IntroPage = () => {

    const lines = [
        {
            size: 25,
            opacity: 1
        },
        {
            size: 40,
            opacity: 0.60
        },
        {
            size: 55,
            opacity: 0.40
        },
        {
            size: 75,
            opacity: 0.20
        },

    ]

    return <>
        <LineContainer>
        <div style={{position: "relative", width: "100%", height: "100%"}}>
        {lines.map(line => {return <Line size={line.size} opacity={line.opacity} />})}
        </div>
        </LineContainer>
        <Gif src={gif} alt="gif" loop />
        <Sun />
    
        <WelcomeTo />
        <FirstText />
        <SecondText />
    </>
}

export default IntroPage;