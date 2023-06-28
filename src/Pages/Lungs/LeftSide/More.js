import styled from "styled-components"

const Button = styled.button`
    width: 150px;
    height: 50px;
    color: white;
    border: 1px solid white;
    background: none;
    outline: none;
    position: absolute;
    bottom: 10%;
    left: 35%;
    border-radius: 33px;
    cursor: pointer;
    line-height: 150%;
    font-size: 30px;
`

const More = ({setAfterEverything,setToggle}) => {

    return <Button onClick={() => {setAfterEverything(true); setToggle(false)}}>More</Button>
}

export default More;