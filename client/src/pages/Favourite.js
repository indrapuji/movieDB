import React from "react";
import { Container } from "react-bootstrap";
import Navigation from "../components/Navigation";
import { useSelector } from "react-redux";
import TableMovie from "../components/TableMovie";

const Favourite = () => {
  const listFavorite = useSelector((state) => state.favorites);

  if (listFavorite.length === 0) {
    return (
      <>
        <Container>
          <Navigation />
          <h1 className="mt-3" style={{ textAlign: "center" }}>
            You dont have any favorites Movie
          </h1>
        </Container>
      </>
    );
  } else {
    return (
      <>
        <Container>
          <Navigation />
          <TableMovie files={listFavorite} />
        </Container>
      </>
    );
  }
};

export default Favourite;
