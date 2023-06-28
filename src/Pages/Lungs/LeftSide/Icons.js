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

    const Tuberculosis = useRef(new Audio('https://cdn.whyp.it/69d75346-aa8e-4652-8f03-83bfdddcfaaa.mp3'));
    const Cancer = useRef(new Audio('https://cdn.whyp.it/d60a197a-7c42-4665-b17b-40809f049fdf.mp3'));
    const LungCollapse = useRef(new Audio('https://cdn.whyp.it/5d009d92-ae74-4d42-ade6-f80338bfd66b.mp3')); 
    const Asthma = useRef(new Audio('https://cdn.whyp.it/295e8b25-2f4b-4bcc-9f04-e21c5dd159de.mp3')); 
    
    const [progress, setProgress] = useState(0)
    
    useEffect(() => {
        if(playing){
            const interval = setInterval(() => {
                if(animation === "Tuberculosis") {
                    setProgress(Tuberculosis.current.currentTime/Tuberculosis.current.duration * 100)
                }
                else if(animation === "Cancer") {
                    setProgress(Cancer.current.currentTime/Cancer.current.duration * 100)
                }
                else if(animation === "Lung collapse") {
                    setProgress(LungCollapse.current.currentTime/LungCollapse.current.duration * 100)
                }
                else if(animation === "Astma") {
                    setProgress(Asthma.current.currentTime/Asthma.current.duration * 100)
                }
                
            }, 100);
        
        return () => clearInterval(interval);
        }
      
    }, [playing]);

    const play = () => {
        setPlaying(true);
        if(animation === "Tuberculosis") {
            Tuberculosis.current.play()
        }
        else if(animation === "Cancer") {
            Cancer.current.play()
        }
        else if(animation === "Lung collapse") {
            LungCollapse.current.play()
        }
        else if(animation === "Asthma") {
            Asthma.current.play()
        }
    };

    const pause = () => {
        setPlaying(false);
        if(animation === "Tuberculosis") {
            Tuberculosis.current.pause()
        }
        else if(animation === "Cancer") {
            Cancer.current.pause()
        }
        else if(animation === "Lung collapse") {
            LungCollapse.current.pause()
        }
        else if(animation === "Asthma") {
            Asthma.current.pause()
        }
    };


    return <Container>
        <Icon isPlaying={playing} onClick={playing ? pause : play} src={IconSvg} alt="Icon" />
        <Icon isPlaying={null} onClick={() => {setAnimation(null); pause(); enableBodyScroll(bodyRef)} } src={Arrow} alt="arrow" />
        <ProgressBar progress={progress} />
    </Container>
}

export default Icons