import styled from "styled-components"

const Button = styled.button`
    align-self: flex-start;
    position: relative;
    margin-top: 30px;
    padding: 3px 0;
    color: white;
    border: 1.5px solid white;
    background: none;
    outline: none;
    border-radius: 33px;
    cursor: pointer;
    overflow: hidden;
    transition: .5s all;
    z-index: 1;
    box-shadow: ${p => p.isPlaying ? '0 0 30px rgba(255,255,255,0.5)' : ''};
    width: 90px;
    height: 32px;
    margin-top: 26px;
    font-size: 20px;

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

    @media only screen and (max-width: 1600px) {
        width: 80px;
        height: 30px;
        margin-top: 12px;
        font-size: 16px;
    }
`

const Listen = (props) => {

    const { playing, pause, progress, setProgress, animation, bodyRef, setAnimation, setToggle, setAfterEverything, play } = props

    return <Button progress={progress} isPlaying={playing} onClick={playing ? pause : play} alt="Liaten button">{playing ? "Stop" : "Listen"}</Button>
}

export default Listen;