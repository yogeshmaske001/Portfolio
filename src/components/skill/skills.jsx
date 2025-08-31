import Navbar from "../navbar/navbar";
import './skills.css';

const Skills = () => {
  return (
    <div className="skills-container">
      <Navbar />
      <h1>Skills</h1>
      <div className="skillscontainer">
        <div className="skillboxcontainer">
          <div className="skillbox">
          <img className="skillimg" src="https://cdn.iconscout.com/icon/free/png-256/free-html-5-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-language-pack-logos-icons-1175208.png" alt="HTML" />
          <h2>HTML</h2>
          </div>
          <div className="skillbox">
          <img className="skillimg" src="https://cdn.worldvectorlogo.com/logos/css-3.svg" alt="CSS" />
          <h2>CSS</h2>
          </div>
          <div className="skillbox">
            <img className="skillimg" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png" alt="javascript" />
            <h2>Javascript</h2>
          </div>
          <div className="skillbox">
            <img className="skillimg" src="https://goldeneagle.ai/static/images/technologies/react-native.png" alt="reactjs" />
            <h2>React JS</h2>
          </div>
        </div>
        <div className="skillboxcontainer">
           
           
          <div className="skillbox">
            <img className="skillimgbs" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Bootstrap_logo.svg/512px-Bootstrap_logo.svg.png?20210507000024" alt="bootstrap" />
            <h2>Bootstrap</h2>
          </div>
          <div className="skillbox">
            <img className="skillimgtwcss" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2560px-Tailwind_CSS_Logo.svg.png" alt="tailwindcss" />
            <h2>Tailwind Css</h2>
          </div>
          <div className="skillbox">
          <img className="skillimgsql" src="https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png" alt="sqlite" />
          <h2>SQLite</h2>
          </div>
          <div className="skillbox">
          <img className="skillimg" src="https://wallpapers.com/images/hd/java-programming-language-logo-transparent-k6ngrbl1m2xbzz4t-2.jpg" alt="java" />
          <h2>Java</h2>
          </div>
        </div>
         
         
      </div>
    </div>
  )
}

export default Skills;