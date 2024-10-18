import "../index.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Fade from '@mui/material/Fade';
import { Link } from "react-router-dom";
function Sidebar({links}){
    return(
        <>
         <Fade in={true} timeout={300}>
        <div className="sidebar">
        {links.map(link =>(
                <Link to={link.path} className="sidebar-link"  key={link.name}>
                    <FontAwesomeIcon icon={link.icon} />
                    {link.name}
                </Link>
            ))}
        </div>
        </Fade>
        </>
    );
}
export default Sidebar;