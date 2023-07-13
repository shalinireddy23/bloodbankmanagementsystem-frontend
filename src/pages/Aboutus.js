import React from "react";
import pic from "../images/about.jpg";

const Aboutus = () => {
  return (
    <div className="container mt-4">,
      <div className="row align-items-center">
        <div className="col-md-6">
          <img src={pic} alt="About Us" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column">
          <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#800000', textAlign: 'center' }}>
            About Us
            </h1>
            <p>
            Welcome to our Blood Bank Management App, a revolutionary platform designed to streamline
            and optimize the process of managing and distributing blood donations.
            Our app aims to bridge the gap between blood donors, recipients, and blood banks,
            ensuring a seamless and efficient blood donation ecosystem.
            </p>
            <p>
            At our core, we are driven by the mission to save lives by making blood donation accessible to those in need, 
            while providing a user-friendly and technologically advanced platform for blood banks to manage their operations effectively. 
            Our app offers a range of features and services that cater to the needs of various stakeholders involved in the blood donation process.
            </p>
            <p>
            Join us in our mission to make blood donation a simple, efficient, and lifesaving process. 
            Together, we can make a difference and contribute to saving lives, one donation at a time.
            </p>
          </div>
        </div>
      </div>              
    </div>
  );
};

export default Aboutus;