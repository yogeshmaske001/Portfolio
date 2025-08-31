import Navbar from "../navbar/navbar";
import './contactme.css';
const ContactMe = () => {
  return(
    <div className="contactmepage">
      <Navbar/>
      <div className="contactmecontainer">
        <h1 className="contactmeheading">Contact Me</h1>
        <div className="contactmedetailscontainer">
        <div className="contactmedetails">
          <i class="fa-solid fa-phone"></i>
          <p>+91 7387364867</p>
        </div>
        <div className="contactmedetails">
          <i class="fa-solid fa-envelope"></i>
          <p>yogeshmaske774@gmail.com</p>
        </div>
        <div className="contactmedetails">
          <i class="fa-brands fa-linkedin"></i>
          <a href="https://www.linkedin.com/in/yogeshmaske/" className="atag" target="blank">
          <p>https://www.linkedin.com/in/yogeshmaske/</p>
          </a>
        </div>
        <div className="contactmedetails">
          <i class="fa-brands fa-github"></i>
          <a href="https://github.com/yogeshmaske001" className="atag" target="blank">
          <p>https://github.com/yogeshmaske001</p>
          </a>
        </div>
        </div>
      </div>
    </div>
  )
}

export default ContactMe;