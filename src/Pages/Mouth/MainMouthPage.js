import styled from "styled-components"
import StatisticsPage from "./Statistics/StatisticsPage"
import { useState } from "react"
import TeethPage from "./TeethPage"

const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
`

const MainMouthPage = (props) => {

    const {setAnimation, leftSideToggle, setLeftSideToggle, bodyRef, afterEverything, setAfterEverything, StatisticsPageRef, ChangeAnimation, animationText, setAnimationText, animation, totalValue, setTotalValue, Age, SmokingPeriod, NumberOfCig } = props
    return <Container>
    <TeethPage totalValue={totalValue} setTotalValue={setTotalValue} Age={Age} SmokingPeriod={SmokingPeriod} NumberOfCig={NumberOfCig}  />
    
    <StatisticsPage setAnimation={setAnimation} leftSideToggle={leftSideToggle} setLeftSideToggle={setLeftSideToggle} bodyRef={bodyRef} afterEverything={afterEverything} setAfterEverything={setAfterEverything} StatisticsPageRef={StatisticsPageRef} ChangeAnimation={ChangeAnimation} animationText={animationText} setAnimationText={setAnimationText} animation={animation} totalValue={totalValue} setTotalValue={setTotalValue} Age={Age} SmokingPeriod={SmokingPeriod} NumberOfCig={NumberOfCig} />

    </Container>
}

export default MainMouthPage

    
