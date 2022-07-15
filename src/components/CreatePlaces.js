import React, { useState, useRef, useEffect } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const CreatePlaces = () =>{

    const filePickerRef = useRef();

    const _id = localStorage.getItem('token');

    const [file, setFile] = useState('');
    const [previewUrl, setPreviewUrl] = useState('');

   
    
    const [title,settitle] = useState('');
    const [description,setdescription] = useState('');
    const [address,setaddress] = useState('');

    const submit = (event) =>{

        event.preventDefault();
        
    if(title==='' || description===''||address==='')
    {
        alert("Please Fill All Fields!");
    }
    else
    {
        const formData = new FormData();
        formData.append('uid', _id);
        formData.append('title', title);
        formData.append('description', description);
        formData.append('Address',address);
        formData.append('image', file);   

        axios.post(process.env.REACT_APP_BACKEND_URL+"/places",formData,{
            headers: {
                "Content-Type": "multipart/form-data",
              }
        })
        .then((res)=>{
            alert("Created Successfully!")
        }).catch((err)=>{
            console.log("Error in adding places");
        })
    }
}

useEffect(() => {
    if (!file) {
      return;
    }
    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPreviewUrl(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  }, [file]);

const pickedHandler = event => {
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setFile(pickedFile);
    }
  };


return (
    <><br/>
    <div className='panel panel-default'>
        <div className='container'>
        <div className='panel-heading'><h2>Add New Place</h2></div>
        <div className='panel-body'>
            <form className='form'>
                <div className='form-group'>
                    <label>Title</label>
                    <input type='text' className='form-control' placeholder='enter title'
                       onChange={event => {settitle(event.target.value)}}
                    />
                </div>
                <div className='form-group'>
                    <label>Description</label>
                    <textarea type='text' className='form-control' placeholder='about place'
                      onChange={event => {setdescription(event.target.value)}}
                    />
                </div>
                <div className='form-group'>
                    <label>Address</label>
                    <textarea className='form-control' placeholder='enter address'
                       onChange={event => {setaddress(event.target.value)}}
                    />
                </div>
                <div className='form-group'>
                    <label>upload image</label>
                    <input type="file"  
                       ref={filePickerRef}
                       accept=".jpg,.png,.jpeg,.webg"
                       required
                       onChange={pickedHandler}
                       />
                </div>
                   <img src={previewUrl} alt="Preview" style={{height:'100px'}}/><br/><br/>
                    <button className='btn btn-success' onClick={submit}>Add</button>
            </form>
        </div>
        </div>
    </div>
    </>
)
};

export default CreatePlaces;