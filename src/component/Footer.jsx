import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as IconTelephone } from "bootstrap-icons/icons/telephone.svg";
// import { ReactComponent as IconEnvelope } from "bootstrap-icons/icons/envelope.svg";
import { ReactComponent as IconBriefcase } from "bootstrap-icons/icons/briefcase.svg";
import { ReactComponent as IconBadgeAd } from "bootstrap-icons/icons/badge-ad.svg";
import { ReactComponent as IconGift } from "bootstrap-icons/icons/gift.svg";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faTwitter, faFacebookF, faInstagram, faYoutube, faApple, faWindows, faAndroid,} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>        
        <div className="container-fluid bg-dark text-white">
          <div className="row ">
            <div className="col-md-3 py-3">
              <div className="h6">Company Name</div>
              <hr />
              <p className=" text-white">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Products</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Electronics
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Mobiles
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Car & bike
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Super Market
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Travel Cards
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Policy</div>
              <hr />
              <ul className="list-group list-group-flush">
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Return Policy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Terms Of Use
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Security
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    Privacy
                  </Link>
                </li>
                <li className="list-group-item bg-dark text-white border-light">
                  <Link
                    to="/"
                    className="text-decoration-none text-white stretched-link"
                  >
                    EPR Compliance
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 py-3">
              <div className="h6">Address</div>
              <hr />
              <div className="h6">Customer Care</div>
              <hr />
              <IconTelephone /> +1800 100 1000
              <br />
            </div>
          </div>
        </div>
        <div className="container-fluid bg-secondary text-white text-center">
          <center>
            <div className="row">
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconBriefcase className="text-warning" /> Partner with us
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconBadgeAd className="text-info" /> Advertise
              </Link>
            </div>
            <div className="col-md-2 py-2">
              <Link to="/" className="text-white text-decoration-none">
                <IconGift className="text-dark" /> Gift
              </Link>
            </div>
            <div className="col-md-3 py-2">
              @{new Date().getFullYear()} Shope.com
            </div>
            
          </div>
          </center>
        </div>
      </footer>
    </React.Fragment>
  );
};
export default Footer;
