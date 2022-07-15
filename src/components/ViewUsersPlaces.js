import React, { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';


function Card({ data }) {
    const {_id,uid,title,description,Address,img} = data;

    if(data.title == 'My Travel Experience')
    {
        return ;
    }

    return (
        <>
            <center>
                <div className='container'>
                <img src={`${process.env.REACT_APP_ASSET_URL}/${img}`} className="img-responsive" alt="error" style={{height:'500px',width:'100%'}}/>
                    <div className="row">
                    <h3>{title}</h3>
                    <h3>{description}</h3>
                    <h3>{Address}</h3>
                    </div>
                </div>
                <hr/>
            
            </center>
            
        </>
    );
};

const ViewUsersPlaces = () =>{

   const [todo,settodo] = useState('');

   const id = useParams().id;

   console.log("id:  "+id);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/places/${id}`).then((res)=>{
            if(res.data){settodo(res.data);}
            else{alert("No Data Found!")}
    }).catch((err)=>{
        console.log("No Data Found!");
    });
    },[id]);

    return(
        <>
        <br/>
            <div className="container-fluid">
           <center><h1>Your Places</h1></center>
            {
                todo.length === 0 ? "No Places Available" :
                todo.map(d =>
                <Card data={d}/>) 
            }
            </div>
        </>
    )
}

export default ViewUsersPlaces;