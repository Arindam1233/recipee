import "../index.css"
import Hamburger from 'hamburger-react'
import { useState } from "react";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import {faHome , faList} from "@fortawesome/free-solid-svg-icons";
function Navbar(){
    const [isOpen, setOpen] = useState(false);
    const links =[
        {
            name: "Home",
            path: "/",
            icon:faHome
        },
        {
            name: "Recipes",
            path: "/recipes",
            icon:faList
        },
        
    ]
return(
    <>
    <div className="navbar container">
        <a href="/" className="logo">F<span>oo</span>diesHub</a>
        <div className="nav-links">
            {links.map(link =>(
                <Link to={link.path}  key={link.name}>{link.name}</Link>
            ))}   
        </div>
        <div className="sidebar-btn">
        <Hamburger toggled={isOpen} toggle={setOpen} />
        </div>
    </div>
    {isOpen && <Sidebar links={links} close={setOpen} />}
    
    </>
);

}
export default Navbar