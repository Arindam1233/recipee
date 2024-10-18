import foodimage from "./images/food3.jpg";
import Grow from '@mui/material/Grow';
import Slide from '@mui/material/Slide';
function ImproveYourSkills(){
    const list=["Learn new" , "Experiment new" , "wow new" ,"nutrition" , "tips" ,"ranked"]
    return(
        <>
        <div className="container section">
            <div className="col ">
            <Grow in={true} style={{ transformOrigin: '0 0 0' }}
          {...(true ? { timeout: 1500 } : {})}> 
            <img src={foodimage}/>
            </Grow>
            </div>
            <div className="col typo">
            <h1 className="title">Impove your culinary skills</h1>
            <div className="improve-info">
            {list.map(list=>(
                <Slide direction="right" in={true} mountOnEnter unmountOnExit>
                <p className="item">{list}</p>
                </Slide>
            ))}
            </div>
            </div>
        </div>
        </>
    );

}
export default ImproveYourSkills;