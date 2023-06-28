import styled from "styled-components"
import Icons from "./Icons"
import TextArea from "./TextArea"
import More from "./More"
import {useEffect, useRef, useState} from "react";

const Container = styled.div`
    width: 40vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: ${p => p.left ? '0' : '-50vw'};
    transition: 2s left;
    transition-delay: ${p => p.left ? '2s' : 0};

`

const Relative = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
    align-items: flex-start;
`

const Middle = styled.div`
    margin-top: 100px;
    width: 100%;
    height: 50%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
`


const ScrollLine = styled.div`
    width: 2px;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 30%;
    background-color: rgba(255,255,255,0.5);
`

const ScrollBar = styled.div`
    top: ${p => `${p.precentage}%`};
    left: 50%;
    transform: translateX(-50%);
    width: 5px;
    height: 20%;
    background: white;
    position: absolute;
    border-radius: 5px;
`


const LeftSideContainer = (props) => {

    const {bodyRef, setAnimation, leftSideToggle, setLeftSideToggle, setAfterEverything, animationText, animation, play, setPlay} = props
    
    useEffect(() => {
        if(animation !== null){
            setLeftSideToggle(true)
        } else {
            setLeftSideToggle(false)
        }
    }, [animation])

    return <Container left={leftSideToggle}>
        
    <Relative>
        <Middle>
        <Icons setAnimation={setAnimation} animation={animation} bodyRef={bodyRef} />
        <TextArea animationText={animationText} />
        <ScrollLine />
        </Middle>
        <More setToggle={setLeftSideToggle} setAfterEverything={setAfterEverything} play={play}/>
        </Relative>
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