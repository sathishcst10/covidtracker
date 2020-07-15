import { API_ALL, API_DAILY } from "../../backend";

export const getCountDetails=()=>{
    
    return fetch(`${API_ALL}`, {
        method: "GET"
    })
    .then(response =>{ 
        return response.json()
    })
    .catch(err => console.log(err));
}


export const getRegionwiseData =()=>{
    return fetch(`${API_ALL}`, {
        method: "GET"
    })
    .then(response =>{ 
        return response.json()
    })
    .catch(err => console.log(err));
}

export const getDailyData =()=>{
    return fetch(`${API_DAILY}`, {
        method : "GET"
    }).then(response=>{
        return response.json()
    }).catch(err => console.log(err));
}