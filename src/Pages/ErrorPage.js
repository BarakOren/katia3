import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    flex-direction: column;
`

const Message = styled.h1`
  margin-top: 50px;
`

const BackHome = styled(Link)`
margin-top: 20px;
border-radius: 30px;
background: none;
outline: none;
border: 1px solid white;
color: white;
font-weight: 700;
cursor: pointer;
text-align: center;
text-decoration: none;
font-family: 'Libre Franklin', sans-serif;
font-weight: 400;
display: flex;
justify-content: center;
align-items: center;
padding: 10px 20px;
font-size: 14px;
`

const ErrorPage = () => {
    return <Container>
    <Message>Sorry, No such page..</Message>
    <BackHome to="/">Back Home</BackHome>
    </Container>
}

export default ErrorPage