import React,{useEffect} from "react";
import SectionHeading from "./SectionHeading";

const CustomSection = (props) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <React.Fragment>
      <section>
        <div className="section-inner-wrapper" style={{background: props.bgColor}}>
          <div className="container">
            <SectionHeading sectionHeader={props.sectionTitle} />
            <div className="children-wrapper">
            {props.children}
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default CustomSection;
