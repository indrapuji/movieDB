import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";

const TableMovie = (props) => {
  const [inHover, setHover] = useState(<FaRegStar />);

  function handdleHover() {
    setHover(<FaStar />);
  }

  function handdleLeave() {
    setHover(<FaRegStar />);
  }

  return (
    <>
      <Table responsive="sm">
        <thead>
          <tr>
            <th>Title</th>
            <th>Year</th>
            <th>IMDB ID</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {props.files &&
            props.files.map((file, index) => {
              return (
                <tr key={index}>
                  <td>{file.Title}</td>
                  <td>{file.Year}</td>
                  <td>{file.imdbID}</td>
                  <td className="starIcon" onMouseEnter={() => handdleHover()} onMouseLeave={() => handdleLeave()}>
                    {inHover}
                  </td>
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default TableMovie;
