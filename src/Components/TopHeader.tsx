import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { BiTransfer } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';

export const TopHeader =()=>{
return(
    <div className="d-flex flex-row shadow justify-content-md-start flex-grow-1 align-content-center align-self-start py-3 px-2">
            
            <div className="navbar-brand d-flex py-1  align-items-center">
            
            {/* <img style={{maxHeight:"100%"}} src="/c7i-logo.png" alt=""  />
            <img className="ms-2" style={{maxHeight:"50%"}} src="/c7i-logo-name.png" alt=""  /> */}

            {/* <div className="nav-link d-flex align-items-center ms-auto" onClick={() => setIsSidebarOpen(!isSidebarOpen)} >
        <IconBars className=" d-md-none" />
    </div> */}
            <div className="nav-link d-flex align-items-center ms-auto">
            <RxHamburgerMenu size={'20px'} />
            </div>
        </div>
        <div className="primitive-menu navbar-nav ms-auto ">
                <li className="nav-item">
                   <Link className="nav-link" to={"/"}><BiTransfer /></Link>
                    {/*  <Link className="nav-link" to={"/secure/roles"}>roles</Link>
                    <Link className="nav-link" to={"/secure/users"}>users</Link> */}
                </li>
            </div>

    </div>
    )
}