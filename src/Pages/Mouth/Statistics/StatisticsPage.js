import styled from "styled-components"
import LeftSideContainer from "../LeftSide/LeftSideContainer"
import { useEffect, useState } from "react"
import { animated, useSpring } from '@react-spring/web'
import SphereDiv from "./Spheres/SphereDiv"
import AfterEverything from "../../../afterEverything/AfterEverything"


const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;
`


const Circle = styled.div`
  position: absolute;
  top: ${p => p.position.top};
  left: ${p => p.position.left};
  transform: translate(-50%, -50%);
  width: ${p => `${p.size}`};
  height: ${p => `${p.size}`}; 
  border-radius: 50%;
  background: none;
  border: ${p => `solid 1px rgba(255, 255, 255, ${p.opacity})`};
  transition: 3s all ease-in-out;
`

const ModelContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    opacity: ${p => p.opacity ? 0 : 1};
    transition: 3s opacity ease-in-out;
    `


const Title = styled.p`
    width: 20vw;
    font-family: 'Libre Franklin';
    font-style: normal;
    font-weight: 400;
    font-size: 36px;
    line-height: 190%;
    position: absolute;
    margin: 0;
    top: 50%;
    transform: translateY(-50%);
    left: 13vw;
    letter-spacing: 12px;
    opacity: ${p => p.opacity ? 0 : 1};
    transition: .5s opacity;
    transition-delay: 2s;
`

const Span = styled.span`
    font-size: 40px;
    font-family: 'Amiri', serif;
    font-weight: 400;
    font-style: italic;
`

const Thoughts = styled.div`
    position: absolute;
    bottom: 50px;
    right: 50px;
    font-size: 3vw;
    font-weight: 400;
    padding-bottom: 5px;
    border-bottom: 1px solid white;
    cursor: pointer;
    opacity: ${p => p.opacity ? 1 : 0};
    transition: 3s all;
`


const Glow = styled.div`
    position: absolute;
    top: ${p => p.position.top};
    left: ${p => p.position.left};
    transform: translate(-50%, -50%);
    width: ${p => `${p.size}`};
    height: ${p => `${p.size}`}; 
    border-radius: 50%;
    filter: blur(100px);
    background-color: rgba(255, 255, 255, 0.6);
    transition: 3s all ease-in-out;
`

