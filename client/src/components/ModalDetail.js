import React from "react";
import { Modal, Image, Row, Col } from "react-bootstrap";

const ModalDetail = (props) => {
  const item = props.data;
  console.log(item);
  return (
    <Modal size="lg" show={props.show} onHide={props.close} centered>
      <Modal.Body style={{ "max-height": "calc(100vh - 210px)", "overflow-y": "auto" }}>
        <div style={{ marginLeft: 50, marginRight: 50 }}>
          <Image src={item.Poster} style={{ width: 300 }} />
          <h3>{item.Title}</h3>
          <p>
            Year:<span>{item.Year}</span>
          </p>
          <p>Released: {item.Released}</p>
          <p>Director: {item.Director}</p>
          <p>Actors: {item.Actors}</p>
          <p>
            <Row>
              <Col xs={1}>Plot:</Col>
              <Col>{item.Plot}</Col>
            </Row>
          </p>
          <p>Awards: {item.Awards}</p>
          <p>Genre: {item.Genre}</p>
          <p>Production: {item.Production}</p>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default ModalDetail;
