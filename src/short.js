import {useState} from "react"
import {bysal,byname,byrole} from './Api'
export const Short=()=>{
    const[view,setView]=useState(false)
    const[arr,setArr]=useState([])
    const [frm,setFrm]=useState({
        "person":"",
        "salary":0.0,
        "role1":"",
        "role2":""
    })
    const handlechange=(obj)=>{
        const{name,value}=obj.target
        setFrm((oldobj)=>{
            return{
                ...oldobj,
                [name]:value
            }
        })

    }
   

    const submitting=async()=>
    {
        if ((frm.person !=="") && (frm.role1==="") && (frm.role2==="") && (frm.salary===0.0))
           {
             alert(JSON.stringify(frm))
             const t=await byname(frm.person)
             if (t.data){
                setView(true)
                setArr(t.data)
             }
         
           }  
        else if  ((frm.person ==="") && ((frm.role1!=="") && (frm.role2!=="")) && (frm.salary===0.0)) 
            {
            alert(JSON.stringify(frm))
            const t=await byrole(frm.role1,frm.role2)
            if (t.data){
                setView(true)
                setArr(t.data)
            }
            }
        else if ((frm.person ==="") && (frm.role1==="") && (frm.role2==="") && (frm.salary!==0.0))     
        {
            alert(JSON.stringify(frm))
            const t=await bysal(frm.salary)
            if (t.data){
                setView(true)
                setArr(t.data)
             }
            
            }
    }
    const resetting=()=>{
        setFrm(()=>{
            return{
                "person":"",
                "salary":0.0,
                "role1":"",
                "role2":""

            }
        })
    }
    const backing=()=>{
        setView(false)
    }
    return(
        <>
          <div className="container">
            <div className="row justify-content-center">
                <h1 className="display-6 text-center text-primary">Shortlist Resource</h1>
            
                  {(view)?
                  <>
                  <div className="table-responsive-md">
                    <table className="col-lg-12 col-md-8 col-sm-12 shadow rounded-3 p-5 table table-hover text-center">
                     <thead className="bg-info">
                         <tr>
                         <th>RESOURCE NAME</th><th>RESOURCE EXPERIENCE</th>
                         <th>RESOURCE ROLE</th><th>RESOURCE CTC</th>
                         <th>RESOURCE EXPECTED</th>
                         </tr>
                     </thead>
                     <tbody className="bg-warning">
                         {arr.map((obj)=>(
                         <tr>
                             <td>{obj.person}</td><td>{obj.experience}</td>
                             <td>{obj.role}</td><td>{obj.ctc}</td>
                             <td>{obj.expected}</td>
                         </tr>
                         ))}
                     </tbody>
                    </table>
            </div>
            <div className="row justify-content-around">
            <button className="btn btn-outline-danger col-2" onClick={backing}>BACK</button> 
            </div>
                  </>
                  :
                  <>

                            <div className="form-group">
                                <label>By Name</label>
                                <input type="text"  className="form-control" name="person" value={frm.person} placeholder="person name" onChange={handlechange}/>
                            </div>
                            <div className="form-group">
                                <label>By Salary</label>
                                <input type="text" name="salary" value={frm.salary} placeholder="person salary" onChange={handlechange} className="form-control"/>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <label>By Role</label>
                                    <input type="text" name="role1" value={frm.role1} className="form-control" placeholder="enter role1" onChange={handlechange}/>          
                                </div>
                                <div className="col">
                                    <label>By Role</label>
                                    <input type="text" name="role2" value={frm.role2} className="form-control" placeholder="enter role2" onChange={handlechange}/>          
                                </div>
                                <div className="row justify-content-around mt-2">
                                    <button className="btn btn-success col-1" onClick={submitting}></button>
                                    <button className="btn btn-danger col-1" onClick={resetting}></button>
                                </div>   
                            </div>
                  </>
                  }    
                </div>
            </div>
      
        </>      
    )
}