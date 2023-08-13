import { Col, Row, Button } from "react-bootstrap";
import {
  aboutbanner,
  herobg1,
  staff1,
  staff2,
  staff3,
  cafe,

  bla,
} from "../assets";
import Layout from "../components/layout/Layout";
import { Link } from "react-router-dom";

import { motion } from "framer-motion";

import "./css/AboutPage.css";

const AboutPage = () => {
  return (
    <Layout>
      <div className="hero animate__animated animate__fadeIn">
        <img src={aboutbanner} alt="hero" />
        <h1>About Us</h1>
      </div>
      <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
        <div
          className="row flex-lg-row-reverse align-items-center g-5 py-5"
          bis_skin_checked="1"
        >
          <div
            className="col-10 col-sm-8 col-lg-6 animate__animated animate__fadeInRightBig"
            bis_skin_checked="1"
          >
            <motion.img
              src={cafe}
              className="d-block mx-lg-auto img-fluid banner rounded"
              alt="Bootstrap Themes"
              loading="lazy"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
          </div>

          <div
            className="col-lg-6 animate__animated animate__fadeInLeftBig"
            bis_skin_checked="1"
          >

            <div className="hr-purple"></div>



            <p className="paraa" align="justify">
              MerryMeal	is	a	charitable	organization	 that	prepares	and	delivers	a	hot	noon	meal	 to	qualified	adults	living	at
              home	who	are	unable	to	cook	for	themselves	or	maintain	their	nutritional	status	due	to	age,	disease,	or	disability.
              The	service	will	be	available	Monday	 through	Friday.	<br></br>

              Frozen	meals	will	be	provided	 to	members	who	are	not	within	 a	 10-kilometer	 radius	 of	 their	 outsourced	 kitchens	 and	 support	 over	 the	 weekend.	 MerryMeal has
              partnered	with	several	food	service	providers	across	the	country	to	provide	the	quickest	delivery	possible. Meary Meal is solving nutritional status of our aged community. MerryMeal provides food to more than 550 food banks, shelters, and meal programs across Western Singapore.
            </p>
          </div>


        </div>
      </div>


      <div className="staff mb-5 bg-success">
        <div className="container bg-success text-center py-5 animate__animated animate__fadeInUpBig">
          <h1 className="team fw-bold">
            Meet Our Team Leaders
          </h1>

          <Row>
            <Col className="my-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={staff1}
                  alt="person"
                  className="staff rounded-squre"
                />
                <h5 className="fw-bold">General Manager</h5>
                <h3 className="fw-bold py-1"> Elmira Zoif</h3>
                <p align="justify"> leads the operation of the restaurants. The
                  Restaurant General Manager has the overall responsibility for directing the
                  daily operations of the restaurant, ensuring compliance with company
                  standards in all areas of operation, including product preparation and delivery,
                  customer relations, restaurant maintenance and repair, inventory
                  management, team management, hiring, termination and retention
                  of team members, financial accountability, and ensuring that the highest
                  quality products and services are delivered to each customer</p>
                <Link to="/contact">
                  <Button
                    variant="light"
                    className="me-0 me-md-3 mb-md-0 mb-5 bg-light fw-bold btn-register mt-3"
                  >
                    Messege
                  </Button>
                </Link>
              </motion.div>
            </Col>
            <Col className="my-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={staff2}
                  alt="person"
                  className="staff rounded-squre"
                />
                <h5 className="fw-bold">Assistant Manager</h5>
                <h3 className="fw-bold py-1">Noah Petric</h3>
                <p align="justify">Areas of responsibility include Restaurants/Bars and Room Service, if applicable. Assists in the daily supervision of
                  restaurant operations and assists with menu planning maintaining sanitation standards and assists servers and hosts on the
                  floor during peak meal periods. Strives to continually improve guest and employee satisfaction. Determines training needed
                  to accomplish goals, then implements plan and a professional who is in charge of making sure that everything runs smoothly at your local restaurant</p>
                <Link to="/contact">
                  <Button
                    variant="light"
                    className="me-0 me-md-3 mb-md-0 mb-5 bg-light fw-bold btn-register mt-3"
                  >
                    Messege
                  </Button>
                </Link>
              </motion.div>
            </Col>
            <Col className="my-3">
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <img
                  src={staff3}
                  alt="person"
                  className="staff rounded-squre"
                />
                <h5 className="fw-bold"> Executive Chef</h5>
                <h3 className="fw-bold py-1">David Hope</h3>
                <p align="justify">Attentive chef with seven years of experience in Italian cuisine  Well-versed in managing kitchens that serve up to
                  70 tables. Credentials include the ability to motivate staff and to ensure cohesive kitchen operations.
                  Emphasis on creating innovative dishes, using fresh, seasonal produce, and meeting a wide range of dietary limitations and Obtaining
                  feedback on food and service quality, and handling customer problems and complaints  and Reviewing staffing levels to meet service, operational,
                  and financial objectives.</p>
                <Link to="/contact">
                  <Button
                    variant="light"
                    className="me-0 me-md-3 mb-md-0 mb-5 bg-light fw-bold btn-register mt-3"
                  >
                    Messege
                  </Button>
                </Link>


              </motion.div>
            </Col>

          </Row>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
