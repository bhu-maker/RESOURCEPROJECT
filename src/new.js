import { useState } from "react"
import {adding} from './Api'
export const Newform=()=>{
    const[roles,setRoles]=useState("")
    const[profile,setProfile]=useState(
        {
            "person":"",
            "experience":0,
            "role":"",
            "ctc":0.0,
            "expected":0.0
        }
    )
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
        profile.role=roles
        const t = await adding(profile)
        alert(JSON.stringify(t.data))
        window.location.assign("/")
    }
    const handleradio=(e)=>{
        const{name,value}=e.target
        setRoles(value)
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
                 <div className="col align-self-center">
                     <label>Resource Person Role</label>
                     <input type="radio" name="roles" value="Architect" onChange={handleradio} className="form-inline-control"/>Architect
                     <input type="radio" name="roles" value="Trainer" onChange={handleradio} className="form-inline-control"/>Trainer    
                     <input type="radio" name="roles" value="Financer"  onChange={handleradio}className="form-inline-control"/>Financer
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
                     <button className="col-2 btn btn-outline-primary" onClick={submitting}>RECRUITE</button>
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