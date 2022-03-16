import styled from "styled-components";
import { Container } from "react-bootstrap";

const HeaderStyle = styled.div`
position: relative;
font-size: 3rem;
font-weight: 700;
color: white;
width: 100%;
padding: 30px;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
text-align: center;
`;

const Header = () => {
    return(
        <Container fluid>

        
        <HeaderStyle>
            Stantec COVID Protocol
        </HeaderStyle>
        </Container>
    )
};

export default Header;


