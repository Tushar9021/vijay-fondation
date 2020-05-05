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

const NewSchemes = (props) => {
  let params = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <React.Fragment>
      <Navbar />
      <PageTitle pageTitle="New Schemes" />

      <CustomSection bgColor="#f2f0eb"></CustomSection>
            Work in progress
      <Footer />
    </React.Fragment>
  );
};

export default NewSchemes;
