import React from "react";
import "../styles/footer.scss"
import newletter from "../assets/images/newsletter.png";
import { Link,NavLink } from "react-router-dom";
const Footer = () => {
    return(
        <>
        <footer className="py-3 footer-header">
<div className="container-xxl">
    <div className="row">
        <div className="col-5">
            <div className="footer-top-data align-items-center d-flex gap-30">
                <img src={newletter} alt="newletter" srcset="" />
                <h2 className="mb-0 text-white">Sign up for NewLetter</h2>
            </div>
        </div>
        <div className="col-7">
        <div className="input-group mb-3">
                <input
                  type="text"
                  className="form-control py-1"
                  placeholder="Your Email Address"
                  aria-label="Your Email Address"
                  aria-describedby="basic-addon2"
                />
                <span className="input-group-text p-2" id="basic-addon2">
                  Subrice
                </span>
              </div>
        </div>
    </div>
</div>
        </footer>
        <footer className="py-4 footer-content ">
<div className="container-xxl">
    <div className="row">
<div className="col-4">
    <h4 className = "text-white mb-4">Contact Us</h4>
    <div className="">
        <address className="text-white">Adress : Ha Dong , Ha Noi , Viet Nam</address>
        <a href="#" className="mt-4 text-white"> Hotline : +84 58 6517 832 </a>
        <a href="#" className="mt-4 text-white"> Email : ht0984412878@gmail.com </a>
        <div className=" d-flex gap-5 mt-4 align-items-center ">
                 
                    <a href="#" className="text-white"><i className="bi bi-facebook fs-4"></i></a>
                    <a href="#" className="text-white"><i className="bi bi-instagram fs-4"></i></a>
                    <a href="#" className="text-white"><i className="bi bi-twitter fs-4"></i></a>
                </div>
    </div>
</div>
<div className="col-3">
    <h4 className = "text-white mb-4">Information</h4>
    <div className="footer-link d-flex flex-column">
      <Link className = "text-white  py-2 mb-1" >Privacy Policy </Link>
      <Link className = "text-white py-2 mb-1" > Refunds Policy</Link>
      <Link className = "text-white py-2 mb-1" > Shipping Policy</Link>
      <Link className = "text-white py-2 mb-1" > Tems & Conditional</Link>
      <Link className = "text-white py-2 mb-1" > Blogs </Link>
    
    </div>
</div>
<div className="col-3">
    <h4 className = "text-white mb-4">Account</h4>
    <div className="footer-link d-flex flex-column">
      <Link className = "text-white  py-2 mb-1" > About Us </Link>
      <Link className = "text-white py-2 mb-1" > FAQ</Link>
      <Link className = "text-white py-2 mb-1" > Contact</Link>
    
    </div> 
</div>
<div className="col-2">
    <h4 className = "text-white mb-4">Quick Links</h4>
    <div className="footer-link d-flex flex-column">
      <Link className = "text-white  py-2 mb-1" > Headphone </Link>
      <Link className = "text-white py-2 mb-1" > Table</Link>
      <Link className = "text-white py-2 mb-1" > Laptop</Link>
      <Link className = "text-white py-2 mb-1" > Watch </Link>
    </div> 
</div>
    </div>
</div>
        </footer>
        <footer className="py-4 footer-bottom">
            <div className="container-xxl">
               <div className="row">
                <div className="col-12">
                    <p className="text-center mb-0 text-white"> 2022 : Lap To </p>
                </div>
                
               </div>
            </div>
        </footer>
        </>
    );
    };
    export default Footer;