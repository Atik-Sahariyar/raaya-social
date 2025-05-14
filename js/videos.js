const videosForBusinessSection = document.getElementById('videos-for-business');
const videosForPersonalSection = document.getElementById('videos-for-personal-brands');


videosForBusinessSection.innerHTML = `
  <h2 class="headline">Videos <span class="emoji"><img src="../images/watch-imoji.PNG" alt="emoji" height="28px"/></span> For <span class="highlight">business</span></h2>
  <div class="video-wrapper">
    <button class="scroll-btn left" id="left-btn"> < </button>
    <div class="video-container" id="video-scroll-container">
      ${Array.from({ length: 10 }).map(() => `
        <div class="video-card">
          <div>
            <img src="../images/buisness.jpg" alt="" class="thumbnel">
            <button class="play-btn">▶</button>
          </div>
          <p class='title'>Financial services</p>
        </div>
      `).join('')}
    </div>
    <button class="scroll-btn right" id="right-btn"> > </button>
  </div>
`;


videosForPersonalSection.innerHTML = `
   <h2 class="headline">Videos <span class="emoji">   <img src="../images/watch-imoji.PNG" alt="imoji" heiht="28px"/> </span> For <span class="highlight"> personal brands</span> </h2>
  <div class="video-wrapper">
    <button class="scroll-btn left" id="left-btn"> < </button>
    <div class="video-container" id="video-scroll-container">
      ${Array.from({ length: 10 }).map(() => `
        <div class="video-card">
          <div>
            <img src="../images/videoimg.jpg" alt="" class="thumbnel">
            <button class="play-btn">▶</button>
          </div>
          <p class='title'>Financial services</p>
        </div>
      `).join('')}
    </div>
    <button class="scroll-btn right" id="right-btn"> > </button>
  </div>
`

const videoScrollContainer = document.getElementById('video-scroll-container');
const leftBtn = document.getElementById('left-btn');
const rightBtn = document.getElementById('right-btn');


const scrollAmount = 300;

leftBtn.addEventListener('click', () => {
  videoScrollContainer.scrollBy({
    left: -scrollAmount,
    behavior: 'smooth'
  });
});

rightBtn.addEventListener('click', () => {
  videoScrollContainer.scrollBy({
    left: scrollAmount,
    behavior: 'smooth'
  });
});
