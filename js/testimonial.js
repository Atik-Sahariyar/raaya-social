const testimonialsSection = document.getElementById("testimonials-section");

testimonialsSection.innerHTML = `
  <div class="testimonials">
    <h2 class="headline">Client Stories See <span class="emoji">   <img src="../images/watch-imoji.PNG" alt="imoji" heiht="28px"/> </span> What <br><span class="highlight">Our Partners Say</span></h2>

    <div class="video-slider">
      ${Array.from({ length: 5 }).map( ()=> `
        <div class="t-video-card">
          <img src="../images/thumbnel.jpg" alt="video" class="t-thumbnel" />
          <button class="play-btn">▶</button>
          <div class="overlay-text"><img src="../images/influencer.jpg" class="influencer" alt="user"/> <div>Safur Hadi <br><span class="infu">Influencer</span></div> </div>
        </div>
      `).join('')}
    </div>

    <div class="review-flex">
       ${Array.from({ length: 2 }).map(() => `
        <div class="review-card">
          <div class="review-header">
            <img src="../images/user.jpg" alt="user"/>
            <div>
              <h4>Andrei Kasyanau</h4>
              <p>CEO at Glorium Technologies</p>
            </div>
            <span class="rating">★ (4.8)</span>
          </div>
          <p class="review-text">
            Our smart developers build innovative, efficient, and high-performance solutions, efficient, and high-performance solutions.
          </p>
        </div>
      `).join('')}
    </div>
    <div class="review-grid">
      ${Array.from({ length: 3 }).map(() => `
        <div class="review-card">
          <div class="review-header">
            <img src="../images/user.jpg" alt="user"/>
            <div>
              <h4>Andrei Kasyanau</h4>
              <p>CEO at Glorium Technologies</p>
            </div>
            <span class="rating">★ (4.8)</span>
          </div>
          <p class="review-text">
            Our smart developers build innovative, efficient, and high-performance solutions, efficient, and high-performance solutions.
          </p>
        </div>
      `).join('')}
    </div>
  </div>
`;
