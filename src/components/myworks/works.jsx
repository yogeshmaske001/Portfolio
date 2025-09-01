import Navbar from "../navbar/navbar"
import './works.css';
const Myworks = () => {
  return (
    <div className="myworkspage">
      <Navbar />
      <h1>Projects</h1>
      <div className="projectscontainer">
        
        <div className="project">
          <h2 className="projectname">AI-Virtual Assistant</h2>
          <p>
            A voice-enabled AI assistant built with the MERN stack.
            Supports real-time voice input using the Web Speech API.
            Features chat history, secure JWT authentication, and image uploads.
            Deployed with a responsive React UI for free on Render.
          </p>
          <p><a className="prolink" href="https://virtual-assistant-j067.onrender.com/signup" target="blank">View project</a></p>
        </div>
        <div className="project">
          <h2 className="projectname">TO-Do List App</h2>
          <p>
           A To-Do List App built with HTML, CSS, and JavaScript.
           Supports full CRUD operations with tasks saved in Local Storage.
           Includes a progress bar to track task completion and confetti animation for celebrations.
           Designed with a responsive, user-friendly UI for smooth task management.
          </p>
          <p><a className="prolink" href="https://yogeshmaske001.github.io/To-Do-List/           " target="blank">View project</a></p>
        </div>
        <div className="project">
          <h2 className="projectname">Weather App</h2>
          <p>A Weather App built with Vite + React for fast and modern performance.
            Users can search any city to view temperature, humidity, pressure, and conditions.
            Weather data is fetched in real-time from a free weather API.
            The project is deployed via GitHub Pages with code available on GitHub.
          </p>
          <p><a className="prolink" href="https://yogeshmaske001.github.io/Weather-App/" target="blank">View project</a></p>
        </div>
      </div>
    </div>
  )
}


export default Myworks;