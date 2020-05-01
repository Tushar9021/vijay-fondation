import React from "react";
import Navbar from "../components/Navbar";
import CustomSection from "../components/Section";
import Footer from "../components/Footer";

const PageNotFound = (props) => {
  return (
    <React.Fragment>
      <Navbar />
      <CustomSection sectionTitle="" bgColor="#f2f0eb">
        <div className="row">
          <div className="page-not-found-wrapper" >
          <h1 style={{textAlign: 'center'}}>Page Not Found - 404</h1>
          </div>
        </div>
      </CustomSection>
      <Footer/>
    </React.Fragment>
  );
};

export default PageNotFound;
