import "../chefs.css"
import GRI from "./images/GR.jpg";
import GFI from "./images/GF.jpg";
import MC from "./images/MC.jpg"
function ChiefSection(){
    const chefs = [
        {
            name:"Gordon",
            image:GRI

        },
        {
            name:"Guy Fieri",
            image:GFI

        },
        {
            name:"Jamie Oliver",
            image:MC
        }
    ]
    return(
        <>
        <div className="container sectionChef">
            <p className="cheftitle">OUR TOP CHIEFS</p>
            <div className="chefs">
            {chefs.map(link=>(
                <div className="chefsCard">
                    <img src={link.image} alt={link.name} />
                    <p>{link.name}</p>
                   
                </div>
               ))}
            </div>
        </div>
        </>
    );
}
export default ChiefSection;