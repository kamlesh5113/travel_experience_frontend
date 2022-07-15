import React, { useState,useEffect } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useParams } from "react-router-dom";
import axios  from "axios";


const ReadMore = () =>{

    const id = useParams().id;

    console.log("ID: "+id);

    const [place,setplace] = useState('');
    
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/places/byid/${id}`).then((res)=>{
            if(res.data){setplace(res.data);}
            else{}
    }).catch((err)=>{});
    },[]);
    
    return(
        <><br/><br/>
        <div className="container">
        <center><img src={`${process.env.REACT_APP_ASSET_URL}/${place.img}`} className="img-responsive" alt="error" style={{height:'600px',width:'100%'}}/>
            <h4><h2>Title:</h2> {place.title}</h4>
            <h4><h2>About Place:</h2> {place.description}</h4>
            <h4><h2>Address:</h2> {place.Address}</h4>
        </center>
        </div>
        </>
    )
}


export default ReadMore;