import React, {  useEffect, useState } from "react";

import axios from 'axios';
import './style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";


function Card({ data, setfile }) {
    const id = data._id;
    
    console.log("URL: " + process.env.REACT_APP_ASSET_URL);

    const [user,setuser] = useState('');
    
    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${data.uid}`).then((res)=>{
            if(res.data)
            {
                setuser(res.data);
            }
        }).catch((err)=>{
        })
    },[data.uid])
    if(data.title == 'My Travel Experience')
    {
        setfile(data.img);
        return ;
    }

    return (
        <>
        <div className="col-lg-6 col-md-6 col-sm-12">
           <center>
            <div><h2>{data.title}</h2></div>
            <div><img src={`${process.env.REACT_APP_ASSET_URL}/${data.img}`} className="img-responsive" alt="error" style={{height:'300px',width:'100%'}}/></div>
            <div> <h4>
                {data.description}
            </h4></div>
            <Link to={`/read_more/${id}`} style={{textDecoration: 'none'}}>  <button type="button" className="btn btn-primary">Read More</button>  </Link>
            <div>
                <h4>Created by: 
                <Link to={`/UsersProfile/${data.uid}`} style={{textDecoration: 'none'}}>  <button type="button" className="btn" style={{border:'none'}}>{user.name}</button>  </Link>
                 </h4>
            </div>
            </center>
        </div><br/>
        </>
    );
}

const Index = () =>{

    
    

  


    const [todo,settodo] = useState([]);
    const [file,setfile] = useState('');
    
    useEffect(()=>{
        axios.get(process.env.REACT_APP_BACKEND_URL+'/places').then((res)=>{
            settodo(res.data);
            
    }).catch((err)=>{
        console.log("No Data Found!",err);
    });
    },[]);
    

    

    return(
        <><br/>
            <div className="content-image">
                <img src={`${process.env.REACT_APP_ASSET_URL}/${file}`} alt='err' width='100%'/>
            </div>
            <br/>
            <div className="container">  
            {
                todo.map(d =>
                <Card data={d} setfile={setfile}/>) 
            }
        </div>
        </>
    )
}

export default Index;


