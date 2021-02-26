import React from "react";
import { Container } from "react-bootstrap";
import "../style.css";
import AddRecipeForm from "../components/AddRecipeForm";
export default function AddRecipe() {
  return (
    <Container className="page-container">
      <h1 className="text-center">Add Recipe</h1>
      <AddRecipeForm />
    </Container>
  );
}
