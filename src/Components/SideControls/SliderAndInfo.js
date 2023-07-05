import styled from "styled-components"
import Slider from "./Slider"
import { useState } from "react"

const Container = styled.div`
    width: 95%;
    height: 22%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    opacity: ${p => p.opacity ? '1' : '0'};
    transition: 1s opacity;

    @media only screen and (max-width: 1300px) {
        height: 25%;
    }
`

const FirstContainer = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
`

const Text = styled.p`
    font-family: 'Libre Franklin';
    font-weight: 400;
    font-size: 26px;
    width: 40%;
    margin: 0;

    @media only screen and (max-width: 1300px) {
        font-size: 16px;
    }
`

const Number = styled.p`
    width: 40%;
    font-weight: 400;
    font-family: 'Work Sans';
    font-weight: 300;
    font-size: 80px;
    text-align: right;
    margin-top: -10px;

    @media only screen and (max-width: 1300px) {
        font-size: 400%;
    }
    
`

const SliderAndInfo = (props) => {

    const {totalValue, setTotalValue, details, opacity} = props
    
    const [value, setValue] = useState(details.default);

    return <Container opacity={opacity}>
        <FirstContainer>
            <Text>{details.title}</Text>
            <Number>{value}</Number>
        </FirstContainer>
        <Slider details={details} totalValue={totalValue} setTotalValue={setTotalValue} value={value} setValue={setValue} />
    </Container>
}

export default SliderAndInfo