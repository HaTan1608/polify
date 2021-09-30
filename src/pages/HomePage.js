import React from 'react'
import Header from '../components/Header'
function HomePage() {
    return (
        <>
          <Header/>
    <main>
      <section className="home">
        <h2>Hi! My name is</h2>
        <h1 className="home__name">
          Ha <span className="home__name--last"> Tan </span>
        </h1>
        <h1>Web developer, programmer</h1>
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

export default HomePage
