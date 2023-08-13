import { useContext, useEffect, useState } from "react"
import { Button, Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { Link, NavLink, useNavigate } from "react-router-dom"
import { defaultprofile, logo, person, staff1 } from "../../assets"
import AuthContext from "../../context/auth-context"
import { user_type } from "../../context/context-type"
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';

import "./NavBar.css"

const NavBar = () => {
  const { currentUser, logout } = useContext(AuthContext)
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate("/login")
  }
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
      <Navbar className='Navbar' expand='lg'>
        <Container>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto me-md-auto w-25'>
              <img src={logo} alt='' />
              {/* <i class="bi bi-arrow-repeat text-success fs-1"></i> <h3>Meals on Wheels</h3> */}
            </Nav>
            
            

            <Nav className="ms-auto me-md-auto">
              <NavLink
                activeclassname="active"
                className="nav-link fw-bold text-light me-3"
                to="/"
              >
                Home
              </NavLink>
              <NavLink
                activeclassname="active"
                className="nav-link fw-bold text-light"
                to="/about"
              >
                About Us
              </NavLink>
              <NavLink
                activeclassname="active"
                className="nav-link fw-bold text-light"
                to="/contact"
              >
                Contact Us
              </NavLink>
              <NavLink
                activeclassname="active"
                className="nav-link fw-bold text-light me-3"
                to="/donate"
              >
                Donate Us
              </NavLink>



            </Nav>

            {currentUser.name ? (
              currentUser.name && (
                <Nav className='w-25 text-white justify-content-end'>
                  <div className='menu-user text-white'>
                    <img
                      src={
                        currentUser.imageUrl
                          ? currentUser.imageUrl
                          : defaultprofile
                      }
                      alt='profile_picture'
                      className='rounded-circle me-2 text-white profile-pic'
                      style={{ width: "45px", height: "45px" }}
                    />
                    <NavDropdown
                      title={currentUser.name}
                      className='fw-bold'
                      id='navName'
                    >
                      <NavDropdown.Divider />
                      <NavDropdown.Item href='#action/3.4'>

                        <>
                          <Button variant="success" onClick={handleShow}>
                            View Profile
                          </Button>

                          <Modal style={{background:"black",}} show={show} onHide={handleClose}>
                            <Modal.Header closeButton  style={{background:"#28a745",border: "1px solid white"}}>
                              <Modal.Title></Modal.Title>
                            </Modal.Header>
                            <Modal.Body style={{background:"black", border: "1px solid white"}} >
                              <div>
                                <img
                                  src={
                                    currentUser.imageUrl
                                      ? currentUser.imageUrl
                                      : defaultprofile
                                  }
                                  alt='profile_picture'
                                  className='rounded-circle me-2 text-white profile-pic'
                                  style={{ width: "175px", height: "175px", }}
                                />
                                
                              </div>
                              <hr/>
                              <div>
                                <table style={{background:"black",width:"465px",color:"white", }}>
                                  <h5> Name       : </h5> 
                                  <tr>{currentUser.name}</tr><hr />
                                  <h5> Email      :   </h5> 
                                  <tr> {currentUser.email}</tr><hr />
                                  <h5> Adress     :   </h5> 
                                  <tr> {currentUser.address}</tr><hr />
                                  <h5> Member Type:  </h5> 
                                  <tr> {currentUser.role}</tr><hr />
                                  <h5> Status     :  </h5> 
                                  <tr> {currentUser.status}</tr>
                                </table>
                              </div>
                            </Modal.Body>
                            <Modal.Footer style={{background:"#28a745", border: "1px solid white"}}>
                              <Button variant="light" onClick={handleClose}>
                                Done
                              </Button>
                            </Modal.Footer >
                          </Modal>
                        </>
                        {currentUser.role === "ROLE_MEMBER" && (
                          <div className='nav-member'>
                            <div className='second-nav'>
                              <nav className='py-2'>
                                <div className='d-flex justify-content-center'>
                                  <ul className='nav'>
                                    <Link to='/home' className='text-decoration-none'>
                                      <li className='text-white px-3 btn-member fw-bold'>
                                        View Daily Meals
                                      </li>
                                    </Link>
                                    <hr/>
                                    <Link to='/feedback' className='text-decoration-none'>
                                      <li className='text-white px-3 btn-member fw-bold'>
                                        Feedback us
                                      </li>
                                    </Link>
                                    <hr/>
                                    <Link
                                      to='/member/order/history'
                                      className='text-decoration-none'
                                    >
                                      <li className='text-white px-3 btn-member fw-bold'>
                                        Order History
                                      </li>
                                    </Link>
                                  </ul>
                                </div>
                              </nav>
                            </div>
                          </div>
                        )}

                        {currentUser.role === "ROLE_RIDER" && (
                          <div className='nav-member'>
                            <div className='second-nav'>
                              <nav className='py-2'>
                                <div className='d-flex justify-content-center'>
                                  <ul className='nav'>
                                    <Link to='/driver' className='text-decoration-none'>
                                      <li className='text-white px-3 btn-member fw-bold'>
                                        Dashboard
                                      </li>
                                    </Link>
                                  </ul>
                                </div>
                              </nav>
                            </div>
                          </div>
                        )}
                        {currentUser.role === "ROLE_CAREGIVER" && (
                          <div className='nav-member'>
                            <div className='second-nav'>
                              <nav className='py-2'>
                                <div className='d-flex justify-content-center'>
                                  <ul className='nav'>
                                    <Link to='/caregiver' className='text-decoration-none'>
                                      <li className='text-white px-3 btn-member fw-bold'>
                                        Dashboard
                                      </li>
                                    </Link>
                                  </ul>
                                </div>
                              </nav>
                            </div>
                          </div>
                        )}
                        {currentUser.role === "ROLE_PARTNER" && (
                          <div className='nav-member'>
                            <div className='second-nav'>
                              <nav className='py-2'>
                                <div className='d-flex justify-content-center'>
                                  <ul className='nav'>
                                    <Link to='/partner' className='text-decoration-none'>
                                      <li className='text-white px-3 btn-member fw-bold'>
                                        Dashboard
                                      </li>
                                    </Link>
                                  </ul>
                                </div>
                              </nav>
                            </div>
                          </div>
                        )}
                        {currentUser.role === "ROLE_ADMIN" && (
                          <div className='nav-member'>
                            <div className='second-nav'>
                              <nav className='py-2'>
                                <div className='d-flex justify-content-center'>
                                  <ul className='nav'>
                                    <Link to='/admin' className='text-decoration-none'>
                                      <li className='text-white px-3 btn-member fw-bold'>
                                        Dashboard
                                      </li>
                                    </Link>
                                    <hr/>
                                    <Link
                                      to='/admin/manage-users'
                                      className='text-decoration-none'
                                    >
                                      <li className='text-white px-3 btn-member fw-bold'>
                                        Manage Users
                                      </li>
                                    </Link>
                                    <hr/>
                                    <Link
                                      to='/admin/manage-partner'
                                      className='text-decoration-none'
                                    >
                                      <li className='text-white px-3 btn-member fw-bold'>
                                        Manage Partner
                                      </li>
                                    </Link>
                                    <hr/>
                                    <Link
                                      to='/admin/meal-history'
                                      className='text-decoration-none'
                                    >
                                      <li className='text-white px-3 btn-member fw-bold'>
                                        Meal History
                                      </li>
                                    </Link>
                                  </ul>
                                </div>
                              </nav>
                            </div>
                          </div>
                        )}
                        <div>
                          <Button
                            variant='success'
                            className='nav-logout btn-sm w-100'
                            onClick={handleLogout}
                          >
                            Logout
                          </Button>
                        </div>

                      </NavDropdown.Item>
                    </NavDropdown>
                  </div>
                </Nav>
              )
            ) : (
              <Nav className='w-25 justify-content-end'>
                <Link to='/login'>
                  <Button
                    variant='outline-light'
                    className='me-0 me-md-3 mb-md-0 mb-3 text-light fw-bold btn-login'
                  >
                    Login
                  </Button>
                </Link>
                <Link to='/register'>
                  <Button
                    variant='sucess'
                    className='me-0 me-md-3 mb-md-0 mb-3 bg-light fw-bold btn-register'
                  >
                    Register
                  </Button>
                </Link>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  )
}

export default NavBar