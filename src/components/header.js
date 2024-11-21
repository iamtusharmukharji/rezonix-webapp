import React from "react";
import './carousal.css';
import styled from 'styled-components';
// import { FaCogs, FaMobileAlt, FaWifi, FaQuoteLeft } from 'react-icons/fa';
import Rezonix from "./Rezonix.png"

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: white;
`;

const Tagline = styled.span`
  font-size: 0.9em;
  font-weight: normal;
  font-family: 'Arial'
`;

const HeadLine = styled.span`
font-size: 1.5em;
font-family: 'Roboto', sans-serif; /* Apply the font here */
font-weight: bold;
`;
function Header() {
  return (
    <container>
    <header className="header">
        <div className="logo">
          <img src={Rezonix} alt="Rezonix Logo" height={55} width={55} />
          <TextContainer>
              <HeadLine>Rezonix</HeadLine>
              <Tagline>Leap To Future</Tagline>
            </TextContainer>      
        </div>
        <div className="rezonix"><a href="/downloads/rezocontrol-app" >Get RezoControl App</a></div>
    </header>
    </container>
  );
}




// const Header = styled.header`
//   background-color: #111;
//   color: #fff;
//   padding: 20px;
//   text-align: center;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
// `;

// const Logo = styled.div`
//   display: flex;
//   align-items: center;

//   img {
//     margin-right: 15px;
//     border-radius: 50%; /* Make logo round */
//   }
// `;


export default Header;