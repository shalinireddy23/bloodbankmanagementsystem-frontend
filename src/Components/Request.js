import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BloodDetailsService from "../Services/BloodDetailsService";
import SeekerService from "../Services/SeekerService";

 

const Request = () => {
  const [blooddetails, setBloodDetails] = useState([]);
  const [quant, setQuant] = useState(0);
  const [selectedBloodBank, setSelectedBloodBank] = useState(null);
  const history = useNavigate();
  let seekerrequest;
  const { id } = useParams();

 

  useEffect(() => {
    SeekerService.getSeekerById(id).then((Response) => {
      console.log(Response.data);
      seekerrequest = Response.data;
      BloodDetailsService.getBloodBankByBloodGroup(seekerrequest.blood_group)
        .then((Response) => {
          const data = Response.data;
          const responsedata = data.filter((item) => {
            if (item.quantity > seekerrequest.quantity) {
              setQuant(seekerrequest.quantity);
              return item;
            }
          });
          setBloodDetails(responsedata);
          console.log(Response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }, [blooddetails.quantity]);

 

  const updateBloodDetailsQuantity = (id, group, quantity) => {
    console.log(quant);
    console.log("shalu");
    console.log(id, group, quantity);

 

    try {
      console.log("request sent");
      setSelectedBloodBank({ id, group, quantity });
    } catch (error) {
      console.log(error);
    }
  };

 

  const closeModal = () => {
    setSelectedBloodBank(null);
  };

 

  const confirmRequest = () => {
    const { id, group, quantity } = selectedBloodBank;
    BloodDetailsService.updateBloodDetailsQuantity(id, group, quantity)
      .then(() => {
        closeModal();
        alert("Request accepted!");
        history("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };

 

  return (
<div className="container">
<br />
<h1  className='p-0 mx-auto fw-semibold' style={{ color: '#4682b4', textAlign: 'center' }}>AVAILABLE BLOODBANKS</h1>
<br/>
<div className="row">
        {blooddetails.map((blooddetails) => (
<div className="col-md-4 mb-4" key={blooddetails.id}>
<div className="card">
<div className="card-body ">
<h5 style={{fontWeight:'bold',color: "black"}} className="card-title"><center>BLOOD GROUP: {blooddetails.bloodGroup}</center></h5>
<br/>
<p className="card-text"><b>Quantity:</b> {blooddetails.quantity}</p>
<p className="card-text"><b>Blood Bank Name:</b> {blooddetails.bloodBank.name}</p>
<p className="card-text"><b>Location:</b> {blooddetails.bloodBank.location}</p>
<p className="card-text"><b>Contact Number:</b> {blooddetails.bloodBank.contact_number}</p>
<p className="card-text"><b>Email: </b>{blooddetails.bloodBank.email}</p>
<center>
<button
                  className="btn btn-danger"
                  onClick={() => updateBloodDetailsQuantity(blooddetails.bloodBank.bloodBankId, blooddetails.bloodGroup, quant)}
>
                  Request
</button>
</center>
</div>
</div>
</div>
        ))}
</div>


      {selectedBloodBank && (
        <div className="modal" style={{ display: "block" }}>
        <div className="modal-dialog">
        <div className="modal-content">
        <div className="modal-header">
            <h5 className="modal-title">Confirm Request</h5>
            <button type="button" className="close" onClick={closeModal}>
                 <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div className="modal-body">
            <p>Are you sure you want to request blood from this blood bank?</p>
        </div>
        <div className="modal-footer">
        <button type="button" className="btn btn-secondary" onClick={closeModal}>
                  Cancel
        </button>
        <button type="button" className="btn btn-primary" onClick={confirmRequest}>
                  Confirm
        </button>
        </div>
    </div>
    </div>
</div>
      )}
      <br/><br/><br/>
</div>
  );
};

 

export default Request;