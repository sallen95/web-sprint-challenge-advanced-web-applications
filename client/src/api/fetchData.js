import axios from 'axios';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// export const fetchData = () => {
//     return axiosWithAuth()
//         .get("/colors")
//             .then(res => {
//                 return res;
//             })
//             .catch(err => {
//                 return err;
//             })
        
// }

export const fetchData = () => {
    return axios
        .get('http://localhost:5000/api/colors', {
            headers:{
                authorization: localStorage.getItem("token")
            }
        })
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
}