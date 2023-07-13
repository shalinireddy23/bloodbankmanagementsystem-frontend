import React,{useEffect, useState} from "react";
import BloodDetailsService from "../Services/BloodDetailsService";
import { Link } from 'react-router-dom';

const BloodDetails=()=>{

    const [blooddetails, setBloodDetails] =useState([])

    useEffect(() =>{
        BloodDetailsService.getAllBloodDetails().then((Response)=>{
                setBloodDetails(Response.data)
                console.log(Response.data);
        }).catch(error =>{
            console.log(error);
        })
    },[])

    return(
        <div className="container">
            <br/>
            <div className='d-flex'>
                    <h1 className= 'p-0 mx-auto fw-semibold' style={{ color: "#4682b4", textAlign: "justify" }}> Blood-Details</h1>
                </div>
            <div className="table-responsive mx-5">
            <table className="table table-primary table-bordered table-striped">
                <thead>
                    
                    <th>Blood Id</th>
                    <th>Blood Group</th>
                    <th>Quantity</th>
                    <th>BloodBankName</th>
                    <th>Location</th>
                    <th>ContactNumber</th>
                    <th>Email</th> 
                   
                </thead>
                <tbody>
                    {
                        blooddetails.map(
                            blooddetails =>
                            <tr key={blooddetails.id}>
                                <td>{blooddetails.blood_id}</td>
                                <td>{blooddetails.bloodGroup} </td>
                                <td>{blooddetails.quantity} </td>
                                <td>{blooddetails.bloodBank.name}</td>
                                <td>{blooddetails.bloodBank.location}</td>
                                <td>{blooddetails.bloodBank.contact_number}</td>
                                <td>{blooddetails.bloodBank.email}</td>
                            </tr>
                        )
                    }
                </tbody>
                
            </table>
            <center>
            <Link to ="/AddBloodDetails" className="btn btn-primary mb-2" >Add BloodDetails </Link>
            </center>
            </div>
        </div>
    );

}

export default BloodDetails