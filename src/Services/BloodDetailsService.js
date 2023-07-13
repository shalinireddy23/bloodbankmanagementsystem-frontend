import axios from 'axios'


const BLOODDETAILS_BASE_REST_API_URL  ='http://localhost:8080/getblood-details';
const BLOODDETAILS_BASE_REST_API_URL1 ='http://localhost:8080/blood-details';
const BLOODDETAILS_BASE_REST_API_URL2 ='http://localhost:8080/blood-details/id/{id}';
const BLOODDETAILS_BASE_REST_API_URL3 ='http://localhost:8080/blood-details/';
const BLOODDETAILS_BASE_REST_API_URL4 ='http://localhost:8080/blood-details/bg';
const BLOODDETAILS_BASE_REST_API_URL5 ='http://localhost:8080/update/blood-details';
const BLOODDETAILS_BASE_REST_API_URL6 ='http://localhost:8080//delete/blood-details';

class BloodDetailsService{
    getAllBloodDetails(){
        return axios.get(BLOODDETAILS_BASE_REST_API_URL)
    }

    createBloodDetails(bloodDetails){
        console.log(bloodDetails)
        return axios.post(BLOODDETAILS_BASE_REST_API_URL1,bloodDetails)
    }

    getBloodBankById(bloodid){
        return axios.get(BLOODDETAILS_BASE_REST_API_URL2 + '/' + bloodid);
    }

    updateBloodBank(bloodid, blooddetails){
        return axios.get(BLOODDETAILS_BASE_REST_API_URL3 + '/' + bloodid,blooddetails);
    }

    getBloodBankByBloodGroup(blood_group){
        return axios.get(BLOODDETAILS_BASE_REST_API_URL4 + '/' +blood_group);
    }

    updateBloodDetailsQuantity(bloodBankid,blood_group,quantity){
        console.log("request received--> ready for backend");
        console.log("id",bloodBankid);
        let temp = 
            {
                "bloodBankId":parseInt(bloodBankid),
                "bloodGroup":blood_group,
                "quantity":quantity
            }
            console.log("this is temp",temp);
        return axios.put(BLOODDETAILS_BASE_REST_API_URL5,temp);

    }
    deleteBloodDetails(bloodid){
        return axios.delete(BLOODDETAILS_BASE_REST_API_URL6+ bloodid);
    }
}

export default new BloodDetailsService();