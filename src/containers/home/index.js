import Image from "next/image";
import React from "react";
import "./styles.css";
import MyImage from "../../../public/no-background-self-image.png";
export default function HomeContainer() {
  return (
    <div className="home-container">
      <div className=" home-text">
        Hi! I&apos;m <font color="#ff9100">Adarsh Raj,</font> a Full-Stack Developer
        {/* Hi!
        <br /> I&apos;m <font color="#ff9100">Adarsh Raj,</font>
        <br /> a Full-Stack Developer */}
      </div>

      <div className="col-lg-5 home-image">
        <Image src={MyImage} className="my-image" alt="Adarsh Raj"></Image>
      </div>
      {/* </div> */}
    </div>
  );
}
