import React from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Carousel from "../components/Carousel";
import ImageOne from "../assets/images/carousel_images/hero-image-one.jpg";
import ImageTwo from "../assets/images/carousel_images/hero-image-two.jpg";
import ImageThree from "../assets/images/carousel_images/hero-image-three.jpg";
import CustomSection from "../components/Section";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

// import { showAllServices } from "../store/actions/serviceAction";
import Services from "..//data/services";
const Home = (props) => {
  const NewSchemes = useSelector((state) => state.services.newSchemes);

  // const dispatch = useDispatch();

  const servicesItem = Services.map((service, key) => {
    return (
      <div
        key={key}
        className=" col-6 col-sm-4 col-md-4 col-lg-3"
        // onClick={() => {
        //   dispatch(showAllServices(service.serviceTitle));
        // }}
      >
        <Link to={`/services/${service.serviceTitle}`}>
          <div className="custom-card">
            <div className="image-wrapper">
              <img src={service.servieImageUrl} alt="Not Found" />
            </div>
            <div className="service-title">
              <p>{service.serviceTitle}</p>
            </div>
          </div>
        </Link>
      </div>
    );
  });

  return (
    <React.Fragment>
      <Navbar />
      <Carousel
        imageOne={ImageOne}
        imageTwo={ImageTwo}
        imageThree={ImageThree}
      />
      <CustomSection sectionTitle="New Schemes">
        <div className="single-service-outer-wrapper">
          <div className="row service-row">
            {NewSchemes.map((scheme, key) => {
              return (
                <div
                  key={key}
                  className="std-margin col-6 col-sm-4 col-md-4 col-lg-2"
                >
                  <div className="h-100 service-card-wrapper">
                    <div className="service-image-wrapper">
                      <img src={ImageOne} alt="Not Found" />
                    </div>
                    <div className="service-card-info">
                      <div className="service-title-data">
                        <h6>{scheme.schemeName}</h6>
                        {/* <small>Know more</small> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="btn-wrapper">
            <Link to="/new-schemes">
            <button className="btn">VIEW ALL NEW SCHEMES</button>
            </Link>
          </div>
        </div>
      </CustomSection>
      <CustomSection sectionTitle="Services" bgColor="#f2f0eb">
        <div className="row">{servicesItem}</div>
      </CustomSection>
      <Footer />
    </React.Fragment>
  );
};

export default Home;
