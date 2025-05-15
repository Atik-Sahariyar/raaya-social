const heroSection = document.getElementById("hero-section");

heroSection.innerHTML = `
  <div class="hero-wrapper">
    <div class="hero-left">
      <div class="hero-badge">
        <span class="star"> <img src="../images/icons/star.png"> </span>
        All talents across the world
      </div>
      <h1 class="hero-title">
        Create <span class="linear-gradient-text">Short-From</span><br>
        <span class="linear-gradient-text">Video Content</span> starting<br>
        at <span class="price">$99</span>/month.
      </h1>
      <p class="hero-description">
        Tailored social media content of the highest quality, crafted for your business. Shared on your channels only upon your approval.
      </p>
      <div class="hero-buttons">
        <button class="primary-button primary">Get started</button>
        <button class="btn secondary">Book a demo</button>
      </div>
    </div>

    <div class="hero-right">
      <div class="hero-videos">
        <img src="../images/video-thumbnel.png" alt="video1" class="video-card">
        <img src="../images/video-thumbnel.png" alt="video2" class="video-card">
      </div>

<div class="social-box">
  <p class="social-label">Social channels we work with</p>
  <div class="social-icons">
    <a href="#" aria-label="Instagram"><img src="../images/icons/insta.png" alt="Instagram" /></a>
    <a href="#" aria-label="Facebook"><img src="../images/icons/fb.png" alt="Facebook" /></a>
    <a href="#" aria-label="X"><img src="../images/icons/x.png" alt="X" /></a>
    <a href="#" aria-label="YouTube"><img src="../images/icons/youtube.png" alt="YouTube" /></a>
    <a href="#" aria-label="LinkedIn"><img src="../images/icons/linkedin.png" alt="LinkedIn" /></a>
  </div>
</div>

    </div>
  </div>
`;
