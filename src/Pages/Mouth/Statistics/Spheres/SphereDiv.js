import styled from "styled-components"
import { animated, easings, useSpring } from '@react-spring/web'
// import sphere from "../../../../Assets/PinkSphere.gif"
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

const Relative = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  cursor: pointer;
`

const Circle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${p => `${p.size}`};
    height: ${p => `${p.size}`}; 
    border-radius: 50%;
    background: none;
    border: ${p => `solid 1px rgba(255, 255, 255, ${p.opacity})`};
    z-index: 1;
`

const DetailsDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: none;
    z-index: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Name = styled.p`
  font-size: 220%;
  color: white;
  font-family: Libre Franklin;
  font-weight: 700;
  margin: 0;

  
  @media only screen and (max-width: 1600px) {
    font-size: 150%;
  }
`

const Precentage = styled.div`
  font-family: Libre Franklin;
  font-weight: 100;
  text-align: center;
  position: relative;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 140px;

  p {
    margin: 0;
    transition: 1s all;
  }

  .symbol {
    position: absolute;
    right: -40px;
    top: 15px;
  }

  @media only screen and (max-width: 1600px) {
    .symbol {
      right: 0;
    }

  }
 
`

const Sphere = styled.img`
  width: 110%;
  height: auto;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

// <ModelsCircle SphereAnimation={SphereAnimation} />


const SphereDiv = (props) => {

    const {ChangeAnimation, animation, SphereAnimation, Divsizing, size, totalValue, position, name} = props;

    const width = window.innerWidth
    const addPxToDiv = width < 1601 ? 200 : 260
    
    const location = useLocation().pathname

    const SphereType = () => { 
    if(location === "/lungs") return 'https://i.ibb.co/xYtqhwQ/1.gif'
    else if (location === "/teeth") return "https://i.ibb.co/GHTQ94D/2.gif"
    else if (location === "/tongue") return "https://i.ibb.co/TkGdRH3/3.gif"
    }

    useEffect(() => {
      SphereType()
    },[location])

    const springs = useSpring({ 
      top: position.top,
      left: position.left,
      width: `${Divsizing * 1 + addPxToDiv}px`,
      height: `${Divsizing * 1 + addPxToDiv}px`,

      config: {
        duration: 3000,
        easing: easings.easeOutSine,
      },
      });

      // <Circle size={`140px`} opacity={1}/>
      // <Circle size={Divsizing > 50 ? '75%' : '85%'} opacity={0.3}/>

    return <animated.div
    onClick={() => ChangeAnimation(name)}
    style={{
      // transition: '1s all',
      background: 'none',
      borderRadius: '50%',
      zIndex: 10,
      position: 'absolute',
      transform: 'translate(-50%, -50%)',
      ...springs
    }}>

    <Relative>
    
    <DetailsDiv>
    <Name>{name}</Name>
    
    <Precentage>
    <animated.p
    style={{fontSize: width < 1601 ? '70px' : '120px'}}
    // style={{fontSize: `${26 + Divsizing}px`}}
    >{Math.floor(Divsizing) > 99 ? 100 : Math.floor(Divsizing)}</animated.p>
    
    <animated.p 
    // style={{fontSize: `${Divsizing < 50 ? Divsizing : Divsizing - 30}px`}}
    style={{fontSize: width < 1601 ? '16px' : '30px', fontWeight: 700}}
    className="symbol">%</animated.p>
    
    </Precentage>
    <Name>risk</Name>
    </DetailsDiv>
    
    <Sphere src={SphereType()} alt="Sphere" />
    
    </Relative>

    </animated.div>
}

export default SphereDiv