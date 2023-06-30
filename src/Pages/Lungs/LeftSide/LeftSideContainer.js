import styled from "styled-components"
import BackButton from "./BackButton"
import TextArea from "./TextArea"
import Listen from "./Listen"
import {useEffect, useRef, useState} from "react";

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

    const Tuberculosis = useRef(new Audio('https://cdn.whyp.it/69d75346-aa8e-4652-8f03-83bfdddcfaaa.mp3'));
    const Cancer = useRef(new Audio('https://cdn.whyp.it/d60a197a-7c42-4665-b17b-40809f049fdf.mp3'));
    const LungCollapse = useRef(new Audio('https://cdn.whyp.it/5d009d92-ae74-4d42-ade6-f80338bfd66b.mp3')); 
    const Asthma = useRef(new Audio('https://cdn.whyp.it/295e8b25-2f4b-4bcc-9f04-e21c5dd159de.mp3')); 
    
    const [progress, setProgress] = useState(0)
    
    useEffect(() => {
        if(playing){
            const interval = setInterval(() => {
                if(animation === "Tuberculosis") {
                    setProgress(Tuberculosis.current.currentTime / Tuberculosis.current.duration * 100)
                }
                else if(animation === "Cancer") {
                    setProgress(Cancer.current.currentTime / Cancer.current.duration * 100)
                }
                else if(animation === "Lung collapse") {
                    setProgress(LungCollapse.current.currentTime / LungCollapse.current.duration * 100)
                }
                else if(animation === "Asthma") {
                    console.log("Lung collapse")
                    setProgress(Asthma.current.currentTime / Asthma.current.duration * 100)
                }
                
            }, 100);
        
        return () => clearInterval(interval);
        }
        console.log(Tuberculosis.current.currentTime)
      
    }, [playing, animation]);

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