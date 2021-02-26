import React from "react";
import { Navbar, Nav } from "react-bootstrap";
export default function Header() {
  return (
    <Navbar className="header">
      <Navbar.Brand href="/">Recipes</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link href="/addrecipe">Add Recipe</Nav.Link>
        <Nav.Link href="/viewrecipes">View Recipes</Nav.Link>
        <Nav.Link href="/search">Search</Nav.Link>
      </Nav>
    </Navbar>
  );
}
