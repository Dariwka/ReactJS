import React from "react";
import Form from "react-bootstrap/Form";

const Searchbox = ({ search }) => {
  return (
    <div className="search">
      <Form>
        <h4>Search recipe: </h4>
        <Form.Group>
          <Form.Control type="text" name="name" onChange={search} />
        </Form.Group>
      </Form>
    </div>
  );
};

export default Searchbox;
