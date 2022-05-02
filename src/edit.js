import { useEffect,useState } from "react"
import {useParams} from "react-router-dom"
import {finding,updating} from './Api'
export const Edit=()=>{
   
    const{pk} = useParams()
    const[profile,setProfile]=useState({})
        
    const calluseeffect=async()=>{
        const t = await finding(pk)
        setProfile(t.data)
    }
    useEffect(()=>{calluseeffect()},[])
    const handlechange=(obj)=>{
        const{name,value}=obj.target
        setProfile((oldobj)=>{
            return{
                ...oldobj,
                [name]:value
            }
        })
    }
    const submitting = async()=>{
       
        const t = await updating(profile)
        alert(JSON.stringify(t.data))
        window.location.assign("/")
    }
   
    const resetting=()=>
    {
        setProfile(()=>{
            return{
                "person":"",
            "experience":0,
            "role":"",
            "ctc":0.0,
            "expected":0.0

            }
        })
    }
    return(
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-10 col-md-9 col-sm-12 shadow rounded-3">
            <div className="form-group">
               <label>Resource Person Name</label> 
               <input type="text" value={profile.person} onChange={handlechange} name="person" className="form-control" placeholder="person name"/>
             </div>
             <div  className="row" >
                 <div className="col">
                     <label>Resource Person Experience</label>
                     <input type="text" value={profile.experience} onChange={handlechange} name="experience" className="form-control" placeholder="personexperience"/>  
                 </div>
                 <div className="col">
                     <label>Resource Person Role</label>
                     <input type="text" name="role" value={profile.role} onChange={handlechange} className="form-control" placeholder="person role"/>
                     
                 </div>
                 <div  className="row" >
                 <div className="col">
                     <label>Resource Person CTC</label>
                     <input type="text" value={profile.ctc} onChange={handlechange} name="ctc" className="form-control" placeholder="personcurrent ctc"/>  
                 </div>
                 <div className="col">
                     <label>Resource Person Expected</label>
                     <input type="text" name="expected" value={profile.expected} onChange={handlechange} className="form-inline-control" placeholder="expected"/>                  
                 </div>
                 <div className="mt-2 row justify-content-around">
                     <button className="col-2 btn btn-outline-primary" onClick={submitting}>UPDATE</button>
                     <button className="col-2 btn btn-outline-danger" onClick={resetting}>CANCEL</button>
                 </div>
            </div>
            </div>
            </div>
      </div>
      </div>
        </>
    )
}
   