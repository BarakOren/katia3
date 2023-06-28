import styled from "styled-components"
import ModelsCircle from "./Spheres/Sphere1"
import LeftSideContainer from "../LeftSide/LeftSideContainer"
import { useEffect, useState } from "react"
import { animated, useSpring } from '@react-spring/web'
import SphereDiv from "./Spheres/SphereDiv"
import AfterEverything from "../../../afterEverything/AfterEverything"
import { AnimationUtils } from "three"


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
    line-height: 200%;
    position: absolute;
    margin: 0;
    top: 50%;
    transform: translateY(-50%);
    left: 15vw;
    opacity: ${p => p.opacity ? 0 : 1};
    transition: .5s opacity;
    transition-delay: 2s;
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

    const focusPosition = {top: '50%', left: '70%'}

    const SphereOneOffScreen = {top: '-20%', left: '35%'} //Tuberculosis
    const SphereTwoOffScreen = {top: '-20%', left: '70%'} //Cancer
    const SphereThreeOffScreen = {top: '120%', left: '30%'} //Asthma
    const SphereFourOffScreen = {top: '120%', left: '90%'} //Lung collapse

    useEffect(() => {
        if(animation === null) {
            setSphereOnePosition({top: '20%', left: '40%'})
            setSphereTwoPosition({top: '30%', left: '57%'})
            setSphereThreePosition({top: '65%', left: '40%'})
            setSphereFourPosition({top: '68%', left: '60%'})
        }
        else if (animation === "Stomatitis"){
            setSphereOnePosition(focusPosition)
            setSphereTwoPosition(SphereTwoOffScreen)
            setSphereThreePosition(SphereThreeOffScreen)
            setSphereFourPosition(SphereFourOffScreen)
        }
        else if (animation === "Bad smell"){
            setSphereOnePosition(SphereOneOffScreen)
            setSphereTwoPosition(focusPosition)
            setSphereThreePosition(SphereThreeOffScreen)
            setSphereFourPosition(SphereFourOffScreen)
        }
        else if (animation === "Loss of taste"){
            setSphereOnePosition(SphereOneOffScreen)
            setSphereTwoPosition(SphereTwoOffScreen)
            setSphereThreePosition(focusPosition)
            setSphereFourPosition(SphereFourOffScreen)
        }
        else if (animation === "Plaque"){
            setSphereOnePosition(SphereOneOffScreen)
            setSphereTwoPosition(SphereTwoOffScreen)
            setSphereThreePosition(SphereThreeOffScreen)
            setSphereFourPosition(focusPosition)
        }
        
    }, [animation])

   return <Container ref={StatisticsPageRef}>


    <ModelContainer opacity={afterEverything}>
    <Title opacity={animation}>Your<br/>risk of<br/>these<br/>diseases</Title>

    <SphereDiv
    Divsizing={Divsizing / 5}
    name={"Stomatitis"}
    SphereAnimation={SphereAnimation} 
    totalValue={totalValue}
    position={SphereOnePosition}
    ChangeAnimation={ChangeAnimation}
    />

    <SphereDiv
    Divsizing={Divsizing}
    animation={animation}
    name={"Bad smell"}
    SphereAnimation={SphereAnimation} 
    totalValue={totalValue}
    position={SphereTwoPosition}
    ChangeAnimation={ChangeAnimation}
    />

    
    <SphereDiv
    Divsizing={Divsizing / 1.5}
    name={"Loss of taste"}
    SphereAnimation={SphereAnimation} 
    totalValue={totalValue}
    position={SphereThreePosition}
    ChangeAnimation={ChangeAnimation}
    />
    
    <SphereDiv
    Divsizing={Divsizing / 6}
    name={"Plaque"}
    SphereAnimation={SphereAnimation} 
    totalValue={totalValue}
    position={SphereFourPosition}
    ChangeAnimation={ChangeAnimation}
    />

    <Circle position={animation === null ? {top: "50%", left: "50%"} : {top: '50%', left: '70%'}} size={ animation === null ? `27vw` : '24vw'} opacity={0.6}/>
    <Circle position={animation === null ? {top: "50%", left: "50%"} : {top: '50%', left: '70%'}} size={animation === null ? `40vw` : '35vw'} opacity={0.3}/>
    
    </ModelContainer>

    <LeftSideContainer animation={animation} bodyRef={bodyRef} setAnimation={setAnimation} leftSideToggle={leftSideToggle} setLeftSideToggle={setLeftSideToggle} setAfterEverything={setAfterEverything} animationText={animationText} animation={animation} />

    <AfterEverything leftSideToggle={leftSideToggle} setLeftSideToggle={setLeftSideToggle} bodyRef={bodyRef} afterEverything={afterEverything} setAfterEverything={setAfterEverything} />

    </Container>
}

export default StatisticsPage