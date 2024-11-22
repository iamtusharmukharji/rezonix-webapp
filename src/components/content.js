import React from "react";
import "./carousal.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircle } from "@fortawesome/free-solid-svg-icons";



// function ContentSection() {
//   return( 
//   <>
    
//     <section className="content-section">
      
//     <h3 style={{display:""}}><u>Best in class Innovation & Home Automation</u></h3><br/>

//       <div className="content-box">
//         <p>Wide range of solution</p>
//       </div>

//       <div className="content-box">
//         <p>Hassle Free Installation</p>
//       </div>

//       <div className="content-box">
//         <p>Over The Board & Retro fit</p>
//       </div>

//       <div className="content-box">
//         <p>Control & Monitor from anywhere</p>
//       </div>



//     </section>
//   </>);
  
// }

function ContentSection() {
const solutions = [
  {
    icon: "💡",
    title: "A Solution for Every Need",
    description:
      "No matter what you're looking for, our extensive selection of smart home and automation solutions has you covered. From convenience and comfort to security and energy efficiency, we provide products and services that suit your lifestyle and budget."  },
  {
    icon: "💡",
    title: "Hassle Free Installation",
    description:
      "Our hassle-free installation service means you don't have to worry about the technicalities. We handle everything from setup to testing, so you can sit back and enjoy your smart home without interruption."  },
  {
    icon: "👆",
    title: "Control & Monitor from anywhere",
    description:
      "Enjoy the freedom to manage and monitor your home in real-time. Our smart solutions let you adjust settings, track performance, and ensure everything is secure from the convenience of your smartphone.",
  },
  {
    icon: "⭐",
    title: "Over The Board & Retro fit",
    description:
      "Whether you’re building from scratch or enhancing your current setup, we offer flexible solutions. Our over-the-board installations and retrofitting services ensure your home is equipped with the best smart technologies, no matter the age of your home."  },
];

return (
  <div className="solutions-container">
    <h2>Best in Class <span>Home Automation & Innovation</span></h2>
    <div className="solutions-grid">
      {solutions.map((solution, index) => (
        <div key={index} className="solution-card">
          {/* <div className="icon">{solution.icon}</div> */}
          <h3 >{solution.title}</h3>
          <p>{solution.description}</p>
        </div>
      ))}
    </div>
  </div>
);
};


export default ContentSection;
