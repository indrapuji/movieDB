import React from "react";
import { Table } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addFav, delFav } from "../store/actions/favAction";

const TableMovie = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();

  function AddNewFav(newFav) {
    dispatch(addFav(newFav));
  }
  function DelNewFav(newFav) {
    dispatch(delFav(newFav));
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
                  {location.pathname === "/" ? (
                    <td className="starIcon" onClick={() => AddNewFav(file)}>
                      <FaRegStar />
                    </td>
                  ) : (
                    <td className="starIcon" onClick={() => DelNewFav(file)}>
                      <FaStar />
                    </td>
                  )}
                </tr>
              );
            })}
        </tbody>
      </Table>
    </>
  );
};

export default TableMovie;
