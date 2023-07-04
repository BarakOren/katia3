import styled from "styled-components"
import BackButton from "./BackButton"
import TextArea from "./TextArea"
import Listen from "./Listen"
import {useEffect, useRef, useState} from "react";
import TartarSound from "../../../Assets/tartar.wav"
import YellowTeethSound from "../../../Assets/Yellow-teeth.wav"
import GumDiseasesSound from "../../../Assets/Gum-diseases.wav"
import TeethCancerSound from "../../../Assets/cancer-teeth.wav"


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

    const Tartar = useRef(null);
    const YellowTeeth = useRef(null);
    const GumDiseases = useRef(null);
    const TeethCancer = useRef(null);
  
        const [isLoaded, setIsLoaded] = useState(false);
  
        useEffect(() => {
          if (!isLoaded) {
            Tartar.current = new Audio(TartarSound);
            YellowTeeth.current = new Audio(YellowTeethSound);
            GumDiseases.current = new Audio(GumDiseasesSound);
            TeethCancer.current = new Audio(TeethCancerSound);
            setIsLoaded(true);
          }
        }, [isLoaded]);


    const [playing, setPlaying] = useState(false);

    const [progress, setProgress] = useState(0)
    
    // useEffect(() => {
    //     if(playing){
    //         const interval = setInterval(() => {
    //             if(animation === "Tartar") {
    //                 setProgress(Tartar.current.currentTime/Tartar.current.duration * 100)
    //             }
    //             else if(animation === "Yellow teeth") {
    //                 setProgress(YellowTeeth.current.currentTime/YellowTeeth.current.duration * 100)
    //             }
    //             else if(animation === "Gum diseases") {
    //                 setProgress(GumDiseases.current.currentTime/GumDiseases.current.duration * 100)
    //             }
    //             else if(animation === "Cancer") {
    //                 setProgress(TeethCancer.current.currentTime/TeethCancer.current.duration * 100)
    //             }
                
    //         }, 100);
        
    //     return () => clearInterval(interval);
    //     }
      
    // }, [playing]);

    const play = () => {
        setPlaying(true);
        if(animation === "Tartar") {
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

    useEffect(() => {
        if(animation === null){
            Tartar.current.pause()
            YellowTeeth.current.pause()
            GumDiseases.current.pause()
            TeethCancer.current.pause()
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


    // const ref = useRef(null)
    // const [element, setElement] = useState(null)
    // const [precentage, setPrecentage] = useState(0)
    // const [width, setWidth] = useState(0)
    
    // useEffect(() => {
    //     const element = ref.current;
    //     setElement(element)
    //     setWidth(element.offsetWidth)

    //   }, []);

    //   const handleScroll = event => {
        
   

    //     var height = element.scrollHeight - element.offsetHeight
    //     var precentage = Math.floor(Math.floor(element.scrollTop) / height * 100)

    //     if(precentage > 80){ setPrecentage(80); return} 

    //     setPrecentage(precentage)
    //   };
    //   <div style={{ height: '100%', width: '100%', position: 'relative'}}>
    //   <ScrollBar precentage={precentage}/>
    //   </div>