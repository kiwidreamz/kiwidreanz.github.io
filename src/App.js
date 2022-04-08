import email from './icons/email.png';
import github from './icons/github.png';
import googleplay from './icons/googleplay.png';
import linkedin from './icons/linkedin.png';
import protitle from './icons/protitle2.png';
import socialpic from './icons/social.jpg';
import mealplanpic from './icons/mealplan2.jpg';
import memorypic from './icons/memory2.jpg';
import algopic from './icons/algoviz.jpg';
import scroll from './icons/scroll.png';
import pdf from './icons/stephane_popov_resume.pdf';
import './App.css';
import React, {useState, useEffect} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  document.title = "Stephane Popov Portfolio";

  const [layout, setLayout] = useState(false);

  const changeBackground = () => {
    console.log(window.scrollY);

    if(window.scrollY >= 100) {
      document.querySelector('.layout').style.opacity = 0.99 - ( window.scrollY / 500);
    } else {
      document.querySelector('.layout').style.opacity = 1;
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    
    <div className="App">

      <div className='layout'>
        
        <span>STEPHANE POPOV</span>

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

        <a href={pdf} download="stephane_popov_resume.pdf" id="cvdownloadbutton" class="btn btn-outline-danger" target="_blank">Download my CV</a>
        <img src={scroll} className="scroll"/>

      </div>

        <div className='projects'>
          <div className='project_title'>
            <img id='project_title' src={protitle} alt="here are some of my best projects" />
          </div>

            <div class="card-deck">
              <div className="card text-white bg-dark border-dark mb-5">
                <img class="card-img-top" src={socialpic} alt=""/>
                <div class="card-body">
                  <h5 class="card-title">SOCIAL MEDIA NETWORK</h5>
                  <p class="card-text">Full-Stack Twitter-like application with Python and Javascript. Successfully handled objects, models and users on the back-end, stored and modified data, implemented a friction-less front-end display</p>
                  <a href="https://socialmedianetwork.pythonanywhere.com/" id="buttons" class="btn btn-outline-light" target="_blank">Live Website</a>
                  <a href="https://github.com/kiwidreamz/social-media-network" id="buttons" class="btn btn-outline-info" target="_blank">Github</a>
                </div>
              </div>

              <div className="card text-white bg-dark border-dark mb-5">
                <img class="card-img-top" src={mealplanpic} alt=""/>
                <div class="card-body">
                  <h5 class="card-title">MEAL PLAN MAKER</h5>
                  <p class="card-text">Full-Stack Django app with Python and Javascript. Handled user interaction with a database to create and save meals, implemented algorithm calculating calories and outputting information based on personal requirements</p>
                  <a href="http://mealplanmaker.pythonanywhere.com/weekly" id="buttons" class="btn btn-outline-light" target="_blank">Live Website</a>
                  <a href="https://github.com/kiwidreamz/weekly-meal-planmaker" id="buttons" class="btn btn-outline-info" target="_blank">Github</a>
                  <a href="https://www.youtube.com/watch?v=DdUETc1vdOo" id="buttons" class="btn btn-outline-danger" target="_blank">Video Demo</a>
                </div>
              </div>
            </div>

            <div class="card-deck">
              <div className="card text-white bg-dark border-dark mb-5">
                <img class="card-img-top" src={algopic} alt=""/>
                <div class="card-body">
                  <h5 class="card-title">SORTING ALGORITHMS VISUALIZER</h5>
                  <p class="card-text">React application for visualizing different sorting algorithms. Successfully implemented Selection Sort, Bubble Sort, Insert Sort and Merge Sort. Designed a flawless front-end with animations</p>
                  <a href="https://sortingalgoviz2.vercel.app/" id="buttons" class="btn btn-outline-light" target="_blank">Live Website</a>
                  <a href="https://github.com/kiwidreamz/sorting-algorithms-visualizer" id="buttons" class="btn btn-outline-info" target="_blank">Github</a>
                </div>
              </div>

              <div className="card text-white bg-dark border-dark mb-5">
                <img class="card-img-top" src={memorypic} alt=""/>
                <div class="card-body">
                  <h5 class="card-title">MOBILE APP GAME (ANDROID)</h5>
                  <p class="card-text">Kotlin memory game application for Android phones. Implemented a flawless layout, user interface, game logic and animations, designed the project’s path, identified and fixed cross-compatibility issues</p>
                  <a href="https://play.google.com/store/apps/details?id=com.spopov.footballmemory" id="buttons" class="btn btn-outline-light" target="_blank">Google Play Store App</a>
                  <a href="https://github.com/kiwidreamz/android-game-app" id="buttons" class="btn btn-outline-info" target="_blank">Github</a>
                </div>
              </div>
            </div>
        </div>

    </div>

  );
}

export default App;
