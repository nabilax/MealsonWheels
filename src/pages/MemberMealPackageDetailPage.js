import { useContext, useEffect, useState } from "react"
import { Button, Container, Form, Modal, Table } from "react-bootstrap"
import { Link, useParams } from "react-router-dom"
import { getMenuById } from "../api/api"
import { postMemberOrderCreateAPI } from "../api/member-api"
import { mealdetail } from "../assets"
import Layout from "../components/layout/Layout"
import AuthContext from "../context/auth-context"
import { menu_type } from "../context/context-type"
import "../pages/css/MemberMealPackageDetailPage.css"

const MemberMealPackageDetailPage = () => {
  const { menuId } = useParams()
  const { token } = useContext(AuthContext)
  const [menu, setMenu] = useState(menu_type)
  const [msg, setMsg] = useState("")

  //Modal
  const [show, setShow] = useState(false)
  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  useEffect(() => {
    getMenuById(token, menuId)
      .then((resp) => setMenu(resp.data))
      .catch((err) => console.log(err))
  }, [menuId, token])

  //Submit Meal
  function handlePostOrder() {
    handleShow()
    postMemberOrderCreateAPI(token, menuId)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.warn(err))
  }

  return (
    <Layout>
      <Container className='d-flex justify-content-center'>
        <div className='card bg-success meals-detail my-5 align-items-center w-50'>
          <div className='text-center py-4'>
            <h2 className='text-white'>
              {menu.packageName}
              {/* {menuId} */}
            </h2>
          </div>
          <div className='w-50 text-center'>
            <img
              height='220px'
              style={{ objectFit: "contain" }}
              src={menu.packageImage}
              alt=''
              className='w-100 rounded'
            />
            <div striped bordered className='mb-0 mt-3'>
              <label>Main Meal</label>
                  <h5 className='text-white'>{menu.mainCourse}</h5>
              <label>Drinks</label> 
                  <h5 className='text-white'>{menu.drink}</h5>
              <label>Meal Details</label> 
                  <h5 className='text-white'>{menu.dessert}</h5>
                
            </div>
              <div class="row text-center mt-4 mb-3">
                <div class="col-sm">
                <Button href="/home" variant="danger" className="button text-white w-100">
                    Cancel
                  </Button> 
                </div>
                <div class="col-sm">
                <Button
                  variant='warning'
                  className='button text-white w-100'
                  onClick={handlePostOrder}>
                  Confirm Meal
                </Button>
                </div>
              </div>
          </div>
        </div>
      </Container>

      {/* Popup Request Msg */}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className='modal-popup'>
          <div className='text-center'>
            <Modal.Title className='text-white fw-bold'></Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className='modal-popup'>
          <h2 className='text-white text-center'>
            {msg && <span>{msg}</span>}
          </h2>
        </Modal.Body>
        <div className='text-center modal-popup p-3'>
          <Button onClick={handleClose} className='button btn-warning text-light fw-bold w-50'>
            Back
          </Button>
        </div>
      </Modal>
    </Layout>
  )
}

export default MemberMealPackageDetailPage
