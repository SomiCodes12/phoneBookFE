import axios from "axios"

const url : string = "http://localhost:4455"


export const createContactAPI = async(data : any) => {
    try {
        return await axios.post(`${url}/api/v1/create-contact` , data).then((res : any) => {
            return res.data.data
        })
    } catch (error)     {
        console.log(error);
    }
}

export const viewContactCategoryAPI = async() => {
    try {
        return await axios.get(`${url}/api/v1/view-contact-category`).then((res : any) => {
            
            return res.data.data
        })
    } catch (error) {
        console.log(error);
    }
}

export const view = async() => {
    try {
       return await axios.get(`${url}/api/v1/view-contacts`).then((res:any)=>{
        console.log("res",res);
        
        return res.data.data
       })
    } catch (error:any) {
       console.log(error.message) 
    }
}