import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import DonorService from '../Services/DonorService';

const ViewDonor = () => {
  const [donor, setDonor] = useState([]);

  useEffect(() => {
    getAllDonors();
  }, []);

  const getAllDonors = () => {
    DonorService.getAllDonors()
      .then((Response) => {
        setDonor(Response.data);
        console.log(Response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteDonor = (donorid) => {
    console.log(donorid);
    DonorService.deleteDonor(donorid)
      .then((Response) => {
        getAllDonors();
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className='container'>
      <br />
      <div className='d-flex'>
        <h1 className='p-0 mx-auto fw-semibold' style={{ color: '#4682b4', textAlign: 'justify' }}>
          List Of Donors
        </h1>
      </div>
      <br />
      <div className='row'>
        {donor.map((donor) => (
          <div className='col-md-4 mb-4' key={donor.id}>
            <div className='card' style={{ borderBottomLeftRadius: '15px', borderBottomRightRadius: '15px' }}>
              <div className='card-body'>
                <center><h5 className='card-title font-weight-bold'><b>Donor ID: {donor.donor_id}</b></h5></center>
                <p className='card-text font-weight-bold'>
                  <strong>Name:</strong> {donor.name}
                  <br />
                  <strong>Age:</strong> {donor.age}
                  <br />
                  <strong>Mobile:</strong> {donor.contact_number}
                  <br />
                  <strong>Location:</strong> {donor.location}
                  <br />
                  <strong>Gender:</strong> {donor.gender}
                  <br />
                  <strong>Email:</strong> {donor.email}
                  <br />
                  <strong>Blood Group:</strong> {donor.blood_group}
                  <br />
                  <strong>Quantity:</strong> {donor.quantity}
                  <br />
                  <strong>Blood Bank Name:</strong> {donor.bloodBank.name}
                </p>
                <div className='d-flex justify-content-between'>
                  <Link className='btn btn-info' to={`/edit-donor/${donor.donor_id}`}>
                    Update
                  </Link>
                  <button
                    className='btn btn-danger'
                    onClick={() => deleteDonor(donor.donor_id)}
                    style={{ marginLeft: '1px' }}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <center>
        <Link to='/AddDonor' className='btn btn-primary mb-2'>
          Add Donor
        </Link>
      </center>
    </div>
  );
};

export default ViewDonor;