import React, { useEffect, useState } from "react";

import 'bootstrap/dist/css/bootstrap.min.css';
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";

const EditProfile=()=>{

    const history = useHistory();

    const id = useParams().id;

    
    const [user,setuser] = useState('');

    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`).then((res)=>{
            if(res.data)
            {setuser(res.data);}
        }).catch((err)=>{

        })
    },[id]);

    const [email,setemail] = useState(user.email);
    const [Address,setAddress] = useState(user.Address);
    const [name,setname] = useState(user.name);

    const Submit=(event)=>{

        event.preventDefault();
        if( email==='' || name === '' || Address === '')
        {
            alert('Email or Name is required!');
        }
        else
        {
            const user={
                name:name,
                email:email,
                Address:Address
            }
            axios.put(`${process.env.REACT_APP_BACKEND_URL}/user/${id}`,user).then((res)=>{
                if(res.data){
                    history.push('/profile');
                }
            }).catch(err=>{
                alert("Something went wroung!");
            })
        }

    }


    return (
        <><br/><br/>
        <div className='container-fluid'>
             <div className='col-lg-6 col-md-6 col-sm-12 col-xs-12'>
                 <div className='panel panel-default'>
                     <div className='panel-heading'>
                         <h2>Register</h2>
                     </div>
                     <div className='panel-body'>
                         <form className='form'>
                             <div className='form-group'>
                             <label htmlFor='name'>Name</label>
                             <input className='form-control' type='text'
                              defaultValue={user.name}
                             name='name' placeholder='enter name' onChange={ (event =>{setname(event.target.value)}) }/>
                             </div>
                             <div className='form-group'>
                             <label htmlFor='email'>Email</label>
                             <input className='form-control' type='email'
                              defaultValue={user.email}
                             name='email' placeholder='enter email' onChange={ (event =>{setemail(event.target.value)}) }/>
                             </div>
                             <div className='form-group'>
                             <label htmlFor='Address'>Address</label>
                             <input className='form-control' type='Address'
                              defaultValue={user.Address}
                             name='Address' placeholder='enter Address' onChange={ (event =>{setAddress(event.target.value)}) }/>
                             </div>
                             <button className='btn btn-success' onClick={Submit}>Edit</button>
                            </form>
                     </div>
                 </div>
             </div>
             
         </div>
         
        </>
    )
}

export default EditProfile;