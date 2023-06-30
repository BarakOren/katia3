import styled, {css , keyframes} from "styled-components"
import svg from "../Assets/AfterEverythingSvg.svg"
import arrow from "../Assets/arrow.svg"
import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";

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

const TextsContainer = styled.div`
    margin-bottom: 70px;
    position: absolute;
    width: 85%;
    height: 85vh;
    flex-direction: row;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    z-index: 20;
    text-align: left;
    opacity: ${p => p.show ? 1 : 0};
    transition: 1s opacity;
`

const TextContainer = styled.div`
    width: 49%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    height: 50%;
`

const Text = styled.h4`
    font-size: 60px;
    /* opacity: ${p => p.step === 1 ? 1 : 0}; */
    transition: 3s opacity;
    margin: 0;
    font-weight: 800;
    text-align: inherit;
`

const ItalicOne = styled.p`
  transition: 3s opacity;
  /* opacity: ${p => p.step === 1 ? 1 : 0}; */
  font-size: 36px;
  font-style: italic;
  font-family: Amiri;
  text-align: inherit;
  min-width: 100%;
  line-height: 50px;
  margin-top: 20px;
`


const TextTwo = styled.h4`
    font-size: 60px;
    /* opacity: ${p => p.step === 2 ? 1 : 0}; */
    transition: 3s opacity;
    margin: 0;
    font-weight: 800;
    text-align: inherit;
`

const ItalicTwo = styled.p`
  transition: 3s opacity;
  /* opacity: ${p => p.step === 2 ? 1 : 0}; */
  font-size: 36px;
  font-style: italic;
  font-family: Amiri;
  text-align: inherit;
  min-width: 100%;
  line-height: 50px;
  margin-top: 20px;
`

const NextButton = styled.button`
    z-index: 100;
    color: white;
    border: none;
    background: none;
    position: absolute;
    top: 35%;
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
    const [texts, setTexts] = useState({})

    const [showAll, setShowAll] = useState(false);

    // const location = useLocation().pathname.replace('/', '');
    const location = useLocation().pathname

    useEffect(() => {
        if(location === "/lungs"){
          console.log("lungd")
          setTexts({
            two: "About 21% of people",
            twoItalic: "with asthma smoke, even though cigarette smoke is a trigger for asthma attacks.",
          })
        }
        else if(location === "/teeth"){
          console.log("teeth")
          setTexts({
            two: "90% of people who smoke have tartar on their teeth",
            twoItalic: "Tartar builds up even when you brush your teeth regularly.",
          })
        }
        else if(location === "/tongue"){
          setTexts({
            two: "This tint does not disappear even with daily use of whitening pastes.",
            twoItalic: "Tooth discoloration caused by smoking is much more difficult to treat than food discoloration.",
          })
        }
    }, [location])

    const stepForward = () => {
      if(step === 3){
        setAfterEverything(false); 
        setLeftSideToggle(true); 
        setTimeout(() => {
          setStep(1); 
        }, 3000)
      return}
      setStep(step + 1);
    }

    const stepBackwards = () => {
      setStep(step - 1);
    }

    return <Container opacity={afterEverything} display={showAll}>
    
    <TextsContainer show={step === 1}>
      <TextContainer>
        <Text>After everything you've read,</Text>
        <ItalicOne>do you think people are afraid to smoke?</ItalicOne>
      </TextContainer>
    </TextsContainer>

    <TextsContainer show={step === 2}>
      <TextContainer>
        <Text>{texts.two}</Text>
      </TextContainer>
      <TextContainer>
        <ItalicTwo>{texts.twoItalic}</ItalicTwo>
      </TextContainer>
    </TextsContainer>

    <TextsContainer show={step === 3}>
    <TextContainer style={{width: 'auto'}}>
      <Text>What about</Text>
      <ItalicOne style={{textAlign: "right"}}>you?</ItalicOne>
    </TextContainer>
  </TextsContainer>

    <NextButton onClick={() => stepForward()} position={'45%'} opacity={afterEverything}>Next</NextButton>
    <NextButton onClick={() => stepBackwards()} position={'55%'} disabled={step === 1} opacity={afterEverything}>Back</NextButton>

    </Container>
}

export default AfterEverything