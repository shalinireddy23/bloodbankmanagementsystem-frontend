import axios from 'axios'


const DONOR_BASE_REST_API_URL  ='http://localhost:8080/getdonor';
const DONOR_BASE_REST_API_URL1 ='http://localhost:8080/donor';
const DONOR_BASE_REST_API_URL2 ='http://localhost:8080/donor/id/';
const DONOR_BASE_REST_API_URL3 ='http://localhost:8080/donor/';
const DONOR_BASE_REST_API_URL4 ='http://localhost:8080/donor/';


class DonorService{
    getAllDonors(){
        return axios.get(DONOR_BASE_REST_API_URL)
    }

    createDonor(donor){
        return axios.post(DONOR_BASE_REST_API_URL1,donor)
    }

    getDonorById(donorid){
        console.log(donorid);
        return axios.get(DONOR_BASE_REST_API_URL2 + donorid);
    }

    updateDonor(donor){
        return axios.put(DONOR_BASE_REST_API_URL3, donor);
    }

    deleteDonor(donorid){
        return axios.delete(DONOR_BASE_REST_API_URL4 + donorid);
    }
}

export default new DonorService();