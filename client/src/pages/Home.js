import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";
import SearchBar from "../components/SearchBar";
import TableMovie from "../components/TableMovie";

const Home = () => {
  const [input, setInput] = useState("");

  console.log(input);

  function onSearchSubmit(payload) {
    setInput(payload.Search);
  }
  return (
    <>
      <Container>
        <Navigation />
        <SearchBar onSubmit={onSearchSubmit} />
        <TableMovie files={input} />
      </Container>
    </>
  );
};

export default Home;
