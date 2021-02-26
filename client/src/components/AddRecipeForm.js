import React, { useState, useRef } from "react";
import { Container, Form, Col, Button } from "react-bootstrap";
export default function AddRecipeForm() {
  const [values, setValues] = useState({ val: [] });
  const [instructions, setInstructions] = useState({ instr: [] });

  // add Ingredient fields
  function createInputs() {
    return values.val.map((el, i) => (
      <div key={i}>
        <Form.Row type="text" value={el || ""} onChange={handleChange.bind(i)}>
          <Form.Group as={Col} controlId="ingredient">
            <Form.Label>Ingredient</Form.Label>
            <Form.Control type="text" />
          </Form.Group>
          <Form.Group as={Col}>
            <Form.Label>Measurement</Form.Label>
            <Form.Control type="decimal" />
          </Form.Group>
          <Form.Group>
            <Form.Label>Unit</Form.Label>
            <Form.Control as="select" defaultValue="Choose...">
              <option>Choose...</option>
              <option>teaspoon</option>
              <option>tablespoon</option>
              <option>cup</option>
              <option>fluid ounces</option>
              <option>to taste</option>
            </Form.Control>
          </Form.Group>
          <button
            type="button"
            className="ml-2 remove"
            onClick={removeClick.bind(i)}
          >
            X
          </button>
        </Form.Row>
        {/* <input type="text" value={el || ""} onChange={handleChange.bind(i)} /> */}
      </div>
    ));
  }

  // add instruction fields
  function createInstructions() {
    return instructions.instr.map((el, i) => (
      <div key={i}>
        <Form.Row type="text" value={el || ""} onChange={handleChange2.bind(i)}>
          <Form.Group as={Col} controlId="instruction">
            <Form.Label>Step {i + 1}</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <button
            type="button"
            className="ml-2 remove"
            onClick={removeClick2.bind(i)}
          >
            X
          </button>
        </Form.Row>
        {/* <input type="text" value={el || ""} onChange={handleChange.bind(i)} /> */}
      </div>
    ));
  }
  function handleChange(event) {
    let vals = [...values.val];
    vals[this] = event.target.value;
    setValues({ val: vals });
  }

  const addClick = () => {
    setValues({ val: [...values.val, ""] });
  };

  const removeClick = () => {
    let vals = [...values.val];
    vals.splice(this, 1);
    setValues({ val: vals });
  };

  function handleChange2(event) {
    event.preventDefault();
    let instrs = [...instructions.instr];
    instrs[this] = event.target.value;
    setValues({ instr: instrs });
  }

  const addClick2 = () => {
    setInstructions({ instr: [...instructions.instr, ""] });
  };

  const removeClick2 = () => {
    let instrs = [...instructions.instr];
    instrs.splice(this, 1);
    setInstructions({ instr: instrs });
  };
  return (
    <Container>
      <Form>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridName">
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Recipe Name" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCreator">
            <Form.Label>Recipe Creator</Form.Label>
            <Form.Control type="test" placeholder="Creator" />
          </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} controlId="formGridLink">
            <Form.Label>Recipe Link (if available)</Form.Label>
            <Form.Control type="url" placeholder="http://..."></Form.Control>
          </Form.Group>
        </Form.Row>
        <Form.Row className="text-center">
          <Form.Group as={Col} controlId="formGridPrepTime">
            <Form.Label>Enter Prep Time (minutes)</Form.Label>
            <Form.Control type="number"></Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridCookTime">
            <Form.Label>Enter Cook Time (minutes)</Form.Label>
            <Form.Control type="number"></Form.Control>
          </Form.Group>
          <Form.Group as={Col} controlId="formGridTotalTime">
            <Form.Label>Enter Total Time (minutes)</Form.Label>
            <Form.Control type="number"></Form.Control>
          </Form.Group>
        </Form.Row>
        <strong>Add Ingredients</strong>
        <div>
          {createInputs()}
          <button type="button" className="add" onClick={addClick}>
            Add Ingredient
          </button>
        </div>
        <div>
          <strong>Add Instructions</strong>
          <div>
            {createInstructions()}
            <button type="button" className="add" onClick={addClick2}>
              Add Instruction
            </button>
          </div>
        </div>
        <div>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Notes/FAQs</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </div>
        <button id="recipe-submit" type="submit">
          Add Recipe
        </button>
      </Form>
    </Container>
  );
}
