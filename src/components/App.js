import React, { Component } from "react";
import styled from "styled-components";
import Button from "react-bootstrap/Button";
import BSForm from "react-bootstrap/Form";

const Form = styled(BSForm)`
  margin-top: 1em;
  margin-left: 1em;
  width: 10em;
`;

export default function App() {
  return (
    <div>
      <Form>
        <Form.Group controlId="formChangeColor">
          <Form.Label>Change Color</Form.Label>
          <Form.Control type="text" placeholder="#f0f0f0"></Form.Control>
        </Form.Group>
        <Button>Submit</Button>
      </Form>
    </div>
  );
}
