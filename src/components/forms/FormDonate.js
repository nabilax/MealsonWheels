import { Form, Button } from "react-bootstrap";
import "./Form.css";
import { bannerDonate, dona } from "../../assets";
import { motion } from "framer-motion";

const FormDonate = () => {
  return (
    <div className="container d-flex justify-content-center" >
    <div className="col-xxl-8 px-4 py-5 bg-success" >
      
        <h3 className="contact-title mx-3 text-white text-center" >
        You Can Make a Difference
        </h3>
        <hr className="text-white" />
       
       
         <Form className="px-3 text-white text-center" action="/create-checkout-session" method="POST">
          
         <div className="col-10 col-sm-8 col-lg-6 animate__animated animate__fadeInRightBig position-relative">
            <motion.img
              src={dona}
              className="d-block mx-lg-auto img-fluid banner rounded"
              alt="Bootstrap Themes"
              loading="lazy"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            />
           
          </div>
        <div className="py-3">
          
          <p className="text-center" align="justify">
             Help us make a difference in the lives of the elderly by making a donation today. 
             Your kindness will bring comfort and support to those in need and will make a lasting impact on their well-being. 
             Your generosity will help us to continue our mission of providing care, assistance, and resources to seniors in our community. 
             Every donation, no matter the size, is greatly appreciated and will bring hope and happiness to the elderly. 
             Together, we can make a brighter future for our aging population. 
             Thank you for your support.
         </p>
         <Button type="submit" className="button fw-bold my-5 btn-warning text-white" size="lg">
           Donate Now
         </Button>
       </div>
       </Form>
        </div>
      
    </div>
 
  )
}

export default FormDonate;

