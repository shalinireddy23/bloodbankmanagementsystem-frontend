import React from "react";
import pic from "../images/donate.jpg";

const Whydonate = () => {
  return (
    <div className="container mt-4">
      <div className="row align-items-center">
        <div className="col-md-6">
        <br/><br/>
          <img src={pic} alt="Why Donate??" className="img-fluid" />
        </div>
        <div className="col-md-6">
          <div className="d-flex flex-column">
          <br/>
          <h1 style={{ fontSize: '40px', fontWeight: 'bold', color: '#800000', textAlign: 'center' }}>
            Why Donate Blood?
            </h1>
            <p>
            <br/>
            Blood is often described as the most precious gift one can give. 
            It is a vital resource that cannot be manufactured or replaced by any artificial means.
            Every donation has the potential to save lives and bring hope to those in need. 
            Whether it's a patient undergoing a critical surgery, a child fighting leukemia,
            or an accident victim in urgent need of a transfusion, donated blood can provide a lifeline.
            By giving a part of ourselves, we have the power to make a tangible impact on the lives of others,
            offering them a chance for recovery, healing, and a brighter future. 
            Your decision to donate blood can truly be a life-saving act,
            and a testament to the compassion and empathy within each of us.</p>
          </div>
        </div>
      </div><br/> <br/> <br/>
    </div>
  );
};

export default Whydonate;