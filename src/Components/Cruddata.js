import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Cruddata() {
  const [data, setData] = useState([]);
  const [tabledark, setTableDark] = useState('')

  function getData() {
    axios
      .get("https://64a3a410c3b509573b5659ce.mockapi.io/crud-youtube")
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  function handleDelete(id) {
    axios
      .delete(`https://64a3a410c3b509573b5659ce.mockapi.io/crud-youtube/${id}`)
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
      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          onClick={() => {
            if(tabledark === 'table-dark') setTableDark("")
            else setTableDark("table-dark");
          }}
        />
      </div>
      <div className="row">
        <div className="container">
          <div className="card">
            <div className="card-title">
              <h2>Read Operation</h2>
            </div>

            <div className="card-body">
              <Link to="/" className="btn btn-success mb-3">
                Add New
              </Link>
              <table className={`table table-bordered ${tabledark}`}>
                <thead className="table-primary text-white">
                  <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Email</td>
                    <td>Phone Number</td>
                    <td>Action</td>
                  </tr>
                </thead>
                {data.map((eachData, index) => {
                  return (
                    <React.Fragment key={index}>
                      <tbody>
                        <tr>
                          <td>{eachData.id}</td>
                          <td>{eachData.name}</td>
                          <td>{eachData.email}</td>
                          <td>09-</td>
                          <td>
                            <Link to="/empdata">
                              <button
                                className="btn btn-success m-1"
                                onClick={() =>
                                  setToLocalStorage(
                                    eachData.id,
                                    eachData.name,
                                    eachData.email
                                  )
                                }
                              >
                                Edit
                              </button>
                            </Link>
                            <button
                              className="btn btn-danger"
                              onClick={() => handleDelete(eachData.id)}
                            >
                              Delete
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </React.Fragment>
                  );
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
