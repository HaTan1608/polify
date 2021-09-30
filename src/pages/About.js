import React from 'react'
import Header from '../components/Header'

function About() {
    return (
        <>
        <Header/>
    <main>
      <section class="about">
        <div class="about__bio-image">
          <div class="about__bio">
          
          </div>
        </div>
        <div class="jobs">
          <div class="jobs__job">
            <h2 class="text-secondary">2018 - 2020</h2>
            <h3>FPT Aptech</h3>
            <h6>Software engineer</h6>
            <p>2018-2020 ( Graduated with grade of Credit )</p>
          </div>
          <div class="jobs__job">
            <h2 class="text-secondary">2021 - Now</h2>
            <h3>Some courses in Udemy</h3>
            <p>About ReactJS, Redux, SASS, MERN Stack</p>
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

export default About
