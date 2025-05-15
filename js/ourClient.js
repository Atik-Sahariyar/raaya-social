const logos = [
  { name: "Boltshift", logo: "../images/boltshift.png" },
  { name: "Lightbox", logo: "../images/lightbox.png" },
  { name: "FeatherDev", logo: "../images/featherdev.png" },
  { name: "Spherule", logo: "../images/spherule.png" },
  { name: "Global", logo: "../images/global.png" },
];

const featuredContainer = document.getElementById("featured-client");

featuredContainer.innerHTML = `
  <div class="featured-wrapper">
    <div class="featured-static">
      <h3>50+</h3>
      <p>Our clients are featured in</p>
    </div>
    <div class="featured-divider"></div>
    <div class="logo-carousel">
      <div class="carousel-track">
        ${logos
          .map(
            (item) => `
            <div class="logo-item">
              <img src="${item.logo}" alt="${item.name}" />
              <span>${item.name}</span>
            </div>
          `
          )
          .join("")}
        ${logos
          .map(
            (item) => `
            <div class="logo-item">
              <img src="${item.logo}" alt="${item.name}" />
              <span>${item.name}</span>
            </div>
          `
          )
          .join("")}
      </div>
    </div>
  </div>
`;
