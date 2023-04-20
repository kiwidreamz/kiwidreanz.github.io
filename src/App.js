import email from './icons/email.png';
import github from './icons/github.png';
import googleplay from './icons/googleplay.png';
import linkedin from './icons/linkedin.png';
import pdf from './icons/stephane_popov_resume.pdf';
import './App.css';
import React, {useState, useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  document.title = "Stephane Popov Portfolio";

  const [layout, setLayout] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");

  return (
    
    <div className="App">

      <div className='layout'>
        
        <span>STEPHANE POPOV</span>
        
        <div className="projects">
          
          <div className="projectcardd">
            <button className="project-button">
                <h5 class="project-title">Social Media Network</h5>
                <p class="project-text">Full-Stack Twitter-like Django application with Python and Javascript</p>
                <a href="https://socialmedianetwork.pythonanywhere.com/" id="buttonss" class="btn btn-outline-dark btn-sm" target="_blank">Live Website</a>
                <a href="https://github.com/kiwidreamz/social-media-network" id="buttonss" class="btn btn-outline-info btn-sm" target="_blank">Github</a>
            </button>
          </div>

          <div className="projectcardd">
            <button className="project-button">
                <h5 class="project-title">Sorting Visualizer</h5>
                <p class="project-text">Animated React JS application visualizing 4 different sorting algorithms</p>
                <a href="https://sortingalgoviz2.vercel.app/" id="buttonss" class="btn btn-outline-dark btn-sm" target="_blank">Live Website</a>
                <a href="https://github.com/kiwidreamz/sorting-algorithms-visualizer" id="buttonss" class="btn btn-outline-info btn-sm" target="_blank">Github</a>
            </button>
          </div>

          <div className="projectcardd">
            <button className="project-button">
                <h5 class="project-title">Android Game App</h5>
                <p class="project-text">Memory game built in Kotlin with flawless layout and user interface</p>
                <a href="https://play.google.com/store/apps/details?id=com.spopov.footballmemory" id="buttonss" class="btn btn-outline-dark btn-sm" target="_blank">Google Play App</a>
                <a href="https://github.com/kiwidreamz/android-game-app" id="buttonss" class="btn btn-outline-info btn-sm" target="_blank">Github</a>
            </button>
          </div>

          <div className="projectcardd">
            <button className="project-button">
                <h5 class="project-title">Premier League Team Quiz</h5>
                <p class="project-text">Flask web-app personality quiz to figure out which PL team to support</p>
                <a href="https://premierleagueteamquiz.pythonanywhere.com/" id="buttonss" class="btn btn-outline-dark btn-sm" target="_blank">Live Website</a>
                <a href="https://github.com/kiwidreamz/premier-league-team-quiz" id="buttonss" class="btn btn-outline-info btn-sm" target="_blank">Github</a>
            </button>
          </div>

          <div className="projectcardd">
            <button className="project-button">
                <h5 class="project-title">Meal Plan Maker</h5>
                <p class="project-text">Full-Stack Django web-app with Python and Javascript</p>
                <a href="http://mealplanmaker.pythonanywhere.com/weekly" id="buttonss" class="btn btn-outline-dark btn-sm" target="_blank">Live Website</a>
                <a href="https://github.com/kiwidreamz/weekly-meal-planmaker" id="buttonss" class="btn btn-outline-info btn-sm" target="_blank">Github</a>
                <a href="https://www.youtube.com/watch?v=DdUETc1vdOo" id="buttonss" class="btn btn-outline-danger btn-sm" target="_blank">Video Demo</a>
            </button>
          </div>

        </div>

        <div className="links">
          
          <a href="https://github.com/kiwidreamz" target="_blank">
            <img src={github} className="rotation" alt="github"/>
          </a>

          <a href="https://www.linkedin.com/in/stephane-popov/" target="_blank">
            <img src={linkedin} className="rotation" alt="linkedin" />
          </a>
          
          <a href="https://play.google.com/store/apps/developer?id=Stephane+Popov" target="_blank">
            <img src={googleplay} className="rotation" alt="googleplay" />
          </a>

          <a href="mailto:stephane.popov@gmail.com" target="_blank">
            <img src={email} className="rotation" alt="email" />
          </a>          

        </div>

        <div class="cv-download">
        <a href={pdf} download="stephane_p_resume.pdf" id="cvdownloadbutton" class="btn btn-outline-secondary" target="_blank">Download my resume / CV</a>
        </div>
      </div>
    </div>

  );
}

export default App;
