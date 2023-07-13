import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'
import SeekerService from '../Services/SeekerService'

const ViewSeeker=() =>{

    const[seeker,setSeeker]= useState([])

useEffect(()=>{

  getAllSeekers();

},[])

const getAllSeekers=()=>{
  SeekerService.getAllSeekers().then((Response)=>{
    setSeeker(Response.data)
    console.log(Response.data);
  }).catch(error =>{
    console.log(error);
  })
}

const deleteSeeker=(seekerid)=>{
  console.log(seekerid)
  SeekerService.deleteSeeker(seekerid).then((Response)=>{
    getAllSeekers();

  }).catch(error =>{
    console.log(error);
  })
}

    return(
        <div className='container'>
          <br />
            <div className='d-flex'>
                    <h1 className= 'p-0 mx-auto fw-semibold' style={{ color: "#4682b4", textAlign: "justify" }}> List Of Seekers</h1>
                </div>
            <br/>
            <table className="table table-bordered table-striped ">
            <thead className='br-warning'>
                  <tr className='table-primary text-center'>
                <th>SeekerId</th>
                <th>Name</th>
                <th>Age</th>
                <th>Mobile</th>
                <th>Location</th>
                <th>Gender</th>
                <th>Email</th>
                <th>BloodGroup</th>
                <th>Quantity</th>
                <th>Actions</th>
                </tr>
                </thead>
                
                <tbody>
                    {
                        seeker.map(
                            seeker=>
                            <tr key= {seeker.id}>
                                <td>{seeker.seeker_id}</td>
                                <td>{seeker.name}</td>
                                <td>{seeker.age}</td>
                                <td>{seeker.contact_number}</td>
                                <td>{seeker.location}</td>
                                <td>{seeker.gender}</td>
                                <td>{seeker.email}</td>
                                <td>{seeker.blood_group}</td>
                                <td>{seeker.quantity}</td>
                                <td>
                                <button className='btn btn-danger' onClick={()=> deleteSeeker(seeker.seeker_id)}
                                  style={{marginLeft:"10px"}}>Delete</button>
                                </td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
            <center>
                    <Link to="/AddSeeker" className="btn btn-primary mb-2">Add Seeker</Link>
                    </center>
                   <br/>
                   
                  
        </div>

    )
}

export default ViewSeeker