const StatisticsPage = (props) => {

    const {setAnimation, leftSideToggle, setLeftSideToggle, bodyRef, afterEverything, setAfterEverything, StatisticsPageRef, ChangeAnimation, animationText, setAnimationText, animation , totalValue, setTotalValue, Age, SmokingPeriod, NumberOfCig } = props

    const [SphereAnimation, setSphereAnimation] = useState(false)

    let IntAge = parseInt(totalValue.Age)
    let IntSmokingPeriod = parseInt(totalValue.SmokingPeriod)
    let IntNumberOfCig = parseInt(totalValue.NumberOfCig)
        
    const Divsizing = IntAge / 2 + IntSmokingPeriod / 2 + IntNumberOfCig

    const [SphereOnePosition, setSphereOnePosition] = useState({top: '20%', left: '40%'}) //Tuberculosis
    const [SphereTwoPosition, setSphereTwoPosition] = useState({top: '30%', left: '57%'}) //Cancer
    const [SphereThreePosition, setSphereThreePosition] = useState({top: '65%', left: '40%'}) //Asthma
    const [SphereFourPosition, setSphereFourPosition] = useState({top: '68%', left: '60%'}) //Lung collapse

 // old focus position
    // const focusPosition = {top: '50%', left: '70%'}

    // new focus position
    const focusPosition = {top: '50%', left: '50%'}

    const SphereOneOffScreen = {top: '-25%', left: '35%'} //Tuberculosis
    const SphereTwoOffScreen = {top: '-25%', left: '70%'} //Cancer
    const SphereThreeOffScreen = {top: '125%', left: '30%'} //Asthma
    const SphereFourOffScreen = {top: '125%', left: '90%'} //Lung collapse

    useEffect(() => {
        if(animation === null) {
            setSphereOnePosition({top: '20%', left: '40%'})
            setSphereTwoPosition({top: '30%', left: '57%'})
            setSphereThreePosition({top: '65%', left: '40%'})
            setSphereFourPosition({top: '68%', left: '60%'})
        }
        else if (animation === "Tartar"){
            setSphereOnePosition(focusPosition)
            setSphereTwoPosition(SphereTwoOffScreen)
            setSphereThreePosition(SphereThreeOffScreen)
            setSphereFourPosition(SphereFourOffScreen)
        }
        else if (animation === "Yellow teeth"){
            setSphereOnePosition(SphereOneOffScreen)
            setSphereTwoPosition(focusPosition)
            setSphereThreePosition(SphereThreeOffScreen)
            setSphereFourPosition(SphereFourOffScreen)
        }
        else if (animation === "Gum diseases"){
            setSphereOnePosition(SphereOneOffScreen)
            setSphereTwoPosition(SphereTwoOffScreen)
            setSphereThreePosition(focusPosition)
            setSphereFourPosition(SphereFourOffScreen)
        }
        else if (animation === "Cancer"){
            setSphereOnePosition(SphereOneOffScreen)
            setSphereTwoPosition(SphereTwoOffScreen)
            setSphereThreePosition(SphereThreeOffScreen)
            setSphereFourPosition(focusPosition)
        }
        
    }, [animation])

   return <Container ref={StatisticsPageRef}>


    <ModelContainer opacity={afterEverything}>
    <Title opacity={animation}>Your<br/>risk of<br/>these<br/><Span>diseases</Span></Title>
    <SphereDiv
    Divsizing={Divsizing / 4}
    name={"Tartar"}
    SphereAnimation={SphereAnimation} 
    totalValue={totalValue}
    position={SphereOnePosition}
    ChangeAnimation={ChangeAnimation}
    />

    <SphereDiv
    Divsizing={Divsizing / 1.5}
    animation={animation}
    name={"Yellow teeth"}
    SphereAnimation={SphereAnimation} 
    totalValue={totalValue}
    position={SphereTwoPosition}
    ChangeAnimation={ChangeAnimation}
    />

    
    <SphereDiv
    Divsizing={Divsizing / 4.3}
    name={"Gum diseases"}
    SphereAnimation={SphereAnimation} 
    totalValue={totalValue}
    position={SphereThreePosition}
    ChangeAnimation={ChangeAnimation}
    />
    
    <SphereDiv
    Divsizing={Divsizing / 4}
    name={"Cancer"}
    SphereAnimation={SphereAnimation} 
    totalValue={totalValue}
    position={SphereFourPosition}
    ChangeAnimation={ChangeAnimation}
    />

    <Circle position={animation === null ? {top: "50%", left: "50%"} : focusPosition} size={ animation === null ? `27vw` : '20vw'} opacity={0.6}/>
    <Circle position={animation === null ? {top: "50%", left: "50%"} : focusPosition} size={animation === null ? `31vw` : '24vw'} opacity={0.4}/>
    <Circle position={animation === null ? {top: "50%", left: "50%"} : focusPosition} size={animation === null ? `35vw` : '28vw'} opacity={0.3}/>
    <Circle position={animation === null ? {top: "50%", left: "50%"} : focusPosition} size={animation === null ? `39vw` : '32vw'} opacity={0.2}/>
    <Glow opacity={animation} position={animation === null ? {top: "50%", left: "50%"} : focusPosition} size={ animation === null ? `24vw` : '21vw'} />
    </ModelContainer>

    <LeftSideContainer bodyRef={bodyRef} setAnimation={setAnimation} leftSideToggle={leftSideToggle} setLeftSideToggle={setLeftSideToggle} setAfterEverything={setAfterEverything} animationText={animationText} animation={animation} />

    <AfterEverything leftSideToggle={leftSideToggle} setLeftSideToggle={setLeftSideToggle} bodyRef={bodyRef} afterEverything={afterEverything} setAfterEverything={setAfterEverything} />

    <Thoughts opacity={animation && !afterEverything} onClick={() => {setAfterEverything(true); setLeftSideToggle(false)}}>Thoughts</Thoughts>

    </Container>
}

export default StatisticsPage