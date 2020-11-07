import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  return (
    <>
      <Navbar bg="transparent" className="navigationBar">
        <Nav className="mr-auto">
          <Nav.Item as="li">
            <Link className={location.pathname === "/" ? "navActive" : "navlink"} to="/">
              Search Movie
            </Link>
          </Nav.Item>
          <Nav.Item as="li">
            <Link className={location.pathname === "/favourite" ? "navActive" : "navlink"} to="/favourite">
              My Favourite
            </Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
};

export default Navigation;


