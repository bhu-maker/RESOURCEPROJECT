import axios from 'axios'
const url="http://127.0.0.1:5000/rest"

export const listing=async()=>
{
    const temp = await axios.get(`${url}/`)
    return temp;
}

export const adding=async(obj)=>
{
    const temp = await axios.post(`${url}/`,obj)
    return temp;
}

export const finding=async(pk)=>{
    const temp=await axios.get(`${url}/${pk}`)
    return temp;
}

export const updating=async(obj)=>{
    const temp = await axios.put(`${url}/up/${obj.id}`,obj)
    return temp;
}

export const toread=async(pk)=>{
    const temp = await axios.get(`${url}/${pk}`)
    return temp;
}
export const todel=async(id)=>{
    const temp =await axios.delete(`${url}/del/${id}`)
    return temp;
}

export const byname=async(data)=>{
    const temp=await axios.get(`${url}/name/${data}`)
    return temp;

}

export const bysal=async(data)=>{
    const temp=await axios.get(`${url}/sal/${data}`)
    return temp;
    
}

export const byrole=async(data1,data2)=>{
    const temp=await axios.get(`${url}/role/${data1}/${data2}`)
    return temp;
}





