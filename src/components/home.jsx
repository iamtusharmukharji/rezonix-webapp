import React from 'react';
import styled from 'styled-components';
import { FaCogs, FaMobileAlt, FaWifi, FaQuoteLeft } from 'react-icons/fa';
import rezonix from './Rezonix.png'

const Container = styled.div`
  min-height: 100vh; /* Ensures the container takes up at least the full viewport height */
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Space out header, body, and footer */
`;

const Header = styled.header`
  background-color: #111;
  color: #fff;
  padding: 20px;
  text-align: center;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
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
    margin-right: 15px;
    border-radius: 50%; /* Make logo round */
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
  font-family: 'Abhaya Libre SemiBold', sans-serif; /* Apply the font here */
  font-weight: bold;
`;

const Tagline = styled.span`
  font-size: 0.9em;
  font-weight: normal;
  font-family: 'Abhaya Libre SemiBold'
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
  background: linear-gradient(45deg, #528BB6, #2575fc);
  color: #fff;
  padding: 100px 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.2;
    background: url(${rezonix}) no-repeat center center/cover; /* Optional background image */
  }
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
  background: white;
  color: #528BB6;
  border-radius: 5px;
  text-decoration: none;
  font-weight: bold;
`;

// const About = styled(Section)`
//   background-color: #f4f4f4;
// `;

const Services = styled(Section)`
  background-color: #fff;
`;

const ServiceCard = styled.div`
  display: inline-block;
  width: 300px;
  padding: 20px;
  margin: 15px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s;

  &:hover {
    transform: translateY(-5px); /* Slight lift effect on hover */
  }

  @media (max-width: 768px) {
    width: 90%;
  }
`;
const ServiceIcon = styled.div`
  font-size: 3em;
  margin-bottom: 20px;
  color: #528BB6;
`;

const Testimonials = styled(Section)`
  background-color: #f4f4f4;
  font-family: 'Abhaya Libre SemiBold'
`;

const TestimonialCard = styled.div`
  display: inline-block;
  width: 300px;
  padding: 20px;
  margin: 10px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  text-align: left;
  font-family: 'Abhaya Libre SemiBold'

  @media (max-width: 768px) {
    width: 90%;
  }
`;

const Footer = styled.footer`
  background-color: #528BB6;
  color: white;
  text-align: left;  
  padding: 20px 0;
  font-family: 'Abhaya Libre SemiBold'
`;

const ContactInfo = styled.div`
  font-size: 15px;
  padding-left: 20px;
  font-family: 'Abhaya Libre SemiBold'
`;

function Home() {
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
            <a href="#">Rezonix app</a>
          </NavLinks>
        </Nav>
      </Header>

      <Hero>
        <Title>Welcome to Our Tech & IoT Company</Title>
        <Subtitle>Innovating the Future, One Device at a Time</Subtitle>
        <Button href="#contact">Get in Touch</Button>
      </Hero>

      <Services id="services">
        <Title>Our Services</Title>
        <ServiceCard>
          <ServiceIcon><FaCogs /></ServiceIcon>
          <Subtitle>Smart Automation</Subtitle>
          <p>Tailored IoT services to meet your unique business needs.</p>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon><FaMobileAlt /></ServiceIcon>
          <Subtitle>Cloud Services</Subtitle>
          <p>Creating seamless mobile experiences for IoT devices.</p>
        </ServiceCard>
        <ServiceCard>
          <ServiceIcon><FaWifi /></ServiceIcon>
          <Subtitle>Connectivity Services</Subtitle>
          <p>Ensuring robust and secure connections for all your IoT devices.</p>
        </ServiceCard>
      </Services>

      <Testimonials id="testimonials">
        <Title>Testimonials</Title>
        <TestimonialCard>
          <FaQuoteLeft size={24} />
          <p>"The best IoT solutions provider we've worked with. Their expertise and support are unmatched."</p>
          <p><strong>- John Doe, CEO of Tech Innovators</strong></p>
        </TestimonialCard>
        <TestimonialCard>
          <FaQuoteLeft size={24} />
          <p>"They helped us take our business to the next level with their innovative solutions."</p>
          <p><strong>- Jane Smith, CTO of Smart Systems</strong></p>
        </TestimonialCard>
      </Testimonials>

      <Footer id="contact">
        
        <ContactInfo>
          <p style={{ fontSize: 22 }}>Contact Us</p>
          <p>Plot no. 9, 4 Bay, Institutional Area, Sector 32, Gurugram, Haryana 122003</p>
          <p>Email: info@rezonix.com</p>
          <p>Phone: +(91)8853159576</p>
        </ContactInfo>
      </Footer>
    </Container>
  );
}

export default Home;
