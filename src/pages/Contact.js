import React from 'react'
import Header from '../components/Header'

function Contact() {
    return (<>
          <Header/>
      <main>
        <section class="contact">
          <h2>Contact me..</h2>
          <div class="contact__list">
            <div class="contact__email">
              <i class="fas fa-envelope">Email:</i>
              <div class="text-secondary">tandev94@gmail.com</div>
            </div>
            <div class="contact__phone">
              <i class="fas fa-mobile-alt">Phone</i>
              <div class="text-secondary">0392649291</div>
            </div>
            <div class="contact__address">
              <i class="fas fa-marker-alt">Address:</i>
              <div class="text-secondary">21 Co Bac, District 1 </div>
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

export default Contact
