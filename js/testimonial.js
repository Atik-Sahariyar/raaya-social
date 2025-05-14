const testimonialsSection = document.getElementById("testimonials-section");

testimonialsSection.innerHTML = `
  <div class="testimonials">
    <h2 class="heading">Client Stories See <span class="emoji">   <img src="../images/watch-imoji.PNG" alt="imoji" heiht="28px"/>      </span> What <br><span class="highlight">Our Partners Say</span></h2>

    <div class="video-slider">
      ${[1, 2, 3, 4, 5].map(i => `
        <div class="video-card">
          <img src="./images/video${i}.jpg" alt="video${i}" />
          <button class="play-btn">▶</button>
          <div class="overlay-text">Safur Hadi <br><span>Influencer</span></div>
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
