import { forwardRef } from "react"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 60%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;

    @media only screen and (max-width: 1600px) {
      margin-top: 50px;
    }
`

const Title = styled.p`
    width: 100%;
    font-family: 'Libre Franklin';
    font-weight: 400;
    font-size: 100px;
    margin: 0 22px 0 0px;
    text-align: left;
    white-space: nowrap;


    @media only screen and (max-width: 1600px) {
      font-size: 60px;
    }
`

const Text = styled.p`
    width: 99%;
    height: 100%;
    font-family: 'Amiri', serif;
    font-style: italic;
    font-weight: 400;
    font-size: 30px;
    line-height: 150%;
    overflow-y: scroll;
    margin: 0;
    direction:rtl; 
    margin-top: 20px;
    text-align: left;
    padding-left: 16px;

    @media only screen and (max-width: 1600px) {
      margin-top: 20px;
      padding-left: 16px;
      font-size: 20px;
      height: 100%;
    }
    
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

    
