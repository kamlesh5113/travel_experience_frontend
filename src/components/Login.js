import React,{useState,useEffect} from 'react';
import '../components/style.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {useHistory, Link } from 'react-router-dom';
import Navbar from './Navbar';


const Login = (props) => {

    const [password,setpassword] = useState('');
    const [email,setemail] = useState('');
    

    let history = useHistory();
    
    const Submit = async (event) =>
    {
         event.preventDefault();

        if(password === '' || email === '')
        {
            alert('Password or Name is required!');
        }
        else
        {
            const user = {
                email: email,
                password: password
                   }

                  await fetch(process.env.REACT_APP_BACKEND_URL+'/user/login', {
                   method: 'POST', 
                   headers: {
                    'Content-Type': 'application/json',
                  },
                  body: JSON.stringify(user),
                }).then(response => response.json()).then(data => {
                  
                  if(data){
                    props.set_id(data._id);
                    localStorage.setItem('token',data._id);
                    console.log('Success:', data._id);
                    history.push('/');
                  }
                  else{
                    alert('Wroung Credentials!')
                  }
                }).catch((error) => {
                  console.error('Wroung Credentials!');
                });
        }
    }

  return (
    <>
   
    <center>
         <div className='container-fluid cont'>
             <div className='col-lg-4 col-md-6 col-sm-12 col-xs-12'>
                 <div className='panel panel-primary'>
                     <div className='panel-heading'>
                         <h2>Login</h2>
                     </div>
                     <div className='panel-body'>
                         <form className='form'>
                             
                             <div className='form-group'>
                             <label htmlFor='email'>Email</label>
                             <input className='form-control' type='email' name='email' placeholder='enter email' onChange={ (event =>{setemail(event.target.value)}) }/>
                             </div>

                             <div className='form-group'>
                             <label htmlFor='password'>Password</label>
                             <input className='form-control' type='password' name='password' onChange={ ( event=>{setpassword(event.target.value)})} placeholder='enter password' />
                             </div>
                             
                             <button className='btn btn-success' onClick={Submit}>Submit</button>
                            </form>
                     </div>
                     <div className='panel-footer'>
                            don`t have account <Link to='/Signup'>register</Link> here
                     </div>
                 </div>
             </div>
         </div>
         </center>
    </>
  )
}

export default Login