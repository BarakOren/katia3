import styled from "styled-components";
import IconSvg from "../../../Assets/logo.svg";
import Arrow from "../../../Assets/arrow.svg";
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

    const {bodyRef, setAnimation} = props

    const [playing, setPlaying] = useState(false);

    const audioRef = useRef(new Audio('https://cdn.whyp.it/69d75346-aa8e-4652-8f03-83bfdddcfaaa.mp3'));

    const [progress, setProgress] = useState(0)
  
    useEffect(() => {
        if(playing){
            const interval = setInterval(() => {
                setProgress(audioRef.current.currentTime/audioRef.current.duration * 100)
            }, 100);
        return () => clearInterval(interval);
        }
      
    }, [playing]);

    const play = () => {
        setPlaying(true);
        audioRef.current.play()
    };

    const pause = () => {
        setPlaying(false);
        audioRef.current.pause()
    };


    return <Container>
        <Icon onClick={playing ? pause : play} src={IconSvg} alt="Icon" />
        <Icon onClick={() => {setAnimation(null); enableBodyScroll(bodyRef)} } src={Arrow} alt="arrow" />
        <ProgressBar progress={progress} />
    </Container>
}

export default Icons