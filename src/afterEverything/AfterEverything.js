import styled, {css , keyframes} from "styled-components"
import svg from "../Assets/AfterEverythingSvg.svg"
import arrow from "../Assets/arrow.svg"
import {useEffect, useState} from "react";
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';


const shutdown = keyframes`
  0% {
    visibility: visible
  }

  99% {
    visibility: visible
  }
  100% {
    visibility: hidden;
  }

`;

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: center;
    position: absolute;
    z-index: 20;
    overflow: hidden;
    transition: 3s all;
    opacity:  ${p => p.opacity ? 1 : 0};
    ${p => css`
    animation: ${p.opacity ? '' : shutdown} 3s forwards;
    `}
`


const animation = keyframes`
  from {
    width: 200%;
    top: -100%;
  }

  to {
    width: 100%;
    top: 0%;
  }
`;

const animation2 = keyframes`
  from {
    width: 100%;
    top: 0%;
  }

  to {
    width: 200%;
    top: -100%;
  }
`;

const ButtonAnimation = keyframes`
  from {
    top: -60px;
  }

  to {
    top: 60px;
  }
`;


const ButtonAnimation2 = keyframes`
  from {
    top: 60px;
  }

  to {
    top: -60px;
  }
`;


const SVG = styled.img`
    position: absolute;
    height: auto;
    ${p => css`
    animation: ${p.display ? animation : animation2} 3s forwards;
    `}
`

const BackButton = styled.img`
    width: 20px;
    height: auto;
    position: absolute;
    /* top: 60px; */
    left: 30px;
    transform: rotate(180deg);
    border-radius: 50%;
    border: 1px solid white;
    padding: 6px 8px;
    cursor: pointer;
    /* opacity: ${p => p.opacity ? 1 : 0}; */
    /* transition: 3s opacity ease-in-out; */
    ${p => css`
    animation: ${p.opacity ? ButtonAnimation : ButtonAnimation2} 3s forwards;
    `}
`

const TextsContainer = styled.div`
    width: 70%;
    height: 90vh;
    flex-direction: column;
    z-index: 30;
`

const TextContainer = styled.div`
    height: 100vh;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Text = styled.h4`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    font-size: 60px;
    text-align: center;
    opacity: ${p => p.opacity === 1 ? 1 : 0};
    transition: 3s opacity;
    margin: 0;
`

const TextTwo = styled.h4`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    font-size: 50px;
    text-align: center;
    opacity: ${p => p.opacity === 2 ? 1 : 0};
    transition: 3s opacity;
    margin: 0;
`



const TextThree = styled.h4`
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 50%;
    font-size: 100px;
    text-align: center;
    opacity: ${p => p.opacity === 3 ? 1 : 0};
    transition: 3s opacity;
    margin: 0;
`

const MoveForwardButton = styled.img`
    position: absolute;
    bottom: 50px;
    right: 20%;
    width: 20px;
    height: auto;
    padding: 8px 10px;
    border-radius: 50%;
    cursor: pointer;
    opacity: ${p => p.opacity ? 1 : 0};
    transition: 3s opacity ease-in-out;
`
// <MoveForwardButton src={arrow} alt="" opacity={afterEverything} />

const NextButton = styled.button`
    color: white;
    border: none;
    background: none;
    position: absolute;
    bottom: 50px;
    right: ${p => p.position};
    height: auto;
    padding: 8px 10px;
    border-radius: 6px;
    border: 1px solid white;
    opacity: ${p => p.opacity ? 1 : 0};
    transition: 3s opacity ease-in-out;
    cursor: pointer;
    transform: translateX(50%);

    &:active{ 
      transform: scale(1.05) translateX(50%);
    }

    &:disabled {
      opacity: 0.3;
    }
`


const AfterEverything = (props) => {

    const {leftSideToggle, setLeftSideToggle, bodyRef, afterEverything, setAfterEverything} = props
    const [step, setStep] = useState(1)

    const [showAll, setShowAll] = useState(false);

    // useEffect(() => {
    //   if (afterEverything) {
    //     console.log("1")
    //     setShowAll(true); return;
    //   }
    //   else if(!afterEverything){
    //       setTimeout(() => {
    //     console.log("2")
    //           setShowAll(false)
    //       }, 3001)
    //     } 
    // }, [afterEverything])

    const texts = {
      one: "After everything you've read, do you think people are afraid to smoke?",
      two: "About 21% of people with asthma smoke, even though cigarette smoke is a trigger for asthma attacks.",
      three: "What about you?"
    }

    const stepForward = () => {
      if(step === 3){setAfterEverything(false); setLeftSideToggle(true); setStep(1); 
      // setTimeout(() => {
      //   enableBodyScroll(bodyRef);
      // }, 3000)  
      return}
      setStep(step + 1);
    }

    const stepBackwards = () => {
      setStep(step - 1);
    }

    return <Container opacity={afterEverything} display={showAll}>
    <SVG src={svg} display={afterEverything} />
    <BackButton opacity={afterEverything} onClick={() => setAfterEverything(false)} src={arrow} alt=""/>
    
    <TextsContainer>
    <NextButton onClick={() => stepForward()} position={'20%'} opacity={afterEverything}>Next</NextButton>
    <NextButton onClick={() => stepBackwards()} disabled={step === 1} position={'80%'} opacity={afterEverything}>Back</NextButton>

    <Text opacity={step}>{texts.one}</Text>
    <TextTwo opacity={step}>{texts.two}</TextTwo>
    <TextThree opacity={step}>{texts.three}</TextThree>

    </TextsContainer>
    </Container>
}

export default AfterEverything