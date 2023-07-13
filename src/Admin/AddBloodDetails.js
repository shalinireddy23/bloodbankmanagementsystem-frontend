import React, { useEffect, useState} from 'react'
import { useNavigate, useParams} from 'react-router-dom' ;
import BloodDetailsService from '../Services/BloodDetailsService'


const AddBloodDetails =() =>{
    
    const [bloodGroup,setBloodGroup]=useState("")
    const [quantity,setQuantity]=useState("")
    const [bloodBankId,setBloodBankId]=useState("")
    const history = useNavigate();
    const {id}=useParams();
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formIsValid = true;    
        const newErrors = {};

        if (!bloodGroup) {
            formIsValid = false;      
            newErrors.bloodGroup = "Please select a value";      
        }  
        if (!bloodBankId) {
            formIsValid = false;      
            newErrors.bloodBankId = "Please select a value";      
        }         
        if (!quantity) {
            formIsValid = false;      
            newErrors.quantity = "Please enter valid quantity";      
        }
        else if(quantity<0 ||quantity>50){
            formIsValid=false;
            newErrors.quantity="Quantity must be between 1 and 50"
        }
        setErrors(newErrors);
        console.log(errors.quantity);
        return formIsValid;
        }

    const saveOrUpdateBloodDetails = (e) => {
        e.preventDefault();

        if(validateForm()){

        const bloodDetails={bloodGroup,quantity,bloodBank:{bloodBankId}}

        if(id){
            bloodDetails.updateEmployee(id,bloodDetails).then((Response)=>{
                console.log(Response.data)
                history('/BloodDetails')
            }).catch(error => {
                console.log(error)
            })
        }else{
        BloodDetailsService.createBloodDetails(bloodDetails).then((Response)=>{

            console.log(Response.data)
            history('/BloodDetails');
        }).catch(error =>{
            console.log(error)
        })
        }
    }}
    useEffect(() => {

        BloodDetailsService.getBloodBankById(id).then((Response) => {
            setBloodGroup(Response.data.bloodGroup)
            setQuantity(Response.data.quantity)
            setBloodBankId(Response.data.bloodBankId)
        }).catch(error =>{
            console.log(error)
        })

    }, [])

    const title=() =>{
        if(id){
            return <h2 className= 'p-0 mx-auto fw-semibold' style={{ color: "#4682b4", textAlign: "justify" }}>Update BloodDetails</h2>
        }else{
            console.log(id)
            return <h2 className= 'p-0 mx-auto fw-semibold' style={{ color: "#4682b4", textAlign: "justify" }}>Add BloodDetails</h2>
        }
    }

    return(
        <div>
            <br />  <br />  <br/>
           <div className='container'>
            <div className='row'>
                <div className='card col-md-6 offset-md-3 offset md-3'>
                    {
                        title()
                    }
                <br />  
                    <form>                        
                        <div className="col-md-4">
                                <label htmlFor="bloodgroup" className="form-label">Blood Group</label>
                                <select id="bloodgroup" className="form-select" name='BloodGroup' value={bloodGroup} onChange={(e)=>setBloodGroup(e.target.value)}>
                                    <option value="">Select...</option>
                                    <option value ="A+"> A+ </option>
                                    <option>A-</option>
                                    <option>B+</option>
                                    <option>B-</option>
                                    <option>O+</option>
                                    <option>O-</option>
                                    <option>AB+</option>
                                    <option>AB-</option>
                                </select>
                                {errors.bloodGroup && (<div className="text-danger">{errors.bloodGroup}</div>)}   
                            </div>

                        <div className='form-group mb-2'>
                            <label className='form-label'> Quantity</label>
                            <input 
                                type="number"
                                placeholder='Enter Quantity'
                                name="quantity"
                                className='form-control'
                                value={quantity}
                                onChange={(e) => setQuantity(e.target.value)}
                            >
                            </input>
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
                            <br/>
                        <button className ="btn btn-success" onClick ={(e) => saveOrUpdateBloodDetails(e)}>Submit</button>
                        <button className='btn btn-danger' style={{marginLeft:"10px"}}>Cancel</button>
                    </form>
                    <br /> 
            </div>
           </div>
           </div>
           <br />  <br />  <br/>
        </div>
        
    )
    }
export default AddBloodDetails