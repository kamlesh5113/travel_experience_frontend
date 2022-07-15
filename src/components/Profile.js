import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


const Profile = ({set_id}) =>{

    const _id = localStorage.getItem('token');

    let history = useHistory();
    
    const [user,setuser] = useState('');

    

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${_id}`).then(res =>{
            if(res.data){
            setuser(res.data);
            }
            else{console.log("Error");}
        }).catch(err=>{
            console.log("Unknow error occured!")
        })
    },[_id]);

    const [place,setplace] = useState([]);

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/places/${_id}`).then((res)=>{
            if(res.data)
            {
                setplace(res.data);
                console.log(place);
            }
            else
            {
                alert("No user");
            }
        }).catch((err)=>{
            console.log("No user Found!");
        })
    },[_id])
    

    const delet = () =>
    {
        set_id('');
        window.localStorage.clear();
        history.push('/');
    }

    let c = 0;
    if(user.email === "kamleshleel5113@gmail.com")
    {c=1;}

    return(
        <>
        <br/><br/>
            <div className="container">
                <div className="col-lg-6 col-sm-6 col-sm-12 col-xs-12">
                   <center> <img src={`${process.env.REACT_APP_ASSET_URL}/${user.img}`} alt="error" className="img-rounded" height='300px'/>
                   
                    </center>
                </div> 
                <div className="col-lg-6 col-sm-6 col-sm-12 col-xs-12">
                    <div className="co">
                       <h2> {user.name} </h2>
                    </div>
                    <div className="co">
                       <h2> {user.email} </h2>
                    </div>
                    <div className="co">
                       <h2> {user.Address} </h2>
                    </div>
                    <div className="co">
                       <h2> Total Places Created  {place.length-c<0?0:place.length-c}</h2>
                        <Link to={`/view-palaces/${_id}`}> <button className="btn btn-primary">View Places</button> </Link>
                    </div>
                    <div className="co" style={{paddingTop:'10px'}}>
                       <button type="button" className="btn btn-danger" onClick={delet}>
                        Logout
                       </button>
                       <Link to={`/edit_profile/${_id}`}> <button type="button" className="btn btn-success" style={{marginLeft:'10px'}}>EDIT</button> </Link>
                    </div>
                </div>   
                
            </div><br/><br/>
        </>
    )
}

export default Profile;