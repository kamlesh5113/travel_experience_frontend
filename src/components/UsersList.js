import axios from "axios";
import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from "react-router-dom";




function Card({ data }) {

    return (
        <>
            <center>
                <div className="col-lg-4 col-sm-4 col-sm-12 col-xs-12">
                <center> <img src={`${process.env.REACT_APP_ASSET_URL}/${data.img}`} alt="error" className="img-circle" height='100px'/> </center>
                    <div className="co">
                       <h2> {data.name} </h2>
                    </div>
                    <div className="co">
                      <Link to={`/UsersProfile/${data._id}`}> <button name={data._id} className="btn btn-success"> view profile </button> </Link> 
                    </div>
                </div> 
            </center>
            
        </>
    );
};

const UsersList = () =>{

    const [user,setuser] = useState([]);

    useEffect(()=>{
        axios.get(process.env.REACT_APP_BACKEND_URL+'/user').then((res)=>{
            if(res.data)
            {
                setuser(res.data);
                console.log("user: "+ user)
            }
            else
            {
            }
        }).catch((err)=>{
            
        })
    },[]);


    return(
        <><br/><br/>
        <div className="container-fluid">
            {
                user.length === 0 ? "" :
                user.map(u =>
                    <Card data={u}/>)
            }
        </div>
        <br/>
        </>
    )
}

export default UsersList;