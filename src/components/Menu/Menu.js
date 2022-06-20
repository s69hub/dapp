import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ConnectButton } from "web3uikit";
import dump from "../../images/dump.svg";
export default function Menu() {

  return (
    <Navbar collapseOnSelect expand="md" className="fixed-top" variant="dark" >
      <Container>
        <Navbar.Brand
          href="#"
          target="_blank"
          className="ps-md-3"
        >
          <img src={dump} alt="DumpToken.net" height="20px" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          {/* <Nav className="text-center">
            <Link to="/" className="nav-link">
              Home
            </Link>

          </Nav> */}
          {/* <div className="me-md-0 ms-md-auto d-flex justify-content-center mt-md-0 mt-2 mb-md-0 mb-1">
            <ConnectButton
              moralisAuth
              signingMessage="You are signing to DUMP dApp"
            />
          </div> */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}