import './home.css';
import Navbar from '../navbar/navbar.jsx';
import { Link } from 'react-router-dom';
import About from '../about/about.jsx';
import Skills from '../skill/skills.jsx';
import Myworks from '../myworks/works.jsx';
 


const Home = () => {
  return(
    <div>
    <div className='homepage'>
      <Navbar />
      <div className='text'>
        <div className='textandimage'>
          <div className="hero">
            <h1>Welcome to My Portfolio</h1>
            <h4>Explore my projects and skills</h4>
            <button className='contactmebtn'>
              <Link className='linkcmbtn' to="/contactme">
              Contact Me
            </Link>
            </button>
          </div>
          <div>
            <img src="/assets/Images/Lindin photo.jpg" alt="Profile" className='profilepic' />
          </div>
        </div>
      </div>
    </div>
    {/* <About />
    <Skills />
    <Myworks /> */}
    </div>
  )
}

export default Home;