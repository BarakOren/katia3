import styled from "styled-components"
import WelcomeTo from "./WelcomeTo"
import FirstText from "./FirstText"
import SecondText from "./SecondText"

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
    height: 200vh;
    top: 50%;
    right: -30vw;
    transform: translateY(-50%);
    position: absolute;
    overflow: hidden;
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

const IntroPage = () => {

    const lines = [
        {
            size: 30,
            opacity: 1
        },
        {
            size: 45,
            opacity: 0.60
        },
        {
            size: 60,
            opacity: 0.40
        },
        {
            size: 80,
            opacity: 0.20
        },
        {
            size: 45,
            opacity: 0.75
        },

    ]

    return <>
        <LineContainer>
        <div style={{position: "relative", width: "100%", height: "100%", overflow: "hidden"}}>
        {lines.map(line => {return <Line size={line.size} opacity={line.opacity} />})}
        </div>
        </LineContainer>
    
        <WelcomeTo />
        <FirstText />
        <SecondText />
    </>
}

export default IntroPage;