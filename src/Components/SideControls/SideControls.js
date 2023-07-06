import styled from "styled-components"
import SliderAndInfo from "./SliderAndInfo"
import Arrow from "../../Assets/arrow.svg";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

const Container = styled.div`
    display: ${p => p.display === '/' ? 'none' : 'flex'};
    z-index: 10;
    position: fixed;
    top: 50%;
    transform: translateY(-50%);
    right: ${p => p.right ? "0%" : "-26vh"};
    background: rgba(255, 255, 255, 0.2);
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 360px;
    height: 65vh;
    padding: 30px 0;
    border-radius: 40px 0px 0px 40px;
    padding-left: 10px;
    transition: ${p => p.opacity ? '3s all ease-in-out' : '2s all ease-in-out'};
    opacity: ${p => p.opacity ? 0 : 1};

    @media only screen and (max-width: 1601px) {
        width: 40vh;
        height: 70vh;
        top: 53%;
        right: ${p => p.right ? "0%" : "-30vh"};
    }
`

const Icon = styled.img`
    width: 20px;
    height: 20px;
    padding: 5px;
    border-radius: 50%;
    border: 1px solid white;
    position: absolute;
    top: 22px;
    left: 30px;
    cursor: pointer;
    transform: ${p => `rotate(${p.toggle}deg)`};
    transition: 2s all;

    
    @media only screen and (max-width: 1601px) {
        top: 20px;
        left: 30px;
        width: 10px;
        height: 10px;
    }
`


const SideControls = (props) => {

    const location = useLocation().pathname

    const {afterEverything, totalValue, setTotalValue, NumberOfCig, SmokingPeriod, Age, animation} = props

    useEffect(() => {
        if(animation !== null){
            setToggle(false)
        } else {
            setToggle(true)
        }
    }, [animation])

    const [toggle, setToggle] = useState(true);

    return <Container opacity={afterEverything || animation} display={location} right={toggle}>
    
    <Icon src={Arrow} alt="arrow" onClick={() => setToggle(!toggle)} toggle={toggle ? 0 : 180} />

    <SliderAndInfo 
    opacity={toggle}
    totalValue={totalValue} setTotalValue={setTotalValue} 
    details={NumberOfCig}
    />

    <SliderAndInfo details={SmokingPeriod}
    opacity={toggle}
    totalValue={totalValue} setTotalValue={setTotalValue} 
    />

    <SliderAndInfo 
    opacity={toggle}
    details={Age}
    totalValue={totalValue} setTotalValue={setTotalValue} 
    />
    </Container>
}

export default SideControls