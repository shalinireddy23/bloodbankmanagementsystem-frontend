import React,{useEffect, useState} from 'react'
import { ToastContainer } from 'react-toastify'
import DonorService from '../Services/DonorService'
import { useNavigate, useParams } from 'react-router-dom'

const AddDonor=() =>{

    const [name,setName]=useState("")
    const [contact_number,setPhoneNo]=useState("")
    const [age,setAge]=useState("")
    const [email,setEmail]=useState("")
    const [blood_group,setBloodGroup]=useState("")
    const [location,setLocation]=useState("")
    const [gender,setGender]=useState("")
    const [quantity,SetQuantity]=useState("")
    const [bloodBankId, setBloodBankId]=useState("")
    const [errors, setErrors] = useState({});
    const history=useNavigate();
    const {id}=useParams();

    const validateForm = () => {
        let formIsValid = true;    
        const newErrors = {};

        if (!name) {
            formIsValid = false;      
            newErrors.name= "Enter name";      
        }  

        if (!contact_number) {
            formIsValid = false;      
            newErrors.contact_number = "Please enter your phone number.";      
          } else if (!/^\d+$/.test(contact_number)) {      
            formIsValid = false;      
            newErrors.contact_number = "Phone number should contain digits only.";      
          } else if (contact_number.length !== 10) {      
            formIsValid = false;      
            newErrors.contact_number = "Phone number should be 10 digits long.";
          }  

        if (!age) {
            formIsValid = false;      
            newErrors.age= "Please enter your age.";      
          } else if (age < 0 || age > 100) {      
            formIsValid = false;      
            newErrors.age = "Age should be valid";      
          }

        if (!email) {
            formIsValid = false;      
            newErrors.email = "Please enter your email address.";      
          } else if (!email.includes("@")) {      
            formIsValid = false;      
            newErrors.email = "Please enter a valid email address.";      
        }

        
        if (!blood_group) {
            formIsValid = false;      
            newErrors.blood_group = "Please select a value";      
        }

        if(!location){
            formIsValid=false;
            newErrors.location="Please enter your location"
        }

        if (!gender) {
            formIsValid = false;      
            newErrors.gender = "Please select a value";      
        }

        if (!quantity) {
            formIsValid = false;      
            newErrors.quantity = "Please enter valid quantity";      
        }
        else if(quantity<0 ||quantity>50){
            formIsValid=false;
            newErrors.quantity="Quantity must be between 1 and 50"
        }
        if (!bloodBankId) {
            formIsValid = false;      
            newErrors.bloodBankId = "Please select a value";      
        }

        setErrors(newErrors);
        console.log(errors.quantity);
        return formIsValid;
        }
  
    const saveOrUpdateDonor =(e) =>{
        e.preventDefault();

        if(validateForm()){
    const donor={name,contact_number,age,email,blood_group,location,gender,quantity,bloodBank:{bloodBankId}}
    console.log("save or update"+bloodBankId);
    if(id){
        console.log("update"+bloodBankId)
        console.log(donor)
        DonorService.updateDonor(donor).then((Response) =>{
            console.log(Response.data)
            history("/ViewDonor")
        }).catch(error =>{
            console.log(error);
        })
        
    }else{
        DonorService.createDonor(donor).then((Response) =>{
            console.log(Response.data)
            // history('/welcome');
            alert("Successfully Added")
        }).catch(error =>{
            console.log(error)
        })
        }
    }
    }

    useEffect(()=>{
        console.log(id)
        DonorService.getDonorById(id).then((Response)=>{
            setName(Response.data.name)
            setPhoneNo(Response.data.contact_number)
            setAge(Response.data.age)
            setEmail(Response.data.email)
            setBloodGroup(Response.data.blood_group)
            setLocation(Response.data.location)
            setGender(Response.data.gender)
            SetQuantity(Response.data.quantity)
            setBloodBankId(Response.data.bloodBank.bloodBankId)
        }).catch(error=>{
            console.log(error)
        })
    },[])

    const title=()=>{
        if(id){
            return <h2 className='p-0 mx-auto fw-semibold' style={{ color: "#4682b4", textAlign: "justify" }}>Update Donor</h2>
        }else{
            return <h2 className='p-0 mx-auto fw-semibold' style={{ color: "#4682b4", textAlign: "justify" }}>Add Donor</h2>
        }
    }
    
    return (
            <div className='container-fluid'>
            <div className='d-flex'>
                    {
                        title()
                    }
                </div>
                <div className='d-flex'>
                    <h1 className=' p-0 mx-auto fs-5 fw-semibold' style={{ color: "#add8e6", textAlign: "justify" }}>Please enter the details carefully</h1>
                </div>
                <div className="row justify-content-center my-5">
                    <div className="col-lg-6">
                        <form className="row g-3" >
                            <div className="col-md-6">
                                <label htmlFor="fullname" className="form-label">Full Name</label>
                                <input 
                                type="text" 
                                name="name" 
                                className="form-control" 
                                id="fullname" 
                                placeholder='Enter Your Name' 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} />
                                 {errors.name && (<div className="text-danger">{errors.name}</div>)} 
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="phoneno" className="form-label">Phone No</label>
                                <input 
                                type="number"
                                name="contact_number" 
                                id="contact_number" 
                                className="form-control" 
                                placeholder="Phone Number" 
                                onChange={(e) => setPhoneNo(e.target.value)} 
                                value={contact_number} />
                                {errors.contact_number && (<div className="text-danger">{errors.contact_number}</div>)} 
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="age" className="form-label">Age</label>
                                <input type="number" 
                                name="age" 
                                id="quantity" 
                                className="form-control" 
                                placeholder="Age" 
                                onChange={(e) => setAge(e.target.value)} 
                                value={age} />
                                {errors.age && (<div className="text-danger">{errors.age}</div>)} 
                            </div>
                           
                            <div className="col-md-6">
                                <label htmlFor="location" className="form-label">Location</label>
                                <input 
                                type="text" 
                                name="location" 
                                className="form-control" 
                                id="location" 
                                placeholder='Enter Location' 
                                value={location} 
                                onChange={(e) => setLocation(e.target.value)} />
                                {errors.location && (<div className="text-danger">{errors.location}</div>)} 
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="email" className="form-label">Email Id</label>
                                <input type="email" 
                                name="email" 
                                className="form-control" 
                                id="email" 
                                placeholder='Enter EmailId' 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} />
                                {errors.email && (<div className="text-danger">{errors.email}</div>)} 
                            </div>
                            <div className="col-md-3">
                                <label htmlFor="gender" className="form-label">Gender</label>
                                <select id="gender" className="form-select" name='gender' onChange={(e) => setGender(e.target.value)} value={gender}>
                                    <option value={""}>Select...</option>
                                    <option>Male</option>
                                    <option>Female</option>
                                    <option>Others</option>
                                </select>
                                {errors.gender && (<div className="text-danger">{errors.gender}</div>)} 
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="bloodgroup" className="form-label">Blood Group</label>
                                <select id="bloodgroup" className="form-select" name='blood_group' value={blood_group} onChange={(e) => setBloodGroup(e.target.value)}>
                                    <option value={""}>Select...</option>
                                    <option>A+</option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                </select>
                                {errors.blood_group && (<div className="text-danger">{errors.blood_group}</div>)} 
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="quantity" className="form-label">Quantity</label>
                                <input
                                 type="number" 
                                 name="quantity" 
                                 id="quantity" 
                                 className="form-control" 
                                 placeholder="Quantity in units (1 unit=300ml)" 
                                 onChange={(e) => SetQuantity(e.target.value)} 
                                 value={quantity} />
                                 {errors.quantity && (<div className="text-danger">{errors.quantity}</div>)} 
                            </div>
                            <div className="col-md-4">
                                <label htmlFor="bloodBankId" className="form-label">Blood Bank Id</label>
                                <select id="bloodBankId" className="form-select" name='bloodBankId' value={bloodBankId} onChange={(e)=>setBloodBankId(e.target.value)}>
                                    <option value="">Select...</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                                {errors.bloodBankId && (<div className="text-danger">{errors.bloodBankId}</div>)}   
                            </div>
                           <td>
                            <button className='btn btn-success' onClick ={(e) =>saveOrUpdateDonor(e)} >Submit</button>
                            <button className='btn btn-danger' style={{marginLeft:"10px"}}>Cancel</button>
                            </td> 
                        </form>
                        <br />
                    </div>
                </div >
                <ToastContainer position="top-center" autoClose={300} theme="colored" />
            </div>
    )
}

export default AddDonor