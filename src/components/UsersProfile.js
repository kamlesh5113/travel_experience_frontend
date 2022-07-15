import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const UsersProfile = () =>{

    const id = useParams().id;

    const [user,setuser] = useState('');

    const [place,setplace] = useState([]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`).then((res)=>{
            if(res.data)
            {
                setuser(res.data);
            }
            else
            {
                alert("No user");
            }
        }).catch((err)=>{
            console.log("No user Found!");
        })
    },[]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/places/${id}`).then((res)=>{
            if(res.data)
            {
                setplace(res.data);
                
            }
            else
            {
                alert("No user");
            }
        }).catch((err)=>{
            console.log("No user Found!");
        })
    },[])

    let c = 0;
    if(user.email === "kamleshleel5113@gmail.com")
    {c=1;}
    return(
        <><br/><br/>
        <div className="container">
                <div className="col-lg-6 col-sm-6 col-sm-12 col-xs-12">
                   <center> <img src={`${process.env.REACT_APP_ASSET_URL}/${user.img}`} alt="error" className="img-rounded" height='300px'/> </center>
                </div> 
                <div className="col-lg-6 col-sm-6 col-sm-12 col-xs-12">
                    <div className="co">
                       <h2> {user.name} </h2>
                    </div>
                    <div className="co">
                       <h2> {user.Address} </h2>
                    </div>
                    <div className="co">
                       <h2> Total Places Created  {place.length-c}</h2>
                        <Link to={`/viewusersplaces/${id}`}> <button className="btn btn-primary">View Places</button> </Link>
                    </div>
                </div>    
            </div><br/><br/>
        </>
    )
}


export default UsersProfile;