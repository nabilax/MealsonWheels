import { Link } from "react-router-dom";
import { fb, ig, tw, yt } from "../../assets";
import "./Footer.css";
import { logo} from "../../assets";

const Footer = () => {
  const link = "test";

  return (
    <footer>
      <div>
   

        <div className="footer">
          <div className="container" bis_skin_checked="1">
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-5 py-5 text-white">
              <div className="col mb-3" bis_skin_checked="1">
              <img src={logo} alt="" />
                <h3>Merry Meal</h3>
              
                
              </div>

              <div className="col mb-3" bis_skin_checked="1"></div>

              <div className="col mb-3" bis_skin_checked="1">
                <ul className="nav flex-column">
                <Link to="/about" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                      About Us
                    </li>
                  </Link>
                  <Link to="/contact" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                     Contact Us
                    </li>
                  </Link>
                  <Link to="/terms" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                      terms & Conditions
                    </li>
                  </Link>
                 
                  <Link to="/donate" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                      Donate
                    </li>
                  </Link>
                  <Link to="/partnership" className="text-decoration-none">
                    <li className="nav-item mb-2 nav-link p-0 text-white">
                      Partnership
                    </li>
                  </Link>
                </ul>
              </div>

              <div className="col mb-3" bis_skin_checked="1">
                <h5> Our Partners</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      KYM Partner
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                     XYK Partner
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      AAA Partner
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                     ACC Partner
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                    
                    </a>
                  </li>
                </ul>
              </div>

             

              <div className="col mb-3" bis_skin_checked="1">
                <h5>Social Media</h5>
                <ul className="nav flex-column">
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      MeerMeal.com
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      Facebook
                    </a>
                  </li>
                  <li className="nav-item mb-2">
                    <a href={link} className="nav-link p-0 text-white">
                      Instagram
                    </a>
                  </li>
              
                </ul>
                
              </div>
             
            </footer>
            
          </div>
        </div>
      </div>
      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2023 Copyright:
        <a className='text-reset fw-bold' href='#'>
          MerryMeal
        </a>
      </div>
    </footer>
  );
};

export default Footer;
