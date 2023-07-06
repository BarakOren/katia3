import styled from "styled-components"
import {useState} from "react";
import { useLocation } from "react-router-dom";

const Container = styled.div`
    width: 90%;
    height: auto;
`

const Input = styled.input`
  /* removing default appearance */
  -webkit-appearance: none;
  appearance: none; 
  /* creating a custom design */
  width: 100%;
  height: 3px;
  cursor: pointer;
  outline: none;
  /*  slider progress trick  */
  border-radius: 16px;

&::-webkit-slider-runnable-track {
  height: 100%;
  border-radius: 1px;
  background-image: ${p => `linear-gradient(${p.color}, ${p.color})`};
   /* linear-gradient(#D37419, #D37419); */
  background-size: ${p => `${p.progress}% 100%`};
  background-repeat: no-repeat;
  outline: none;
}

&::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none; 
  height: 18px;
  width: 18px;
  background-color: #fff;
  border-radius: 50%;
  margin-top: -6px;
  border: none;
  transition: .2s ease-in-out;
  outline: none;
}

@media only screen and (max-width: 1601px) {
    height: 2px;
  }

  &::-webkit-slider-thumb {
    height: 14px;
    width: 14px;
  }

`

const Slider = (props) => {

    const location = useLocation().pathname

    const setColor = () => {
      if(location === "/lungs"){
          return '#D37419'
      }
      else if(location === "/teeth"){
        return '#FF499B'
      }
      else if(location === "/tongue"){
        return '#43D8ED'
      }
    }

    const {details, value, setValue, setTotalValue, totalValue} = props

    const progress = (value / details.max) * 100;

    const handleChange = (e) => {
        e.preventDefault();
        setValue(e.target.value);
        setTotalValue(prevState => ({
          ...prevState,
          [details.constName]: value
      }));
      };

    return <Container>
    <Input
    progress={progress}
    type="range"
    min={details.min}
    max={details.max}
    onChange={handleChange}
    value={value}
    color={setColor()}
    />

    </Container>
}

export default Slider;