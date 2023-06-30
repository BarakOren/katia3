import styled from "styled-components"
import { Link } from "react-router-dom"
import lungsIcon from "../Assets/lungsIcon.svg"
import teethIcon from "../Assets/teethIcon.svg"
import mouthIcon from "../Assets/mouthIcon.svg"
import { useLocation } from "react-router-dom"

const Container = styled.div`
    width: 95%;
    height: 70px;
    position: fixed;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    display: ${p => p.display ? "none" : "flex"};
    justify-content: space-between;
    opacity: ${p => p.opacity ? 0 : 1};
    z-index: 10;
    transition: 3s opacity ease-in-out;
    z-index: 100;
`

const About = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    font-size: 20px;
    color: black;
    font-family: 'Libre Franklin';
    font-weight: 900;
    color: white;
    letter-spacing: 0.213em;
    margin: 0;
    cursor: pointer;
    width: 33%;
`

const IconsContainer = styled.div`
    width: 200px;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    opacity: ${p => p.display ? 0 : 1};
    transition: 3s opacity ease-in-out;

`

const Icon = styled.img`
    width: 30px;
    height: auto;
    cursor: pointer;
    opacity: ${p => p.opacity ? 1 : 0.5};
    transition: .5s opacity;
`

const LinkContainer = styled(Link)`
    width: 30px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

const UnderLine = styled.div`
    width: 30px;
    height: 1px;
    position: absolute;
    bottom: 13px;
    left: ${p => `${p.location}px`};
    background-color: white;
    transition: .5s left;
`

const EmptyDiv = styled.div`
    width: 33%;
    height: 100%;
`

const Header = (props) => {
    const {animation} = props
    const location = useLocation().pathname

    var setPosition = () => {
        if(location === "/lungs") return 0
        else if(location === "/teeth") return 85
        else if (location === "/tongue") return 170
    }
    return <Container display={location === "/"}>
        <About to="/">About</About>
        
        <IconsContainer >
        <LinkContainer to="/lungs">
        <Icon src={lungsIcon}  alt="Icon" opacity={location === "/lungs"} />        
        </LinkContainer>

        <LinkContainer to="/teeth">
        <Icon src={teethIcon} alt="Icon" opacity={location === "/teeth"} />
        </LinkContainer>

        <LinkContainer to="/tongue">
        <Icon src={mouthIcon} alt="Icon" opacity={location === "/tongue"} />
        </LinkContainer>

        <UnderLine location={setPosition()}/>
       
        </IconsContainer>
      
        <EmptyDiv />

    </Container>
}

export default Header;