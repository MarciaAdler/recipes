import React from "react";
import { Container } from "react-bootstrap";
import "../style.css";
export default function Home() {
  return (
    <Container className="home-container">
      <strong>Welcome</strong>
      <br />
      <a href="/addrecipe" className="mt-2 mb-2">
        Add a recipe
      </a>
      <br />
      <a href="/viewrecipes" className="mt-2 mb-2">
        View my recipes
      </a>
    </Container>
  );
}
