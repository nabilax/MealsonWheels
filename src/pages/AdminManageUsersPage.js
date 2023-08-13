import { useContext, useEffect, useState } from "react";
import { Container, Dropdown, DropdownButton, Table } from "react-bootstrap";
import Layout from "../components/layout/Layout";
import AuthContext from "../context/auth-context";
import { getAdminUserActiveAPI, getAdminUserAPI } from "../api/admin-api";

import "./css/AdminManageUsersPage.css";
import { user_type } from "../context/context-type";

const AdminManageUsersPage = () => {
  const { token } = useContext(AuthContext);
  const [users, setUsers] = useState([user_type]);
  const [msg, setMsg] = useState("");

  function handleActive(id) {
    getAdminUserActiveAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    getAdminUserAPI(token)
      .then((resp) => setUsers(resp.data))
      .catch((err) => console.log(err));
  }, [token]);
  return (
    <Layout>
      <Container>
        <h1 className="text-center bg-success py-3 mt-5 fw-bold">Manage Users</h1>
        {msg && <span onClick={() => setMsg("")}>{msg}</span>}
        <div className="card bg-success mb-5">
          <div className="container">
            <Table striped className="text-black text-center driver my-3">
              <thead className="driver-table">
                <tr style={{color:"white"}}>
                  <th>No</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Email</th>
                  <th>Gender</th>
                  <th>Roles</th>
                  <th>File</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody className="text-black">
                {users.map((user, index) => (
                  <tr key={user.id}>
                    <td className="text-black">{index + 1}</td>
                    <td className="text-black">{user.name}</td>
                    <td className="text-black">{user.address}</td>
                    <td className="text-black">{user.email}</td>
                    <td className="text-black">{user.gender}</td>
                    <td className="text-black">{user.role}</td>
                    <td className="text-black">
                      <a className="link-light" href={user.fileUrl}>
                        file
                      </a>
                    </td>
                    <td className="text-black">
                      <DropdownButton
                        key="start"
                        id="dropdown-button-drop-start"
                        drop="start"
                        title="Action"
                        variant="light"
                        size="sm"
                      >
                        <Dropdown.Item onClick={() => handleActive(user.id)}>
                          approve
                        </Dropdown.Item>
                        <Dropdown.Item href="#/action-2">*Delete</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          *Something else
                        </Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </div>
      </Container>


    </Layout>
  );
};

export default AdminManageUsersPage;