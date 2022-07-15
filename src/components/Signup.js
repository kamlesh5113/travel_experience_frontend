import React,{useState,useRef,useEffect} from 'react';
import '../components/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';
import { Link } from 'react-router-dom';

const SignUp = () => {

    const [password,setpassword] = useState('');
    const [email,setemail] = useState('');
    const [Address,setAddress] = useState('');
    const [name,setname] = useState('');

    const [previewUrl, setPreviewUrl] = useState('');
    const [file,setfile] = useState('');

    const filePickerRef = useRef();

    function Submit(event)
    {
        event.preventDefault();
        if(password === '' || email==='' || name === '' || Address === '')
        {
            alert('Password or Name is required!');
        }
        else
        {
            const formData = new FormData();

            formData.append('name',name);
            formData.append('email',email);
            formData.append('password',password);
            formData.append('Address',Address);
            formData.append('image',file);

            console.log(file);
            
            axios.post(process.env.REACT_APP_BACKEND_URL+'/user/signup',
                formData,{
                    headers: {
                        "Content-Type": "multipart/form-data",
                      }
                }).then((res) => {
                    if(res.data)
                    {window.location.href = '/login';}
                }).catch((err) => {
                    alert("email already exists");
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

    const pickHandler = (event) =>{
    let pickedFile;
    if (event.target.files && event.target.files.length === 1) {
      pickedFile = event.target.files[0];
      setfile(pickedFile);
    }
    }

  return (
    <>
         <div className='container-fluid cont'>
             <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                 <div className='panel panel-primary'>
                     <div className='panel-heading'>
                         <h2>Register</h2>
                     </div>
                     <div className='panel-body'>
                         <form className='form'>
                             <div className='form-group'>
                             <label htmlFor='name'>Name</label>
                             <input className='form-control' type='text' name='name' placeholder='enter name' onChange={ (event =>{setname(event.target.value)}) }/>
                             </div>
                             <div className='form-group'>
                             <label htmlFor='email'>Email</label>
                             <input className='form-control' type='email' name='email' placeholder='enter email' onChange={ (event =>{setemail(event.target.value)}) }/>
                             </div>
                             <div className='form-group'>
                             <label htmlFor='password'>Password</label>
                             <input className='form-control' type='password' name='password' onChange={ ( event=>{setpassword(event.target.value)})} placeholder='enter password' />
                             </div>
                             <div className='form-group'>
                             <label htmlFor='Address'>Address</label>
                             <input className='form-control' type='Address' name='Address' placeholder='enter Address' onChange={ (event =>{setAddress(event.target.value)}) }/>
                             </div>
                             <div className='form-group'>
                                <input type='file'
                                  ref={filePickerRef}
                                  accept=".jpg,.jpeg,.png"
                                  name="image"
                                  required
                                  onChange={pickHandler}
                                />
                             </div>
                             <img src={previewUrl} alt="Preview" style={{height:'100px'}}/><br/><br/>
                             <button className='btn btn-success' onClick={Submit}>Submit</button>
                            </form>
                     </div>
                     <div className='panel-footer'>
                             have account <Link to='/login'>login</Link> here
                     </div>
                 </div>
             </div>
         </div>
    </>
  )
}

export default SignUp;