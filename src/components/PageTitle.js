import React from "react";

const PageTitle = (props) => {
  return (
    <React.Fragment>
      <section className="page-title-wrapper">
        <div className="page-title">
          <h1>{props.pageTitle}</h1>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PageTitle;
