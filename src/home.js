import { useEffect,useState } from "react";
import {listing } from './Api';

export const Home=()=>{
    
    const [arr,setarr]=useState([])
 
    const callingall=async()=>{
        const t = await listing()
        setarr(t.data)
    }
    useEffect(()=>{callingall()},[])

    

    return(
        <>
        <div className="container-fluid">
            <div className="row justify-content-center"> 
                <div className="table-responsive md">
                    <table className="col-lg-12 col-md-8 col-sm-12 shadow rounded-3 table table-hover text-center">
                     <thead className="bg-info">
                         <tr>
                         <th>RESOURCE NAME</th><th>RESOURCE EXPERIENCE</th>
                         <th>RESOURCE ROLE</th><th>RESOURCE CTC</th>
                         <th>ReSOURCE EXPECTED</th><th>RESOURCE ACTIONS</th>
                         </tr>
                     </thead>
                     <tbody className="bg-warning">
                         {arr.map((obj)=>(
                         <tr>
                             <td>{obj.person}</td><td>{obj.experience}</td>
                             <td>{obj.role}</td><td>{obj.ctc}</td>
                             <td>{obj.expected}</td>
                             <td className="row justify-content-around">
                              <a href={`/update/${obj.id}`} className="btn btn-outline-info col-2"><i class="bi bi-pencil-square"></i></a>
                              <a href={`/read/${obj.id}`} className="btn btn-outline-success col-2"><i class="bi bi-file-spreadsheet-fill"></i></a>
                              <a href={`/del/${obj.id}`} className="btn btn-outline-danger col-2" ><i class="bi bi-trash3-fill"></i></a>
                                

                             </td>
 
                         </tr>
                         ))}
                     </tbody>
                    </table>
            </div>

        </div>
        </div>
        </>
    )
}