import React ,{useEffect} from "react";
import Navbar from "../components/Navbar";
import CustomSection from "../components/Section";
import Footer from "../components/Footer";
import PageTitle from "../components/PageTitle";
import {useParams} from 'react-router'
import "../css/contactus.css";

const ContactUs = (props) => {
let params = useParams();
let description;
  if(params.data==='OwnService')
  {
      description=" ";
  }
  else
  {
    description = params.data;
    
  }

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <React.Fragment>
      <Navbar />
      <PageTitle pageTitle="Contact Us" />
      <CustomSection sectionTitle="Get In Touch" bgColor="#f2f0eb">
        <div className="form-wrapper">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              <form action="">
                <div className="form-group">
                  <label htmlFor="">Name</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Email</label>
                  <input type="email" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Phone</label>
                  <input type="text" className="form-control" />
                </div>
                <div className="form-group">
                  <label htmlFor="">Description</label>
                  <textarea className="form-control" value={description}></textarea>
                </div>
                <div className="form-group">
                  <button className="btn  form-control">
                    SUBMIT
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </CustomSection>
      <div className="map-wrapper">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3728.6873744776617!2d75.65809731423266!3d20.844326986098643!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd974dc34e6de47%3A0xf4d9e6b0787f0705!2sNeri%20Toll%20Naka!5e0!3m2!1sen!2sin!4v1587738233809!5m2!1sen!2sin"
          style={{ height: 350, width: "100%" }}
          frameborder="0"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
          title="my-location"
        ></iframe>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ContactUs;
