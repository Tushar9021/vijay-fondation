import React from "react";

const SectionHeading = (props) => {
  return (
    <React.Fragment>
     <div className="section-header-wrapper">
         <div className="section-header">
            <h2>{props.sectionHeader}</h2>
         </div>
     </div>
    </React.Fragment>
  );
};

export default SectionHeading;
