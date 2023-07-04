import { forwardRef } from "react"
import styled from "styled-components"
import { Titles } from "../../../Texts"

const Container = styled.div`
    margin-top: 50px;
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Title = styled.p`
    width: 100%;
    font-family: 'Libre Franklin';
    font-weight: 400;
    font-size: 60px;
    margin: 0;
    text-align: left;
    white-space: nowrap;
`

const Text = styled.p`
    width: 99%;
    height: 100%;
    font-family: 'Amiri', serif;
    font-style: italic;
    font-weight: 400;
    font-size: 20px;
    line-height: 150%;
    overflow-y: scroll;
    margin: 0;
    direction:rtl; 
    margin-top: 20px;
    text-align: left;
    padding-left: 16px;

    
&::-webkit-scrollbar{
  width: 3px;
  background: rgb(255,255,255,0.5)
}

&::-webkit-scrollbar-thumb{
  background: rgb(255,255,255,1);
}

`

const TextArea = forwardRef((props, ref) => {
    const {animation, animationText, handleScroll} = props
    return <Container>
    <Title>{animationText.title}</Title>
    <Text ref={ref}
    onScroll={handleScroll}
    >{animationText.text}
    </Text>
    </Container> 
    
})

export default TextArea

    
