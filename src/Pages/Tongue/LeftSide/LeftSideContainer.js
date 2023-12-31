import styled from "styled-components"
import BackButton from "./BackButton"
import TextArea from "./TextArea"
import Listen from "./Listen"
import {useEffect, useRef, useState} from "react";
import StomatitisSound from "../../../Assets/Stomatitis.wav"
import BadSmellSound from "../../../Assets/Bad-smell.wav"
import LossOfTasteSound from "../../../Assets/Loss-of-taste.wav"
import PlaqueSound from "../../../Assets/Plaque.wav"

const Container = styled.div`
    width: 30vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: ${p => p.left ? '0' : '-50vw'};
    transition: 2s left;
    transition-delay: ${p => p.left ? '2s' : 0};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const Relative = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    align-items: flex-start;
`

const Middle = styled.div`
    /* margin-top: 100px; */
    width: 100%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
`

const ButtonAndTextContainer = styled.div`
    width: 70%;
    height: 100%;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    justify-content: center;
`


const LeftSideContainer = (props) => {

    const {bodyRef, setAnimation, leftSideToggle, setLeftSideToggle, setAfterEverything, animationText, animation, setPlay} = props
    
    useEffect(() => {
        if(animation !== null){
            setLeftSideToggle(true)
        } else {
            setLeftSideToggle(false)
        }
    }, [animation])


    const [playing, setPlaying] = useState(false);
   

    const [progress, setProgress] = useState(0)

    const Stomatitis = useRef(null);
    const BadSmell = useRef(null);
    const LossOfTaste = useRef(null);
    const Plaque = useRef(null);
  
        const [isLoaded, setIsLoaded] = useState(false);
  
        useEffect(() => {
          if (!isLoaded) {
            Stomatitis.current = new Audio(StomatitisSound);
            BadSmell.current = new Audio(BadSmellSound);
            LossOfTaste.current = new Audio(LossOfTasteSound);
            Plaque.current = new Audio(PlaqueSound);
            setIsLoaded(true);
          }
        }, [isLoaded]);
    
    // useEffect(() => {
    //     if(playing){
    //         const interval = setInterval(() => {
    //             if(animation === "Stomatitis") {
    //                 setProgress(Stomatitis.current.currentTime/Stomatitis.current.duration * 100)
    //             }
    //             else if(animation === "Bad smell") {
    //                 setProgress(BadSmell.current.currentTime/BadSmell.current.duration * 100)
    //             }
    //             else if(animation === "Loss of taste") {
    //                 setProgress(LossOfTaste.current.currentTime/LossOfTaste.current.duration * 100)
    //             }
    //             else if(animation === "Plaque") {
    //                 setProgress(Plaque.current.currentTime/Plaque.current.duration * 100)
    //             }
                
    //         }, 100);
        
    //     return () => clearInterval(interval);
    //     }
      
    // }, [playing]);

    const play = () => {
        setPlaying(true);
        if(animation === "Stomatitis") {
            Stomatitis.current.play()
        }
        else if(animation === "Bad smell") {
            BadSmell.current.play()
        }
        else if(animation === "Loss of taste") {
            LossOfTaste.current.play()
        }
        else if(animation === "Plaque") {
            Plaque.current.play()
        }
    };

    const pause = () => {
        setPlaying(false);
        if(animation === "Stomatitis") {
            Stomatitis.current.pause()
        }
        else if(animation === "Bad smell") {
            BadSmell.current.pause()
        }
        else if(animation === "Loss of taste") {
            LossOfTaste.current.pause()
        }
        else if(animation === "Plaque") {
            Plaque.current.pause()
        }
    };

    useEffect(() => {
        if(animation === null){
            Stomatitis.current.pause()
            BadSmell.current.pause()
            LossOfTaste.current.pause()
            Plaque.current.pause()
            setPlaying(false)
        }
    }, [animation])


    return <Container left={leftSideToggle}>
    <BackButton pause={pause} setAnimation={setAnimation} animation={animation} bodyRef={bodyRef} />
        <Middle>
        <ButtonAndTextContainer>
        <TextArea animation={animation} animationText={animationText} />
        <Listen playing={playing} pause={pause} progress={progress} setProgress={setProgress} animation={animation} bodyRef={bodyRef} setAnimation={setAnimation} setToggle={setLeftSideToggle} setAfterEverything={setAfterEverything} play={play}/>
        </ButtonAndTextContainer>
        </Middle>
    </Container>
}

export default LeftSideContainer;