import React, { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import axios from 'axios';
import { useParams,useHistory } from 'react-router-dom';

const UpdatePlaces = () =>{
    
    const history = useHistory();
    
    const id = useParams().id;


    
   
    
    const [todo,settodo] = useState('');


    useEffect(()=>{
        axios.get(`${process.env.REACT_APP_BACKEND_URL}/places/byid/${id}`)
        .then((res)=>{
            settodo(res.data);
            
            console.log(todo)
        }).catch((err)=>{
            console.log("Error in fetching places");
        })
    },[id]);

    const [title,settitle] = useState(todo.title);
    const [description,setdescription] = useState(todo.description);
    const [address,setaddress] = useState(todo.Address);

    const submit = (event) =>{
        event.preventDefault();
    if(title==='' || description===''||address==='')
    {
        alert("Please Fill All Fields!");
    }
    else
    {
        
        const place = {
            title: title,
            description: description,
            Address: address
        }

        axios.put(`${process.env.REACT_APP_BACKEND_URL}/places/${id}`,place)
        .then((res)=>{
            if(res.data)
            {
                alert("updated Successfully!");
                history.push('/view-palaces/:id')
            }
            else{alert("No Updation occured!")}
        }).catch((err)=>{
            console.log("Error in updating places");
        })
    }
}


return (
    <><br/><br/>
    <div className='panel panel-default'>
        <div className='container'>
        <div className='panel-heading'><h2>Add New Place</h2></div>
        <div className='panel-body'>
            <form className='form'>
                <div className='form-group'>
                    <label>Title</label>
                    <input type='text' defaultValue={todo.title} className='form-control' placeholder='enter title'
                       onChange={event => {settitle(event.target.value)}}
                    />
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea type='text' defaultValue={todo.description} className='form-control' placeholder='enter description'
                      onChange={event => {setdescription(event.target.value)}}
                    />
                </div>
                <div className='form-group'>
                    <label>Address</label>
                    <textarea className='form-control' placeholder='enter address' defaultValue={todo.Address}
                       onChange={event => {setaddress(event.target.value)}}
                    />
                </div>
                
                    <button className='btn btn-success' onClick={submit}>Add</button>
                
            </form>
        </div>
        </div>
    </div>
    </>
)
};

export default UpdatePlaces;