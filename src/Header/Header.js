import styled from "styled-components"
import { Link } from "react-router-dom"
import lungsIcon from "../Assets/lungsIcon.svg"
import teethIcon from "../Assets/teethIcon.svg"
import mouthIcon from "../Assets/mouthIcon.svg"
import { useLocation } from "react-router-dom"

const Container = styled.div`
    width: 95%;
    height: 110px;
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

    @media only screen and (max-width: 1601px) {
        height: 70px;
    }
`

const About = styled(Link)`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-decoration: none;
    font-size: 24px;
    font-family: 'Libre Franklin';
    font-weight: 900;
    color: white;
    letter-spacing: 0.213em;
    margin: 0;
    cursor: pointer;
    width: 33%;

    @media only screen and (max-width: 1601px) {
        font-size: 16px;
    }
`

const IconsContainer = styled.div`
    width: 350px;
    height: 100%;
    display: flex;
    align-items: center;
    position: relative;
    justify-content: space-between;
    opacity: ${p => p.display ? 0 : 1};
    transition: 3s opacity ease-in-out;

    @media only screen and (max-width: 1601px) {
        width: 200px;
    }

`

const Icon = styled.img`
    width: ${p => p.size ? '40px' : '50px'};
    height: auto;
    cursor: pointer;
    opacity: ${p => p.opacity ? 1 : 0.5};
    transition: .5s opacity;

    @media only screen and (max-width: 1601px) {
        width:${p => p.size ? '22px' : '26px'};
    }
`

const LinkContainer = styled(Link)`
    /* width: 50px; */
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    @media only screen and (max-width: 1601px) {
        /* width: 30px; */
    }
`

const UnderLine = styled.div`
    width: 50px;
    height: 2px;
    bottom: 14px;
    position: absolute;
    left: ${p => `${p.location}px`};
    background-color: white;
    transition: .5s left;

    @media only screen and (max-width: 1601px) {
        width: 30px;
        bottom: 13px;
        height: 1px;
    }
`

const EmptyDiv = styled.div`
    width: 33%;
    height: 100%;
`

const Header = (props) => {
    const {animation} = props
    const location = useLocation().pathname

    var setPosition = () => {
        const width = window.innerWidth
        if(location === "/lungs" && width < 1601) return -2
        else if(location === "/teeth" && width < 1601) return 87
        else if (location === "/tongue" && width < 1601) return 174

        else if(location === "/lungs" && width >= 1601) return 0
        else if(location === "/teeth" && width >= 1601) return 155
        else if (location === "/tongue" && width >= 1601) return 303
    }

    return <Container display={location === "/"}>
        <About to="/">About</About>
        
        <IconsContainer >
        <LinkContainer to="/lungs">
        <Icon src={lungsIcon} alt="Icon" opacity={location === "/lungs"} />        
        </LinkContainer>

        <LinkContainer to="/teeth">
        <Icon src={teethIcon} alt="Icon" opacity={location === "/teeth"} />
        </LinkContainer>

        <LinkContainer to="/tongue">
        <Icon src={mouthIcon} size={true} alt="Icon" opacity={location === "/tongue"} />
        </LinkContainer>

        <UnderLine location={setPosition()}/>
       
        </IconsContainer>
      
        <EmptyDiv />

    </Container>
}

export default Header;