import "../Hero.css";
import foodImage from './images/food1.jpg';
import Grow from '@mui/material/Grow';
import { Link } from "react-router-dom";
function Hero(){
    return(
        <>
        <div className="container main section">
            <div className="col ">
            <h1 className="title">What are we about</h1>
            <p className="info">
            FoodiesHub is a place
            for those who love food. We're dedicated to providing a
            diverse and inclusive culinary experience.
            Our goal is to bring people together through the universal love of food.
            </p>
            <Link className="btn" to="/recipes" key="recipes">explore now</Link>
            </div>
            <div className="col image-content">
            <Grow in={true} style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 1500 } : {})}>   
             <img src={foodImage} />
             </Grow>
            </div>
        </div>
        </>
    );
}
export default Hero;