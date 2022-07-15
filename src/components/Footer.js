import react from 'react';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import 'bootstrap/dist/css/bootstrap.min.css';

const Footer = () =>{
return(
    <>
    <footer className="page-footer font-small blue">
    <div className="footer-copyright text-center py-3">© 2022 Copyright:
   <Link to="/"> MyPalaces.com</Link>
   </div>
   </footer>
    </>
)
};

export default Footer;