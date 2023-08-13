import { Button, Col, Row } from "react-bootstrap";
import {
  banner1,

  un,

} from "../assets";
import { Link } from "react-router-dom";
import Layout from "../components/layout/Layout";
import { motion } from "framer-motion";

import "./css/HomePage.css";

const HomePage = () => {
  return (
    <Layout>
      <div className="un animate__animated animate__fadeIn">
        <img src={un} alt="un" />
        <h1 className="fresh display-5 fw-bold lh-1 mb-3 ">HOT NOON MEAL FOR <br></br> AGED, DISEASED & DISABLED ADULTS </h1>
      </div>
      <header style={{ paddingLeft: 0 }}>
        <div
          className='p-5 text-center bg-image'
          style={{ backgroundImage: "url(/bannerimage.jpg)", }}
        >
          <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.6)' }}>
            <div className='d-flex justify-content-center align-items-center h-100'>
              <div className='text-white'>
                <h1 className='mb-3'>If you want to be our partner, join with us is just one click away </h1>
                <h4 className='mb-3'> Be the reason to provide foods to helpless peoples through MerryMeals
                  Feed the peoples who is living as unable.</h4>
                <div style={{ marginBottom: '10px' }}>
                  <a className='btn btn-success btn-lg' href="/partnership" role='button'>
                    Register as a partner Now
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      );


      <div className="container col-xxl-8 px-4 py-5" bis_skin_checked="1">
        <div
          className="row flex-lg-row-reverse align-items-center g-5 py-5"
          bis_skin_checked="1"
        >
          <div className="col-10 col-sm-8 col-lg-6 animate__animated animate__fadeInRightBig position-relative">
            <motion.img
              src={banner1}
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
            <h1 className="display-5 fw-bold lh-1 mb-3 ">
              Service Available

            </h1>
            <h1 className="display-5 fw-bold lh-1 mb-3 ">

              Monday - Friday
            </h1>

            <p className="para">
              MerryMeal has
              partnered	with	several	food	service	providers	across	the	country	to	provide	the	quickest	delivery	possible.
            </p>
            <Link to="/donate">
              <Button
                variant="light"
                className="me-0 me-md-3 mb-md-0 mb-5 bg-success text-light fw-bold btn-register mt-3"
              >
                Donate Us
              </Button>
            </Link>
          </div>

        </div>
      </div>

    </Layout>
  );
};

export default HomePage;
