import React, { useState } from "react";
import { Table } from "react-bootstrap";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { addFav, delFav } from "../store/actions/favAction";
import useFetch from "../hooks/useFetch";
import ModalDetail from "./ModalDetail";
import Swal from "sweetalert2";

const TableMovie = (props) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const [id, setId] = useState("");

  const handleClose = () => {
    setShow(false);
  };

  const apiUrl = `http://www.omdbapi.com/?i=${id}&apikey=2fabb910`;
  const [data] = useFetch(apiUrl);

  const handleShow = (data) => {
    setId(data);
    setShow(true);
  };

  function AddNewFav(newFav) {
    dispatch(addFav(newFav));
    Swal.fire({
      icon: "success",
      title: `${newFav.Title}`,
      text: `Added To Favourite`,
      showConfirmButton: false,
      timer: 1000,
    });
  }
  function DelNewFav(newFav) {
    dispatch(delFav(newFav));
    Swal.fire({
      icon: "success",
      title: `${newFav.Title}`,
      text: `Remove from Favourite`,
      showConfirmButton: false,
      timer: 1000,
    });
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
                  <td className="title" onClick={() => handleShow(file.imdbID)}>
                    {file.Title}
                  </td>
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
      <ModalDetail show={show} close={handleClose} data={data} />
    </>
  );
};

export default TableMovie;
