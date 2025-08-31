import Navbar from "../navbar/navbar";
import './about.css';
const About = () => {
  return(
    <div className="aboutpage">
      <Navbar />
      <div className="container">
        <div className="aboutcontent">
          <h1>Hello, I am <span className="goldcolortext">Yogesh Maske</span></h1>
          <h3>Third Year Engineering Student & Aspiring Developer</h3>
          <p>Currently, I am pursuing a Bachelor's degree in Electronics and Power at BNCOE, where I am in my third year.<br></br> My goal is to work in a technology-driven company where I can apply my knowledge and continue<br></br> to grow as a developer. Outside of academics I love to cricket and listen to music.</p>
          <p>Passionate about technology, innovation, and creating solutions that make a difference.<br></br>Currently exploring the fascinating world of engineering and programming.</p>
        </div>
        <div className="educationcontainer">
        <h1 className="educationheading">Education</h1>
        <div>
          <div className="containers">
           
          <div className="education">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/42/Sant_Gadge_Baba_Amravati_University_logo.png" className="logopic" alt="BITS" />
            <h3>Babaseheb Naik College Of Engineering Pusad</h3>
            <p><span className="boldtext">Degree: </span>B.E in (Electronics & Power)</p>
            <p><span className="boldtext">Year: </span>2023-2027</p>
          </div>
          </div>
          <div className="containers">
          <div className="education">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/42/Sant_Gadge_Baba_Amravati_University_logo.png" className="logopic" alt="srichaitanya" />
            <h3>K.D Junior College Pusad</h3>
            <p><span className="boldtext">Course: </span>HSC</p>
            <p><span className="boldtext">Year: </span>2021-2022</p>
            <p><span className="boldtext">Grade: </span>62%</p>
          </div>
          <div className="education">
            <img src="https://upload.wikimedia.org/wikipedia/en/4/42/Sant_Gadge_Baba_Amravati_University_logo.png" className="logopic" alt="School" />
            <h3>Shri Shivaji Highschool Pusad</h3>
            <p><span className="boldtext">Course: </span>SSC</p>
            <p><span className="boldtext">Year: </span>2019-2020</p>
            <p><span className="boldtext">Grade: </span>83%</p>
          </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default About;