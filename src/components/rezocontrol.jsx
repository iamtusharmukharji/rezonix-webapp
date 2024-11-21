import React from 'react';
import styled from 'styled-components';
import rezonix from './Rezonix.png'

const Container = styled.div`
  min-height: 100vh; /* Ensures the container takes up at least the full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space out header, body, and footer */
`;

const Header = styled.header`
  background-color: black;
  color: white;
  padding: 20px;
  text-align: center;
`;

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

// const Logo = styled.h1`
//   font-size: 2em;
//   margin: 0;
// `;
const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    margin-right: 10px;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
`;

const CompanyName = styled.span`
  font-size: 1.5em;
  font-family: 'Roboto', sans-serif; /* Apply the font here */
  font-weight: bold;
`;

const Tagline = styled.span`
  font-size: 0.9em;
  font-weight: normal;
`;

const NavLinks = styled.div`
  a {
    color: white;
    margin: 0 15px;
    text-decoration: none;
    font-weight: bold;
  }
`;

const Section = styled.section`
  padding: 50px 0;
  text-align: center;
`;

const Hero = styled(Section)`
  padding: 100px 0;
//   border:1px solid black;
  margin-bottom:20%;

`;

const Title = styled.h2`
  font-size: 2.5em;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
`;

const Button = styled.a`
  padding: 10px 20px;
  background: linear-gradient(45deg, #6a11cb, #2575fc);
  color: white;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
`;


function Rezocontrol() {
    const apkUrl = "https://drive.google.com/uc?export=download&id=1_TC7KdH2kspTp3bZTuTh_uijo2eNzko7";

  return (
    <Container>
      <Header>
        <Nav>
        <Logo>
            <img src={rezonix} alt="Rezonix Logo" height={55} width={55} />
            <TextContainer>
              <CompanyName>Rezonix</CompanyName>
              <Tagline>Leap To Future</Tagline>
            </TextContainer>
          </Logo>
          <NavLinks>
            {/* <a href="#services">Services</a>
            <a href="#testimonials">Testimonials</a> */}
            <a href="#contact">Get in Touch</a>
          </NavLinks>
        </Nav>
      </Header>

      <Hero>
        <Title>Rezocontrol Mobile App</Title>
        <Subtitle>Innovating the Future, One Device at a Time</Subtitle>
        <Button href={apkUrl}>Download Now</Button>
      </Hero>

      
    </Container>
  );
}

export default Rezocontrol;
