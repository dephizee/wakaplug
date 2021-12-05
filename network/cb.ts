import { API_KEY } from "./endpoints";
import swal from "sweetalert";

export const basicNetwokCall = (endpoint : {url:string, method: string}, formdata: null|FormData, extraHeaders:{} ={}) => {
    const data = new URLSearchParams();
    if(formdata){
        for (const pair of formdata.entries()) {
            data.append(pair[0], pair[1].toString());
        }
    }
    
    let headers = { 
        "x-api-key":  API_KEY,
        "accept":'application/json',
        "content-type": "application/x-www-form-urlencoded",
        ...extraHeaders
    }
    var requestOptions = {
        method: endpoint.method,
        headers: headers,
        body: data.toString()
    };
    return fetch(`${endpoint.url}`, requestOptions)
}

export const handleResponse = (response:any) => {
    let hasError = response.meta.status_code !==200;
    swal({
        text: `${hasError?response.meta.error.message:''}`,
        icon: `${hasError?'info':'success'}`,
        timer: 3000,
      });
}