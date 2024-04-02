import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("https://65e84dbc4bb72f0a9c4ee37b.mockapi.io/Crud-React", {
        name: name,
        email: email,
      })
      .then(() => {
        history("/read");
      });
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header d-flex justify-content-between align-items-center" style={{marginTop:'30px'}}>
           <strong style={{fontSize:'36px'}}>CREATE TODO</strong>
             
            </div>
            <div className="card-body" style={{marginTop:'30px'}}>
              <form onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    Heading
                  </label>
                  <input
                    type="Heading"
                    className="form-control"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    Todo
                  </label>
                  <textarea
                    type="text"
                    className="form-control"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div style={{margin:'10px 0'}}>
                <button type="submit" className="btn btn-primary" style={{marginRight:'10px'}}>
                  Add Todo
                </button>
                <Link to="/read" className="btn btn-primary">
                View Task
              </Link>
              </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Create;
