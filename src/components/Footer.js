import React, { useEffect } from "react";
import CustomSection from "../components/Section";
import SERVICES from "../data/services";
import { Link } from "react-router-dom";
const Footer = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <React.Fragment>
      <CustomSection bgColor="#313131">
        <div className="row" style={{ color: "#ffffff" }}>
          <div className="col-12 col-md-4">
            <div className="footer-section-title">
              <h6>About Us</h6>
            </div>
            <div className="footer-data">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consequuntur corporis quaerat tenetur deserunt quo! Itaque
                beatae facilis aspernatur veniam quae explicabo placeat quia
                voluptates neque?
              </p>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="footer-section-title">
              <h6>Services</h6>
            </div>
            <div className="footer-data">
              <ul className="services-list">
                {SERVICES.map((service, key) => {
                  const updatedServiceTitle =
                    service.serviceTitle.slice(0, 1) +
                    service.serviceTitle.slice(1).toLowerCase();

                  return (
                    <Link key={key} to={`/services/${service.serviceTitle}`}>
                      <li>{updatedServiceTitle}</li>
                    </Link>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="footer-section-title">
              <h6>Connect</h6>
            </div>
            <div className="footer-data">
              <ul className="connect-list">
                <li>
                  <i className="fas fa-home"></i>Digital E-Seva Pvt Ltd
                </li>
                <li>
                  <i className="fas fa-phone-alt"></i> 98xxxxxx54
                </li>
                <li>
                  <i className="fas fa-envelope"></i> test@mail.com
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-12">
            <div className="subfooter-wrapper">
              <small>
                &copy; All rights reserved. Digital E-Seva Pvt. Ltd.
              </small>
              <small>
                {" "}
                Developed By{" "}
                <a
                  href="https://sagarshelke-77.firebaseapp.com/"
                  rel="noopener  noreferrer "
                  target="_blank"
                >
                  Sagar Shelke
                </a>{" "}
                &#x26;{" "}
                <a
                  href="https://sagarshelke-77.firebaseapp.com/"
                  target="_blank"
                  rel="noopener  noreferrer "
                >
                  Tushar Shelke
                </a>
              </small>
            </div>
          </div>
        </div>
      </CustomSection>
    </React.Fragment>
  );
};

export default Footer;
