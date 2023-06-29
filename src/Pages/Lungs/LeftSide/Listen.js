import styled from "styled-components"
import { useEffect, useState, useRef } from "react"

const Button = styled.button`
    width: 150px;
    height: 50px;
    color: white;
    border: 1.5px solid white;
    background: none;
    outline: none;
    position: absolute;
    bottom: 10%;
    left: 35%;
    border-radius: 33px;
    cursor: pointer;
    line-height: 150%;
    font-size: 30px;
    overflow: hidden;
    transition: .5s all;
    z-index: 1;
    box-shadow: ${p => p.isPlaying ? '0 0 30px rgba(255,255,255,0.5)' : ''};

    &:before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: ${p => `${p.progress}%`};
        height: 100%;
        background: linear-gradient(90deg, rgba(255,255,255,0.7) 0%, rgba(213,213,213,0.1) 100%);
        z-index: -1;
    }
`

const Listen = (props) => {

    const {playing, pause, progress, setProgress, animation, bodyRef, setAnimation, setToggle, setAfterEverything, play } = props
    
    // onClick={() => {setAfterEverything(true); setToggle(false)}

    return <Button progress={progress} isPlaying={playing} onClick={playing ? pause : play} alt="Liaten button">Listen</Button>
}

export default Listen;