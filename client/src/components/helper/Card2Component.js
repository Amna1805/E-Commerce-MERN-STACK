import { Card, Form } from 'react-bootstrap';
import { useState } from "react";
function Card2Component({ width }) {
  const [value, setValue] = useState(100);
  return (
    <Card style={{ width: width, margin: "10px", padding: "10px" }}>
      <Card.Body>
        <Card.Title>Filter</Card.Title>
        <hr />
        <Card.Title>Price Range</Card.Title>
        <hr />
        <div className='mb-3'>
        <Form.Check type="checkbox" label="Under $50" />
    <Form.Check type="checkbox" label="$50 - $100" />
    <Form.Check type="checkbox" label="$100 - $200" />
    <Form.Check type="checkbox" label="Over $200" />
        </div>
  
        <hr />
        <Card.Title>Color</Card.Title>
        <hr />

        <div className='mb-3'>
        <Form.Check type="checkbox" label="White" />
    <Form.Check type="checkbox" label="Red" />
    <Form.Check type="checkbox" label="Black" />
    <Form.Check type="checkbox" label="Yellow" />
        </div>
        <hr />
        <Card.Title>Brand</Card.Title>
        <hr />
        <div className='mb-3'>
        <Form.Check type="checkbox" label="Rado" />
    <Form.Check type="checkbox" label="Casio" />
    <Form.Check type="checkbox" label="Nary" />
    <Form.Check type="checkbox" label="Citizen" />
        </div>
       
        {/* <Card.Title>Stock Status</Card.Title>
        <hr />
        <div className="m-1 d-flex justify-content-between">
          <div>
            <input type="radio" />
            <label className="m-1">In stock</label>
          </div>
          <label>(72)</label>
        </div>
        <div className="m-1 d-flex justify-content-between">
          <div>
            <input type="radio" />
            <label className="m-1">Out of stock</label>
          </div>
          <label>(72)</label>
        </div>
        <div className="m-1 d-flex justify-content-between">
          <div>
            <input type="radio" />
            <label className="m-1">On sale</label>
          </div>
          <label>(72)</label>
        </div> */}
       
      </Card.Body>
    </Card>
  );
}

export default Card2Component;
