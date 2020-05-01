import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import CustomSection from "../components/Section";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import {Link} from 'react-router-dom';
import { useParams } from "react-router";
import services from "../data/services";
import "../css/ServicesDetail.css";

const ServicesDetail = (props) => {
  let params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
 
 let serviceData;
  services.map((service) => {
    if (params.serviceId === service.serviceTitle) {
      serviceData = service;
    }
  });

 
//   const serviceDetail = useSelector((state) => state.services.serviceDetail);

//   const [data, setData] = useState([]);

//  useEffect(()=>{
//    const newData = localStorage.getItem('dataObject');
//   setData(JSON.parse(newData));
//   },[])

//   useEffect(()=>{
//    localStorage.setItem('dataObject', JSON.stringify(serviceDetail));
//   })

  return (
  
    <React.Fragment >
      <Navbar />
      <PageTitle pageTitle="Services" />
      <div className="CustomSection">
      <CustomSection sectionTitle={serviceData.serviceTitle} bgColor="#f2f0eb">
          <div className="main-wrapper">
            <div className="image">
              <img src={serviceData.servieImageUrl} />
            </div>
            <div className="subServices-wrapper">
              {serviceData.subServices.map((detail, key) => {
                
                return<Link  to={`/contact-us/${detail}`} > <p key={key}>{detail}</p></Link>;
              })}
            </div>
          </div>
        
      </CustomSection>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ServicesDetail;
