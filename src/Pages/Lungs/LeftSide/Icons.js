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

    const {pause, animation, bodyRef, setAnimation} = props

    // <ProgressBar progress={progress} />
    // <Icon isPlaying={playing} onClick={playing ? pause : play} src={IconSvg} alt="Icon" />


    return <Container>
        <Icon isPlaying={null} onClick={() => {setAnimation(null); pause(); enableBodyScroll(bodyRef)} } src={Arrow} alt="arrow" />
    </Container>
}

export default Icons