import React,{useEffect} from "react";
import Navbar from "../components/Navbar";
import CustomSection from "../components/Section";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import "../css/aboutus.css";
import TEAM from "../data/team";

const ContactUs = (props) => {

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])


  return (
    <React.Fragment>
      <Navbar />
      <PageTitle pageTitle="About Us" />
      <CustomSection bgColor="#f2f0eb">
        <div className="who-we-are-wrapper">
          <div className="row flex-sm-row-reverse">
            <div className="col-12 col-md-6 order-2">
              <div className="section-content">
                <div className="section-title">
                  <h3>Who we are</h3>
                </div>
                <div className="section-data">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, aliquid repellat pariatur, eius voluptates natus
                    architecto sit consequatur atque officia laudantium soluta
                    est facere. Minus, doloremque magnam veniam culpa velit
                    adipisci temporibus. Tempora sint inventore dignissimos
                    autem aliquam atque nostrum?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 order-1">
              <div className="section-image-wrapper">
                <img
                  src={require("../assets/images/carousel_images/hero-image-one.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </CustomSection>

      <CustomSection>
        <div className="who-we-are-wrapper">
          <div className="row">
            <div className="col-12 col-md-6 order-2">
              <div className="section-content">
                <div className="section-title">
                  <h3>Our Values</h3>
                </div>
                <div className="section-data">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Unde, aliquid repellat pariatur, eius voluptates natus
                    architecto sit consequatur atque officia laudantium soluta
                    est facere. Minus, doloremque magnam veniam culpa velit
                    adipisci temporibus. Tempora sint inventore dignissimos
                    autem aliquam atque nostrum?
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 order-1">
              <div className="section-image-wrapper">
                <img
                  src={require("../assets/images/carousel_images/hero-image-three.jpg")}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </CustomSection>
      <CustomSection sectionTitle="Our Team" bgColor="#f2f0eb">
        <div className="row">
          {TEAM.map((teamMember, key) => {
            return (
              <div key={key} className="col-6 col-md-3 ">
                <div className="card-wrap">
                  <div className="card-image-wrap">
                    <img src={teamMember.image} alt="Not Found" />
                  </div>
                  <div className="card-data-wrap">
                    <div className="card-title">
                      <h6>{teamMember.title}</h6>
                    </div>
                    <div className="card-designation">
                      <p>{teamMember.designation}</p>
                    </div>
                    <div className="card-social-connect">
                      <ul>
                        <li>
                          <i className="fab fa-facebook-square"></i>
                        </li>
                        <li>
                          <i className="fab fa-twitter-square"></i>
                        </li>
                        <li>
                          <i className="fab fa-instagram-square"></i>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </CustomSection>

      <Footer />
    </React.Fragment>
  );
};

export default ContactUs;
