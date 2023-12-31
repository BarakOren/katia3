import react, {useState, useRef, useEffect} from "react";
import styled, {createGlobalStyle} from "styled-components"
import { Route, Routes } from "react-router-dom"
import ErrorPage from "./Pages/ErrorPage"
import IntroPage from "./Pages/IntroPage/IntroPage"
import LungsPage from "./Pages/Lungs/LungsPage"
import Header from "./Header/Header"
import IconSvg from "./Assets/logo.svg";
import MainLungsPage from "./Pages/Lungs/MainLungsPage";
import SideControls from "./Components/SideControls/SideControls";
import {Texts} from "./Texts"
import { useLocation } from "react-router-dom";
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import MainMouthPage from "./Pages/Mouth/MainMouthPage"
import MainTonguePage from "./Pages/Tongue/MainTonguePage";
import backgroundmusicsound from "./Assets/background-music.mp3"


const GlobalStyle = createGlobalStyle
`
body{
  overflow-x: hidden;
  // background: black;
  background: linear-gradient(180deg, #02031B 51.36%, #242541 100%);
  color: white;
  font-family: 'Libre Franklin', sans-serif;
}

p h1 {
  margin: 0;
}

div {
  display: flex;
  align-items: center;
  justify-content: center;
}

::-webkit-scrollbar{
  width: 0;
}

::-webkit-scrollbar-thumb{
  background: rgb(39, 39, 39);
}

::-webkit-scrollbar-thumb:hover{
  background: rgb(68, 68, 68);
}

`

const AppConatiner = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
`

const IconDiv = styled.div`
    position: fixed;
    top: 28px;
    right: 30px;
    cursor: pointer;
    width: 50px;
    height: auto;
    z-index: 150;

    &:before {
      content: '';
      position: absolute;
      top: 50%;
      right: 50%;
      width: 120%;
      height: 1px;
      background-color: rgba(255,255,255,0.8);
      transform: translate(50%, 50%) rotate(45deg);
      transition: .5s opacity;
      opacity: ${p => p.muted ? 1 : 0};
    }

    @media only screen and (max-width: 1601px) {
          top: 20px;
        right: 30px;
        width: 30px;
    }

`

const Icon = styled.img`
    width: 100%;
    height: auto;
    position: relative;
`

const AnimationsDiv = styled.div`
  position: fixed;
  top: 10%;
  left: 10%;
  z-index: 30;
