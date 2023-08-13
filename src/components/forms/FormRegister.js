import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";


import "./Form.css";

const UPLOAD_ENDPOINT = "http://localhost:8080/api/auth/signup";

const FormRegister = () => {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [gender, setGender] = useState("MALE");
  const [role, setRole] = useState("ROLE_MEMBER");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [file, setFile] = useState(null);
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    setStatus(""); // Reset status
    event.preventDefault();
    const formData = new FormData();

    formData.append("name", name);
    formData.append("address", address);
    formData.append("gender", gender);
    formData.append("role", role);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("file", file);
    formData.append("image", image);
    // for (var pair of formData.entries()) {
    //   console.log(pair[0] + ", " + pair[1])
    // }
    axios
      .post(UPLOAD_ENDPOINT, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((resp) => {
        navigate(`/login?msg=${resp.data.message}`);
      })
      .catch((err) => setStatus(err.response.data.message));

    // try {
    //   let resp = await axios.post(UPLOAD_ENDPOINT, formData, {
    //     headers: {
    //       "content-type": "multipart/form-data",
    //     },
    //   })
    //   console.log(resp)
    // } catch (e) {
    //   // todo: email already used, warn user
    //   console.error(e) //can be removed
    // }
    // setStatus(resp.status === 200 ? "Thank you!" : "Error.")
    // if (resp.status === 200) {
    //   // todo: succesful registration, inform user
    //   navigate("/login?msg=true") //can be removed
    // }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="col-lg-5 px-4 py-5">
        <div
          className="card bg-success row flex-lg-row-reverse  py-5"
          bis_skin_checked="1"
        >
         
          <h3 className="contact-title mx-3 text-black text-center">
            REGISTER
          </h3>
          <hr className="text-black" />
          <div
            className="col-lg-3 img-center"
            bis_skin_checked="1"
          >
          
          </div>
          <div className="col-lg-12 text-center" bis_skin_checked="1">
            <Form
              className="p-3 text-black text-center"
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3 mx-3" controlId="name">
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="address">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  value={address}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 mx-3 text" controlId="gender">
                <Form.Label>Gender</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => setGender(e.target.value)}
                  value={gender}
                  required
                >
                  <option disabled>Choose a gender</option>
                  <option defaultValue={true} value="MALE">
                    Male
                  </option>
                  <option value="FEMALE">Female</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="role">
                <Form.Label>Role</Form.Label>
                <Form.Select
                  aria-label="Default select example"
                  onChange={(e) => {
                    setRole(e.target.value);
                    console.log(role + e.target.value);
                  }}
                  value={role}
                  required
                >
                  <option disabled>Choose a role</option>
                  <option defaultValue={true} value="ROLE_MEMBER">
                    Member
                  </option>
                  <option value="ROLE_RIDER">Rider</option>
                  <option value="ROLE_CAREGIVER">Caregiver</option>
                  <option value="ROLE_VOLUNTEER">Volunteer</option>
                </Form.Select>
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                  type="email"
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
                <p className="text-warning">{status}</p>
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  minLength={6}
                  type="password"
                  placeholder=""
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="file">
                <Form.Label>Upload your CV and qualification here</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setFile(e.target.files[0])}
                  required
                />
              </Form.Group>
              <Form.Group className="mb-3 mx-3" controlId="file">
                <Form.Label>Upload Your Image</Form.Label>
                <Form.Control
                  type="file"
                  onChange={(e) => setImage(e.target.files[0])}
                  required
                />
              </Form.Group>

              <div className="text-center mb-2 d-grid mx-3 pt-3">
                <Button type="submit" className="button fw-bold btn-warning text-light" size="lg">
                  Register
                </Button>
              </div>

              <div className="text-center mt-3 p-3">
                <span>Already have an account?</span>
                <Link to="/login" className="ms-2 text-black">
                  Login
                </Link>
              </div>
            </Form>
          </div>
        
        </div>
      </div>
    </div>
  );
};

export default FormRegister;
