import "../footer.css"
function Footer(){
    return(
        <div className="footer container">
            <div className="footer-section">
              <p className="title">FoodiesHub</p>
              <p>FoodiesHub is a place
                for those who love food. We're dedicated to providing a
                diverse and inclusive culinary experience.
                Our goal is to bring people together through the universal love of food.</p>
              <p>2021 | All rights reserved</p>
            </div>
            <div className="footer-section">
              <p className="title">Contact us</p>
              <p>foodhub@gmail.com</p>
              <p>025-464-4646</p>
              <p>23 nyc street</p>
            </div>
            <div className="footer-section">
              <p className="title">Socials</p>
              <p>Facebook</p>
              <p>Twitter</p>
              <p>Instagram</p>
            </div>
        </div>
    )
}
export default Footer;