import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import { todel, toread } from "./Api"

export const Delete=()=>{
    const[obj,setObj]=useState({})
    const {pk} = useParams()
    const calling=async()=>{
        const t= await toread(pk)
        setObj(t.data)
    }
    useEffect(()=>{calling()},[])
    const confirming=async()=>{
        const t = await todel(pk)
        alert(JSON.stringify(t.data))
        window.location.assign("/")
    }
    const resetting=()=>{
        window.location.assign("/")
    }
    return (
        <>
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-8 col-sm-12 shadow bg-secondary p-3 rounded-3">
                    <p>
                        Do you want to delete {obj.person}?
      
                    </p>
                    <div className="row justify content-around">
                        <button className="ms-3 col-3 btn btn-outline-light" onClick={confirming}>Confirm</button>
                        <span className="col-5"></span>
                        <button className="col-3 btn btn-outline-dark" onClick={resetting}>Cancel</button>
                        </div>


                </div>
                </div>
        </div>
        </>
    )
}