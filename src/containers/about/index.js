"use client";
import Image from "next/image";
import React, { useEffect } from "react";
import "./styles.css";
import HolyMission from "../../../public/holy-mission.png";
import DonBosco from "../../../public/don-bosco.png";
import IIITAgartala from "../../../public/iiit-agartala.png";
export default function AboutContainer() {
  /*Start of Javascript approach*/
  //     useEffect(() => {
  //     let element = document.querySelector(".class-name");

  //   var aText = new Array(
  //     "I am a Full-Stack Developer, who loves to build web applications and solve problems. I am a quick learner and always eager to learn new technologies. I am a team player and always ready to help my team members. I am a self-motivated person and always ready to take challenges. I am a good listener and always open to feedback."
  //   );
  //   var iSpeed = 100; // time delay of print out
  //   var iIndex = 0; // start printing array at this position
  //   var iArrLength = aText[0].length; // the length of the text array
  //   var iScrollAt = 20; // start scrolling up at this many lines

  //   var iTextPos = 0; // initialize text position
  //   var sContents = ""; // initialize contents variable
  //   var iRow; // initialize current row

  //   function typewriter() {
  //     sContents = " ";
  //     iRow = Math.max(0, iIndex - iScrollAt);
  //     var destination = document.getElementById("intro-text");

  //     while (iRow < iIndex) {
  //       sContents += aText[iRow++] + "<br />";
  //     }
  //     destination.innerHTML =
  //       sContents + aText[iIndex].substring(0, iTextPos) + "_";
  //     if (iTextPos++ == iArrLength) {
  //       iTextPos = 0;
  //       iIndex++;
  //       if (iIndex != aText.length) {
  //         iArrLength = aText[iIndex].length;
  //         setTimeout("typewriter()", 500);
  //       }
  //     } else {
  //       setTimeout("typewriter()", iSpeed);
  //     }
  //   }
  //   typewriter();
  // });

  /*End of Javascript approach*/
  return (
    <div>
      <div className="intro-container">
        <p className="intro-texts" id="intro-text">{/* Change intro-texts to intro-text in classname for current status of typewriter effect*/}
          {" "}
          I am a Full-Stack Developer, who loves to build web applications and
          solve problems. I am currently in my final year of BTech from IIIT Agartala. I am a quick learner and always eager to learn new
          technologies. I am a team player and always ready to help my team
          members. I am a self-motivated person and always ready to take
          challenges. I am a good listener and always open to feedback.
        </p>
      </div>
      <h1>Education</h1>
      <div className="education-container">
        <div className="education-image-container">
          <a href="https://www.iiitagartala.ac.in/" target="_blank">
            <Image
              src={IIITAgartala}
              className="education-image"
              alt="IIIT Agartala"
            ></Image>
          </a>
        </div>
        <div className="education-text-container1">
          <h2>Bachelor of Technology</h2>
          <h3>Indian Institute of Information Technology, Agartala</h3>
          <p>BTech., Computer Science and Engineering, 2020-2024</p>
          <p>CGPA: 7.76</p>
        </div>
      </div>

      <div className="education-container">
        <div className="education-image-container">
          <a
            href="https://www.hmsspatna.org/"
            className="education-image"
            target="_blank"
          >
            <Image
              src={HolyMission}
              className="education-image"
              alt="HMSS Patna"
            ></Image>
          </a>
        </div>
        <div className="education-text-container2">
          <h2>Intermediate</h2>
          <h3>Holy Mission Senior Secondary School, Patna</h3>
          <p>Intermediate(XII), C.B.S.E., 2017-2019</p>
          <p>Percentage: 82.4%</p>
        </div>
      </div>

      <div className="education-container">
        <div className="education-image-container">
          <a href="https://www.donboscopatna.com/" target="_blank">
            <Image
              src={DonBosco}
              className="education-image"
              alt="DBA Patna"
            ></Image>
          </a>
        </div>
        <div className="education-text-container3">
          <h2>Matriculation</h2>
          <h3>Don Bosco Academy, Patna</h3>
          <p>Matriculation(X), I.C.S.E., 2017</p>
          <p>Percentage: 95.2%</p>
          {/* <p>
            I have completed my Matriculation from
            <a href="https://www.donboscopatna.com/" target="_blank">
              {" "}
              Don Bosco Academy
            </a>{" "}
            in 2018.
          </p> */}
        </div>
      </div>
    </div>
  );
}
