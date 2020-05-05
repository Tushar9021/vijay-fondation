import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import CustomSection from "../components/Section";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
// import { Link } from "react-router-dom";
import { useParams } from "react-router";
import services from "../data/services";
import "../css/ServicesDetail.css";
import cimage from "../assets/images/carousel_images/hero-image-one.jpg";

const ServicesDetail = (props) => {
  let params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  let serviceData;
  services.map((service) => {
    if (params.serviceId === service.serviceTitle) {
      return (serviceData = service);
    }
    return null;
  });

  const updatedServiceTitle =
    serviceData.serviceTitle.slice(0, 1) +
    serviceData.serviceTitle.slice(1).toLowerCase();

  return (
    <React.Fragment>
      <Navbar />
      <PageTitle pageTitle={updatedServiceTitle + ` Services`} />

      <CustomSection bgColor="#f2f0eb">
        {/* <div className="main-wrapper">
            <div className="image">
              <img src={serviceData.servieImageUrl} />
            </div>
            <div className="subServices-wrapper">
              {serviceData.subServices.map((detail, key) => {
                
                return<Link  to={`/contact-us/${detail}`} > <p key={key}>{detail}</p></Link>;
              })}
            </div>
          </div> */}

        <div className="single-service-outer-wrapper">
          <div className="row service-row">
            {serviceData.subServices.map((service, key) => {
              console.log(service);
              
              return (
                <div key={key} className="std-margin col-6 col-sm-4 col-md-4 col-lg-3">
                  <div className="h-100 service-card-wrapper">
                    <div className="service-image-wrapper">
                      <img src={cimage} alt="Not Found" />
                    </div>
                    <div className="service-card-info">
                      <div className="service-title-data">
                        <h6>{service}</h6>
                        {/* <small>Know more</small> */}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </CustomSection>

      <Footer />
    </React.Fragment>
  );
};

export default ServicesDetail;
