import styled from "styled-components";
import IconSvg from "../../../Assets/soundicon.svg";
import Arrow from "../../../Assets/leftsidearrow.svg";
import { useState, useRef } from "react";
import { useEffect } from "react";
import { enableBodyScroll } from 'body-scroll-lock';


const Container = styled.div`
    margin-top: 10px;
    width: 7vw;
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
    position: absolute;
    top: 100px;
    left: 71px;
    width: 30px;
    height: 25px;
    /* border: 1px solid white; */
    /* border-radius: 50%; */
    cursor: pointer;
    box-shadow: ${p => p.isPlaying && "0 0 15px rgb(255,255,255,0.8)"};
    transition: .5s box-shadow;

    @media only screen and (max-width: 1601px) {
        top: 70px;
        left: 30px;
    }
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
const BackButton = (props) => {

    const {pause, animation, bodyRef, setAnimation} = props

    // <ProgressBar progress={progress} />
    // <Icon isPlaying={playing} onClick={playing ? pause : play} src={IconSvg} alt="Icon" />


    return <Icon isPlaying={null} onClick={() => {setAnimation(null); pause(); enableBodyScroll(bodyRef)} } src={Arrow} alt="arrow" />

}

export default BackButton