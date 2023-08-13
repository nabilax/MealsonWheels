import { useContext, useEffect, useState } from "react";
import {
  Button,
  Carousel,
  Col,
  Container,
  Form,
  Modal,
  Row,
  Table,
} from "react-bootstrap";
import {
  getPartnerOrderAPI,
  postPartnerOrderCompleteAPI,
  postPartnerOrderCreateAPI,
} from "../api/partner-api";
import {
  getAdminOrderPendingAPI,
  getAdminOrderReadyToDeliverAPI,
  getAdminUserCountAPI,
  getPartnersAPI,
  getRidersAPI,
  postAdminOrderDeliverAPI,
  postAdminOrderPrepareAPI,
  getAdminUserActiveAPI,
  getAdminUserAPI,
} from "../api/admin-api";
import { getMenu, addMenu } from "../api/api";
import {
  carousel1,
  carousel2,
  carousel3,

} from "../assets";
import Layout from "../components/layout/Layout";
import AuthContext from "../context/auth-context";
import {
  order_type,
  menu_type,
  user_type,
  user_count,
} from "../context/context-type";

import "./css/CaregiverHomePage.css";

const PartnerHomePage = () => {
  const { token, currentUser } = useContext(AuthContext);
  const [msg, setMsg] = useState("");
  const [orderList, setOrderList] = useState([order_type]);
  const [index, setIndex] = useState(0);
  const [menu, setMenu] = useState([menu_type]);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [packageName, setPackageName] = useState("");
  const [mainCourse, setMainCourse] = useState("");
  const [salad, setSalad] = useState("");
  const [soup, setSoup] = useState("");
  const [dessert, setDessert] = useState("");
  const [drink, setDrink] = useState("");
  const [frozen, setFrozen] = useState("1");
  const [image, setImage] = useState(null);
  const [status, setStatus] = useState("");

  const handleSubmit = async (event) => {
    setStatus(""); // Reset status
    //event.preventDefault();
    const formData = new FormData();

    formData.append("packageName", packageName);
    formData.append("mainCourse", mainCourse);
    formData.append("salad", salad);
    formData.append("soup", soup);
    formData.append("dessert", dessert);
    formData.append("drink", drink);
    formData.append("frozen", frozen);
    formData.append("packageImage", image);

    console.log(frozen);

    addMenu(token, formData);

    window.location.reload();
  };

  function handlePrepare(id) {
    postPartnerOrderCreateAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err.response));
  }

  function handleComplete(id) {
    postPartnerOrderCompleteAPI(token, id)
      .then((resp) => setMsg(resp.data.message))
      .catch((err) => console.log(err.response));
  }

  useEffect(() => {
    getAdminOrderPendingAPI(token)
      .then((resp) => setOrderList(resp.data))
      .catch((err) => console.log(err));

    getMenu(token)
      .then((resp) => {
        setMenu(resp.data);
      })
      .catch((err) => {
        console.log(err);
      });

    getPartnerOrderAPI(token)
      .then((resp) => setOrderList(resp.data))
      .catch((err) => console.log(err.response));
  }, [token, msg]);
  return (
    <Layout>
      <Container>
        <h1 className="py-5 fw-bold">Hello, {currentUser.name}!</h1>

        <div className="mb-5">
          <Col sm={12}>
            <Carousel activeIndex={index} onSelect={handleSelect} className="my-5">
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-member rounded"
                  src={carousel1}
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>What is Healthy Diet</h3>
                  <p>A healthy diet is an essential aspect of a well-balanced lifestyle.
                    It should include a variety of fruits, vegetables, whole grains, lean protein sources, and healthy fats.
                    A healthy diet is not about strict limitations,
                    but rather about feeling good, having more energy, and keeping your body healthy.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-member rounded"
                  src={carousel2}
                  alt="Second slide"
                />

                <Carousel.Caption>
                  <h3>Benefit of Healthy Diet</h3>
                  <p>Eating a healthy diet has numerous benefits for both physical and mental health.
                    Eating a diet rich in nutrients also supports strong bones, healthy skin, and good eye health.
                    Additionally, a healthy diet can improve mental clarity, increase energy levels, and boost mood.
                    Moreover, it can aid in digestion, reduce inflammation, and support a strong immune system.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item>
                <img
                  className="d-block w-100 carousel-member rounded"
                  src={carousel3}
                  alt="Third slide"
                />

                <Carousel.Caption>
                  <h3>Choice suitable meal for you</h3>
                  <p>

                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col size={12} md={12}>
            <h4 className="text-center fw-bold title-caregiver">
              Meal Package List
            </h4>
            <div className="card bg-success task-tbl-meal">
              <div className="text-center fw-bold">
                <Button variant="primary" onClick={handleShow} className="button my-3">+ Add Meal</Button>
              </div>
              <Table striped className="text-white text-center mb-3 ">
                <thead className="driver-table">
                  <tr>
                    <th>Meal</th>
                    <th>Main meal</th>
                    <th>drink</th>
                    <th>Details</th>
                    <th>Image</th>
                  </tr>
                </thead>
                {menu.slice(0, 6).map((data) => (
                  <tbody className="text-white" key={data.id}>
                    <tr>
                      <td className="text-success">{data.packageName}</td>
                      <td className="text-success">{data.mainCourse}</td>
                      <td className="text-success">{data.drink}</td>
                      <td className="text-success">{data.dessert}</td>
                      <td className="text-success"><img
                        height='50px'
                        src={data.packageImage}
                        alt=''
                        className='w-80 rounded'
                      /></td>
                    </tr>
                  </tbody>
                ))}
              </Table>
            </div>
          </Col>
        </div>

        <div className="task pb-5">
          <h4 className="fw-bold Text-center title-caregiver">Order Status</h4>
          <div className="card bg-success">
            <div className="container">
              <Table striped className="text-white text-center driver my-3">
                <thead className="driver-table">
                  <tr>
                    <th>No</th>
                    <th>Meals Request List</th>
                    <th>Status</th>
                    <th>order on</th>
                    <th>action</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  {orderList.map((order, index) => (
                    <tr key={order.id}>
                      <td className="text-success">{index + 1}</td>
                      <td className="text-success">
                        {order.mealPackage.packageName}
                      </td>
                      <td className="text-success">
                        <div className="status text-success d-flex justify-content-center">

                          <span className="fw-bold ms-3">
                            {order.orderStatus}
                          </span>
                        </div>
                      </td>
                      <td className="text-success">
                        {new Date(order.orderOn)
                          .toLocaleString("en-GB", {
                            timeZone: "Asia/Singapore",
                            hour12: true,
                          })
                          .slice(11, 30)}
                      </td>
                      <td className="text-success">
                        {order.orderStatus === "PENDING" ? (
                          <Button
                            size="sm"
                            variant="success"
                            onClick={() => handlePrepare(order.id)}
                            className="w-50"
                          >
                            Approve
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="danger"
                            onClick={() => handleComplete(order.id)}
                            className="w-50"
                          >
                            Deliver
                          </Button>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </div>
        </div>
      </Container>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton className="modal-popup bg-success">
          <div className="text-center">
            <Modal.Title className="text-white fw-bold">
              Add New Meal
            </Modal.Title>
          </div>
        </Modal.Header>
        <Modal.Body className="modal-popup bg-success">
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="packageName">
              <Form.Label className="text-white fw-bold">
                Meal Name
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your meal Name"
                onChange={(e) => setPackageName(e.target.value)}
                value={packageName}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="mainCourse">
              <Form.Label className="text-white fw-bold">
                Main Meal
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Heavy food like Rice/noodles/curry"
                onChange={(e) => setMainCourse(e.target.value)}
                value={mainCourse}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="drink">
              <Form.Label className="text-white fw-bold">Drinks</Form.Label>
              <Form.Control
                type="text"
                placeholder="Juice/Bevarege/Normal Water"
                onChange={(e) => setDrink(e.target.value)}
                value={drink}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3 mx-3" controlId="frozen">
              <Form.Label>Meal Type</Form.Label>
              <Form.Select
                aria-label="Default select example"
                onChange={(e) => {
                  setFrozen(e.target.value);
                }}
                value={frozen}
                required
              >
                <option disabled>Frozen or not?</option>
                <option defaultValue={true} value="1">
                  Yes
                </option>
                <option value="0">No</option>
              </Form.Select>
            </Form.Group>
            <Form.Group className="mb-3 mx-3" controlId="file">
              <Form.Label>Image Upload</Form.Label>
              <Form.Control
                type="file"
                onChange={(e) => setImage(e.target.files[0])}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="dessert">
              <Form.Label className="text-white fw-bold">Meal Deatils</Form.Label>
              <Form.Control
                type="text"
                textarea="Enter meal details"
                onChange={(e) => setDessert(e.target.value)}
                value={dessert}
                autoFocus
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <div className="text-center modal-popup p-3">
          <Button
            type="submit"
            onClick={handleSubmit}
            className="button btn-success text-light fw-bold w-50"
          >
            Submit
          </Button>
        </div>
      </Modal>
    </Layout>
  );
};

export default PartnerHomePage;
