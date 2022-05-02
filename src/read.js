import { useParams } from "react-router-dom"
import { useEffect,useState } from "react"
import {toread} from './Api'
export const Read=()=>{
    const {pk}=useParams()
    const[profile,setProfile]=useState({})
    const callingeffect=async()=>{
        const t = await toread(pk)
        setProfile(t.data)
    }
    useEffect(()=>{callingeffect()},[])

    return(
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="card col-lg-6 col-md-7 col-sm-12 shadow rounded-3 bg-warning"> 
                 <div className="display-4 text-center text-info">{profile.person}</div>
                 <div className="card-body text-info">
                     <div  className="row text-center">
                     <p className=" col-6 card-text float-start">{profile.role}</p>
                     <p className="col-6 card-text float-end">{profile.experience}</p>
                     </div>
                     <div className="row text-center">
                     <p className="col-6 card-text float-start">{profile.ctc}</p>
                     <p className="col-6 card-text float-end">{profile.expected}</p>
                     </div>
                </div>
            </div>
            </div>
            </div>
        </>
    )
}