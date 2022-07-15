import React, {  useEffect, useState } from "react";
import { confirm } from './confirmable'
import Navbar from "./Navbar";

import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link,useHistory } from "react-router-dom";


function Card({ data,handledelete }) {
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
                    <h2>{title}</h2>
                    <h3>{description}</h3>
                    <h3>{Address}</h3>
                    
                    </div>
                    <div className="row">
                    <button onClick={handledelete} name={_id} className="btn btn-danger"> DELETE </button>
                    
                   <Link to={`/updatePlaces/${_id}`} style={{textDecoration: 'none'}}> <button className="btn btn-primary"> EDIT </button> </Link>

                    </div>
                </div>
                <hr/>
            </center>
            
        </>
    );
};






const ViewPlaces = () =>
{
    const _id = localStorage.getItem('token');

    const [todo,settodo] = useState([]);

    const [valid,setvalid] = useState(false);

    let history = useHistory();

    
    
    
    const handledelete =async(event)=>{
        const id = event.target.name;

        if(await confirm("Are your sure?")){
        
        axios.delete(`${process.env.REACT_APP_BACKEND_URL}/places/${id}`);
    }
    
}



    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/places/${_id}`).then((res)=>{
            if(res.data){settodo(res.data);}
            else{alert("No Data Found!")}
    }).catch((err)=>{
        console.log("No Data Found!");
    });
    },[todo]);

    return(
        <>
         <br/>
        <div className="container-fluid">
           <center><h1>Your Places</h1></center>
            {
                todo.length === 0 ? "No Places Found!" :
                todo.map(d =>
                <Card data={d} handledelete={handledelete}/>) 
            }
        </div>
        </>
    )
}

export default ViewPlaces;