`

function App() {

  const BackgroundMusic = useRef(null);
  const [mutedbg, setMutesBg] = useState(true)
  const [firstPlay, setFirstPlay] = useState(false);

  // const toggleSound = () => {
  //   console.log(BackgroundMusic.current)
  //   if(mutedbg){
  //     BackgroundMusic.current.muted = true
  //     BackgroundMusic.current.defaultMuted = true
  //   } else if (!mutedbg){
  //     BackgroundMusic.current.muted = false
  //     BackgroundMusic.current.defaultMuted = false
  //     if(!firstPlay){
  //       BackgroundMusic.current.play()
  //       setFirstPlay(true);
  //     }
  //   }
  //   setMutesBg(!mutedbg);
  // }

  useEffect(() => {
    if(mutedbg){
      if(BackgroundMusic.current){
        BackgroundMusic.current.muted = true
        BackgroundMusic.current.defaultMuted = true
      }
    } else if (!mutedbg && BackgroundMusic.current){
      BackgroundMusic.current.muted = false
      BackgroundMusic.current.defaultMuted = false
      if(!firstPlay){
        console.log("should not run on load")
        BackgroundMusic.current.play()
        setFirstPlay(true);
      }
    }
    }, [mutedbg])

  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    if (!isLoaded) {
      BackgroundMusic.current = new Audio(backgroundmusicsound);
      console.log(BackgroundMusic.current)
      BackgroundMusic.current.loop=true;
      BackgroundMusic.current.muted=true;
      BackgroundMusic.current.defaultMuted = true
      // BackgroundMusic.current.play()
      setIsLoaded(true)
    }
  }, [isLoaded]);



      const NumberOfCig = {
        constName: "NumberOfCig",
        title: "Number of cigarettes per day",
        default: 1,
        min: 1,
        max: 50,
    }

    const SmokingPeriod = {
        constName: "SmokingPeriod",
        title: "Smoking period",
        default: 1,
        min: 1,
        max: 50,
    }

    const Age = {
        constName: "Age",
        title: "Age",
        default: 20,
        min: 1,
        max: 90,
    }

    const [totalValue, setTotalValue] = useState({
        NumberOfCig: NumberOfCig.min,
        SmokingPeriod: SmokingPeriod.min,
        Age: 20
    });

    const [animation, setAnimation] = useState(null);
    const [animationText, setAnimationText] = useState("")
    const [afterEverything, setAfterEverything] = useState(false)
    const [leftSideToggle, setLeftSideToggle] = useState(false)

    const location = useLocation().pathname

    useEffect(() => {
      clearAllBodyScrollLocks(bodyRef)
      setAnimation(null)
      setLeftSideToggle(false)
      setAfterEverything(false)
      setAnimationText("")
      window.scrollTo({ top: 0, left: 0})
    }, [location])

    const ChangeAnimation = (name) => {
      if(animation === null){
        StatisticsPageRef.current.scrollIntoView({ behavior: 'smooth' });
        disableBodyScroll(bodyRef)
        setAnimation(name)
        if(name === "Cancer" && location === "/lungs"){
            setAnimationText({title: "Cancer", text: Texts.LungsCancer}); return
        }
        else if(name === "Teeth Cancer"){
          setAnimationText({title: "Cancer", text: Texts.mouthCancer}); return
        }
        else if(name === "Lung collapse"){
          setAnimationText({title: "Lung Collapse", text: Texts.LungCollapse}); return
        }
        else if(name === "Yellow teeth"){
          setAnimationText({title: "Yellow teeth", text: Texts.YellowTeeth}); return
        }
        else if(name === "Gum diseases"){
          setAnimationText({title: "Gum diseases", text: Texts.GumDiseases}); return
        }
        else if(name === "Cancer" && location === "/teeth"){
          setAnimationText({title: "Cancer", text: Texts.mouthCancer}); return
        }
        else if(name === "Bad smell"){
          setAnimationText({title: "Bad smell", text: Texts.BadSmell}); return
        }
        else if(name === "Loss of taste"){
          setAnimationText({title: "Loss of taste", text: Texts.LossOfTaste}); return
        }
        else if(name === "Loss of taste"){
          setAnimationText({title: "Loss of taste", text: Texts.LossOfTaste}); return
        }
        
        setAnimationText({title: name, text: Texts[name]})
      } else {
        enableBodyScroll(bodyRef)
        setAnimation(null)
      }
    }

    const bodyRef = useRef(null)
    const StatisticsPageRef = useRef(null)

    const playAfterEverying = () => {
      setAfterEverything(!afterEverything)
        if(!afterEverything){disableBodyScroll(bodyRef); return}
        else if(afterEverything){enableBodyScroll(bodyRef); return}  
    }

  return (
    <AppConatiner ref={bodyRef}>
    <GlobalStyle />

    <IconDiv muted={mutedbg} onClick={() => setMutesBg(!mutedbg)} >
    <Icon src={IconSvg} alt="Icon" />
    </IconDiv>

    <AnimationsDiv>
    </AnimationsDiv>

    <Header bodyRef={bodyRef} animation={animation} />
    <SideControls totalValue={totalValue} setTotalValue={setTotalValue} 
    Age={Age} SmokingPeriod={SmokingPeriod} NumberOfCig={NumberOfCig}
    animation={animation} afterEverything={afterEverything}
    />
    <Routes>
    <Route path="/" element={<IntroPage />} />
    <Route path="/lungs" element={<MainLungsPage leftSideToggle={leftSideToggle} setLeftSideToggle={setLeftSideToggle} bodyRef={bodyRef} afterEverything={afterEverything} setAfterEverything={setAfterEverything} StatisticsPageRef={StatisticsPageRef} ChangeAnimation={ChangeAnimation} animationText={animationText} setAnimationText={setAnimationText} animation={animation} setAnimation={setAnimation} totalValue={totalValue} setTotalValue={setTotalValue} Age={Age} SmokingPeriod={SmokingPeriod} NumberOfCig={NumberOfCig} />} />
    <Route path="/teeth" element={<MainMouthPage leftSideToggle={leftSideToggle} setLeftSideToggle={setLeftSideToggle} bodyRef={bodyRef} afterEverything={afterEverything} setAfterEverything={setAfterEverything} StatisticsPageRef={StatisticsPageRef} ChangeAnimation={ChangeAnimation} animationText={animationText} setAnimationText={setAnimationText} animation={animation} setAnimation={setAnimation} totalValue={totalValue} setTotalValue={setTotalValue} Age={Age} SmokingPeriod={SmokingPeriod} NumberOfCig={NumberOfCig} />} />
    <Route path="/tongue" element={<MainTonguePage leftSideToggle={leftSideToggle} setLeftSideToggle={setLeftSideToggle} bodyRef={bodyRef} afterEverything={afterEverything} setAfterEverything={setAfterEverything} StatisticsPageRef={StatisticsPageRef} ChangeAnimation={ChangeAnimation} animationText={animationText} setAnimationText={setAnimationText} animation={animation} setAnimation={setAnimation} totalValue={totalValue} setTotalValue={setTotalValue} Age={Age} SmokingPeriod={SmokingPeriod} NumberOfCig={NumberOfCig} />} />

    <Route path="*" element={<ErrorPage />} />
    </Routes>
    
    </AppConatiner>
  );
}

export default App;

// <Route path="/" element={<IntroPage />} />
// <Route path="/model" element={<ModelDisplayPage />} />

    // <PlayAnimation onClick={() => ChangeAnimation("Tuberculosis")}>{animation === null ? "Off" : "Tuberculosis"}</PlayAnimation>
    // <PlayAnimation onClick={() => ChangeAnimation("Cancer")}>{animation === null ? "Off" : "Cancer"}</PlayAnimation>
    // <PlayAnimation onClick={() => ChangeAnimation("Asthma")}>{animation === null ? "Off" : "Asthma"}</PlayAnimation>
    // <PlayAnimation onClick={() => ChangeAnimation("Lung collapse")}>{animation === null ? "Off" : "Lung collapse"}</PlayAnimation>
