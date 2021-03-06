import React from 'react'
import Header from '../components/Header'
import {useState} from 'react'
function Projects() {
    const [state] = useState({fshop:'assets/projects/fshop.jpg',travel:'assets/projects/travel.jpg',chat:'assets/projects/chat.jpg',crypto:'assets/projects/crypto.jpg'})
    return (
        <>
         <Header/>
    <main>
      <section class="about">
        <div class="projects__bio-image">
          <h1 class="text-secondary">My projects</h1>
        </div>
        <div class="projects__items">
          <div class="projects__item">
            <img src={state.fshop} alt="My project" />
            <div class="projects__btns">
              <a
                href="http://fshop-app.herokuapp.com/"
                class="projects__btn"
              >
                <i class="fas fa-eye"></i>Preview
              </a>
              <a href="https://github.com/HaTan1608/FShop" class="projects__btn">
                <i class="fab fa-github"></i>Github
              </a>
            </div>
          </div>
          <div class="projects__item">
            <img src={state.travel} alt="My project" />
            <div class="projects__btns">
              <a
                href="https://nifty-golick-8629ac.netlify.app"
                class="projects__btn"
              >
                <i class="fas fa-eye"></i>Preview
              </a>
              <a href="https://github.com/HaTan1608/Scss-Travel-Website" class="projects__btn">
                <i class="fab fa-github"></i>Github
              </a>
            </div>
          </div>
          <div class="projects__item">
            <img src={state.crypto} alt="My project" />
            <div class="projects__btns">
              <a
                href="https://crypto-app-th.herokuapp.com"
                class="projects__btn"
              >
                <i class="fas fa-eye"></i>Preview
              </a>
              <a href="https://github.com/HaTan1608/crypto-app" class="projects__btn">
                <i class="fab fa-github"></i>Github
              </a>
            </div>
          </div>
          <div class="projects__item">
            <img src={state.chat} alt="My project" />
            <div class="projects__btns">
              <a
                href="https://chat-app-th.netlify.app"
                class="projects__btn"
              >
                <i class="fas fa-eye"></i>Preview
              </a>
              <a href="https://github.com/HaTan1608/chat-app" class="projects__btn">
                <i class="fab fa-github"></i>Github
              </a>
            </div>
          </div>
        </div>
       
        <div class="social-icons">
          
          <a href="https://www.facebook.com/profile.php?id=100030267948496">
            <i class="fab fa-facebook fa-2x"></i>
          </a>
         
          <a href="https://github.com/HaTan1608">
            <i class="fab fa-github fa-2x"></i>
          </a>
        </div>
        <footer>&copy; Copyright</footer>
      </section>
    </main>
        </>
    )
}

export default Projects
