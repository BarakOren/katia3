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

    const Tartar = useRef(new Audio('https://cdn.whyp.it/50f4bed1-fe24-441e-9010-86f45248961f.mp3'));
    const YellowTeeth = useRef(new Audio('https://cdn.whyp.it/0659ae58-c44e-4f79-8388-6a78a87714e9.mp3'));
    const GumDiseases = useRef(new Audio('https://cdn.whyp.it/eb7f4927-1dc1-4c00-8438-adecabf3a0f1.mp3')); 
    const TeethCancer = useRef(new Audio('https://cdn.whyp.it/13bfac72-2d1c-41bf-aff0-2d33652b0b04.mp3')); 

    const [progress, setProgress] = useState(0)
    
    useEffect(() => {
        if(playing){
            const interval = setInterval(() => {
                if(animation === "Tartar") {
                    setProgress(Tartar.current.currentTime/Tartar.current.duration * 100)
                }
                else if(animation === "Yellow teeth") {
                    setProgress(YellowTeeth.current.currentTime/YellowTeeth.current.duration * 100)
                }
                else if(animation === "Gum diseases") {
                    setProgress(GumDiseases.current.currentTime/GumDiseases.current.duration * 100)
                }
                else if(animation === "Cancer") {
                    setProgress(TeethCancer.current.currentTime/TeethCancer.current.duration * 100)
                }
                
            }, 100);
        
        return () => clearInterval(interval);
        }
      
    }, [playing]);

    const play = () => {
        console.log(animation)
        setPlaying(true);
        if(animation === "Tartar") {
            console.log("true")
            Tartar.current.play()
        }
        else if(animation === "Yellow teeth") {
            YellowTeeth.current.play()
        }
        else if(animation === "Gum diseases") {
            GumDiseases.current.play()
        }
        else if(animation === "Cancer") {
            TeethCancer.current.play()
        }
    };

    const pause = () => {
        setPlaying(false);
        if(animation === "Tartar") {
            Tartar.current.pause()
        }
        else if(animation === "Yellow teeth") {
            YellowTeeth.current.pause()
        }
        else if(animation === "Gum diseases") {
            GumDiseases.current.pause()
        }
        else if(animation === "Cancer") {
            TeethCancer.current.pause()
        }
    };


    return <Container>
        <Icon isPlaying={playing} onClick={playing ? pause : play} src={IconSvg} alt="Icon" />
        <Icon isPlaying={null} onClick={() => {setAnimation(null); pause(); enableBodyScroll(bodyRef)} } src={Arrow} alt="arrow" />
        <ProgressBar progress={progress} />
    </Container>
}

export default Icons