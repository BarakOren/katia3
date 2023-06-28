import styled from "styled-components";
import IconSvg from "../../../Assets/soundicon.svg";
import Arrow from "../../../Assets/leftsidearrow.svg";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { enableBodyScroll } from 'body-scroll-lock';


const Container = styled.div`
    margin-top: 10px;
    width: 11vw;
    height: 100px;
    /* position: absolute; */
    /* left: 0; */
    /* top: 30%; */
    /* transform: translateY(-50%); */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

const Icon = styled.img`
    width: 20px;
    height: 20px;
    padding: 6px;
    border: 1px solid white;
    border-radius: 50%;
    cursor: pointer;
    box-shadow: ${p => p.isPlaying && "0 0 15px rgb(255,255,255,0.8)"};
    transition: .5s box-shadow;
`

const ProgressBar = styled.div`
    width: 70%;
    height: 2px;
    border-radius: 5px;
    background: rgba(255,255,255,0.5); 
    position: relative;

    &::after {
        content: '';
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 2px;
        width: ${p => `${p.progress}%`};
        background: rgba(255,255,255,1);
        transition: .2s ease-in-out width;
    }
`

const Icons = (props) => {

    const {animation, bodyRef, setAnimation} = props

    const [playing, setPlaying] = useState(false);

    const Stomatitis = useRef(new Audio('https://cdn.whyp.it/3b1bcd9f-19f3-4927-baa7-84a1c2f29f4e.mp3'));
    const BadSmell = useRef(new Audio('https://cdn.whyp.it/b6b0a658-356d-4edb-9cf8-8ba6256007f0.mp3'));
    const LossOfTaste = useRef(new Audio('https://cdn.whyp.it/1cd0acf3-e2bb-4f2e-9148-4c851bd6b873.mp3')); 
    const Plaque = useRef(new Audio('https://cdn.whyp.it/872b0407-bbc4-4ccd-8189-dad44a72a279.mp3')); 

    const [progress, setProgress] = useState(0)
    
    useEffect(() => {
        if(playing){
            const interval = setInterval(() => {
                if(animation === "Stomatitis") {
                    setProgress(Stomatitis.current.currentTime/Stomatitis.current.duration * 100)
                }
                else if(animation === "Bad smell") {
                    setProgress(BadSmell.current.currentTime/BadSmell.current.duration * 100)
                }
                else if(animation === "Loss of taste") {
                    setProgress(LossOfTaste.current.currentTime/LossOfTaste.current.duration * 100)
                }
                else if(animation === "Plaque") {
                    setProgress(Plaque.current.currentTime/Plaque.current.duration * 100)
                }
                
            }, 100);
        
        return () => clearInterval(interval);
        }
      
    }, [playing]);

    const play = () => {
        setPlaying(true);
        console.log("first")
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


    return <Container>
        <Icon isPlaying={playing} onClick={playing ? pause : play} src={IconSvg} alt="Icon" />
        <Icon isPlaying={null} onClick={() => {setAnimation(null); pause(); enableBodyScroll(bodyRef)} } src={Arrow} alt="arrow" />
        <ProgressBar progress={progress} />
    </Container>
}

export default Icons