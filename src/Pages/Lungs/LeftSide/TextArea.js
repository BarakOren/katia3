import { forwardRef } from "react"
import styled from "styled-components"
import { Titles } from "../../../Texts"

const Container = styled.div`
    width: 65%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
`

const Title = styled.p`
    font-family: 'Libre Franklin';
    font-weight: 400;
    font-size: 60px;
    margin: 0;
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

    
&::-webkit-scrollbar{
  width: 3px;
  background: rgb(255,255,255,0.5)
}

&::-webkit-scrollbar-thumb{
  background: rgb(255,255,255,1);
}

`

const TextArea = forwardRef((props, ref) => {
    const {animationText, handleScroll} = props
    return <Container>
    <Title>{animationText.title}</Title>
    <Text ref={ref}
    onScroll={handleScroll}
    >{animationText.text}
    </Text>
    </Container> 
    
})

export default TextArea

    
