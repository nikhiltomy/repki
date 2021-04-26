import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../../Assets/auki.png";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { auth } from '../../firebase.js';

function NavBar({ currentUser }) {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);

  function scrollHandler() {
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  window.addEventListener("scroll", scrollHandler);

  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/">
          <img src={logo} className="img-fluid logo" alt="brand" /><span>AUKI </span>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto" defaultActiveKey="#home">
            <Nav.Item>
              <Nav.Link as={Link} to="/" onClick={() => updateExpanded(false)}>
                <i className="fas fa-home"></i> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/blogs"
                onClick={() => updateExpanded(false)}
              >
                <i className="far fa-user"></i> Blogs
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/profile"
                onClick={() => updateExpanded(false)}
              >
                <i className="fab fa-codepen"></i> Profile
              </Nav.Link>
            </Nav.Item>


            <Nav.Item className="fork-btn pt-0">
              {
                currentUser ?
                  <Button
                    onClick={() => auth.signOut()}
                    target="_blank"
                    className="fork-btn-inner mt-3"
                  > SignOut
                <i className="fas fa-code-branch"></i>{" "}
                    <i className="far fa-star"></i>
                  </Button>
                  :
                  <Nav.Link
                    as={Link}
                    to="/signup"
                    onClick={() => updateExpanded(false)}
                  >
                    <Button
                      target="_blank"
                      className="fork-btn-inner"
                    > Login
                <i className="fas fa-code-branch"></i>{" "}
                      <i className="far fa-star"></i>
                    </Button>
                  </Nav.Link>
              }
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export { NavBar }
