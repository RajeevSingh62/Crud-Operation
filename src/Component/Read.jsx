import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Read = () => {
  const [data, setData] = useState([]);

  function getData() {
    axios
      .get("https://65e84dbc4bb72f0a9c4ee37b.mockapi.io/Crud-React")
      .then((res) => {
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://65e84dbc4bb72f0a9c4ee37b.mockapi.io/Crud-React/${id}`)
      .then(() => {
        getData();
      });
  }

  const setToLocalStorage = (id, name, email) => {
    localStorage.setItem("id", id);
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <div className="container">
        <div className="d-flex justify-content-between mt-2 mb-4">
          <h2>Read Todo</h2>
          <Link to="/">
            <button className="btn btn-secondary" style={{marginBottom:'10px'}}>Create New Todo</button>
          </Link>
        </div>
        <table className="table table-striped table-bordered">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Date</th>
              <th scope="col">Todo-list</th>
              <th scope="col"></th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {data.map((eachData) => (
              <tr key={eachData.id}>
                <th scope="row">{eachData.id}</th>
                <td>{eachData.name}</td>
                <td>{eachData.email}</td>
                <td>
                  <Link to="/update">
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() =>
                        setToLocalStorage(eachData.id, eachData.name, eachData.email)
                      }
                    >
                      <i className="fas fa-edit"></i> Edit
                    </button>
                  </Link>
                </td>
                <td>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => handleDelete(eachData.id)}
                  >
                    <i className="fas fa-trash"></i> Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Read;
