import React, { useState } from "react";
import { Form, Col, Button } from "react-bootstrap";

const SearchBar = (props) => {
  const [search, setSearch] = useState("");

  function onSearchChange(event) {
    setSearch(event.target.value);
  }

  function onSearchSubmit(event) {
    event.preventDefault();
    if (search) {
      const searchApiUrl = `http://www.omdbapi.com/?s=${search}&apikey=2fabb910`;
      fetch(searchApiUrl)
        .then((res) => res.json())
        .then((data) => props.onSubmit(data))
        .catch((err) => {
          console.log(err);
        });
    } else {
      props.onSubmit("");
    }
  }

  return (
    <div className="tabBody">
      <Form onSubmit={onSearchSubmit}>
        <Form.Row>
          <Col>
            <Form.Control placeholder="Enter movie title here..." onChange={onSearchChange} />
          </Col>
          <Col xs="auto">
            <Button type="submit">Search</Button>
          </Col>
        </Form.Row>
      </Form>
    </div>
  );
};

export default SearchBar;
