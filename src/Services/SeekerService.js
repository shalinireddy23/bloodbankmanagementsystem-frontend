import axios from 'axios'


const SEEKER_BASE_REST_API_URL  ='http://localhost:8080/getseeker';
const SEEKER_BASE_REST_API_URL1 ='http://localhost:8080/seeker';
const SEEKER_BASE_REST_API_URL2 ='http://localhost:8080/seeker/id/';
const SEEKER_BASE_REST_API_URL3 ='http://localhost:8080/seeker/';
const SEEKER_BASE_REST_API_URL4 ='http://localhost:8080/seeker/';


class SeekerService{
    getAllSeekers(){
        return axios.get(SEEKER_BASE_REST_API_URL)
    }

    createSeeker(seeker){
        return axios.post(SEEKER_BASE_REST_API_URL1,seeker)
    }

    getSeekerById(seekerid){
        return axios.get(SEEKER_BASE_REST_API_URL2  + seekerid);
    }

    updateSeeker(seeker){
        return axios.put(SEEKER_BASE_REST_API_URL3 +  seeker);
    }

    deleteSeeker(seekerid){
        return axios.delete(SEEKER_BASE_REST_API_URL4 + seekerid);
    }
}

export default new SeekerService();