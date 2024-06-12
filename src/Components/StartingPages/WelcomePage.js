import React from "react";
import Card from "../Layout1/UserDetalsCom/Card";

const WelcomePage = () => {
  return (
    <div className="container pt-5">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-8 text-center">
          <h1 className="mb-4 text-primary poppins-bold">Welcome, Touseef</h1>
        </div>
      </div>
      <div className="row justify-content-center mt-0">
        <div className="col-lg-12">
          <Card />
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
