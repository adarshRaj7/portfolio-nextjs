"use client";
import {
  Collapse,
  Container,
  Nav,
  NavItem,
  NavLink,
  NavbarBrand,
  NavbarToggler,
} from "reactstrap";
import { useMediaQuery } from "react-responsive";
import "./style.css";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
function Navbar() {
  const [collapsed, setCollapsed] = useState(true);
  const pathname = usePathname();
  console.log(pathname);

  const toggleNavbar = () => setCollapsed(!collapsed);
  const isMobile = useMediaQuery({ maxWidth: "900px" });

  //   render() {
  // if (!isMobile) {
  // console.log(width);
  return (
    // <Navbar dark>
    //   <NavbarBrand className="brand" href="/">
    //     Portfolio<font color="#ff9200">.</font>
    //   </NavbarBrand>
    //   <NavbarToggler onClick={toggle} />
    //   <Collapse isOpen={collapsed} navbar>
    //     <Container>
    //       <Nav className="me-auto" navbar>
    //         <NavItem>
    //           <NavLink href="/about">About</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="/projects">Projects</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="/skills">Skills</NavLink>
    //         </NavItem>
    //         <NavItem>
    //           <NavLink href="https://drive.google.com/file/d/1oeerhwdRyMzd7E9_By5NA0CwRGqAONZP/view?usp=sharing">
    //             Resume
    //           </NavLink>
    //         </NavItem>
    //       </Nav>
    //     </Container>
    //   </Collapse>
    // </Navbar>
    <div className="my-navbar">
      <Link href={"/"} className="brand" >
        Portfolio<font color="#ff9200">.</font>
      </Link>
      <div className="links">
        <Link href={"/about"} className="link1" style={{ marginLeft: "-20%" }}>
          About
        </Link>
        <Link href={"/projects"} className="link1" >
          Projects
        </Link>
        <Link href={"/skills"} className="link1">
          Skills
        </Link>
        <Link
          href="https://drive.google.com/file/d/1oeerhwdRyMzd7E9_By5NA0CwRGqAONZP/view"
          target="_blank"
          className="link1"
        >
          Resume
        </Link>
      </div>
      <button className="my-button">Hire Me!</button>
    </div>
  );
  // } else {
  //   return (
  //     <div>
  //     <Navbar color="faded" dark>
  //       <NavbarBrand href="/" className="me-auto">
  //         reactstrap
  //       </NavbarBrand>
  //       <NavbarToggler onClick={toggleNavbar} className="me-2" />
  //       <Collapse isOpen={!collapsed} navbar>
  //         <Nav navbar>
  //           <NavItem>
  //             <NavLink href="/components/">Components</NavLink>
  //           </NavItem>
  //           <NavItem>
  //             <NavLink href="https://github.com/reactstrap/reactstrap">
  //               GitHub
  //             </NavLink>
  //           </NavItem>
  //         </Nav>
  //       </Collapse>
  //     </Navbar>
  //   </div>
  //   );
  // }
}
// }

export default Navbar;
