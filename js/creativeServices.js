const creativeServices = document.getElementById("creative-service");

// Wait for DOM to update
setTimeout(() => {
  const priceCards = document.querySelectorAll('.price-card');

  priceCards.forEach((card) => {
    const radio = card.querySelector('input[type="radio"]');

    // On click or change, update the styles
    radio.addEventListener('change', () => {
      priceCards.forEach((c) => c.classList.remove('active')); // Remove from all
      card.classList.add('active'); // Add to selected
    });

    // Optionally, trigger it on load for default checked radio
    if (radio.checked) {
      card.classList.add('active');
    }
  });
}, 100);


creativeServices.innerHTML = `
  <div>
    <div class="service-heading">
      <h2 class="headline">All-Inclusive <span class="highlight">Creative Services</span></h2>
      <p>Our fixed monthly rate covers all your creative needs, with predictable pricing, no contracts, and unlimited revisions. Explore our services to find the perfect solution for your brand’s growth!</p>
    </div>

    <div class="service-container">
      <div class="service-grid">
        <!-- Left Column -->
        <div class="service-left">
          <h3 class="what-provide"><img src="./images/cheked.png" alt=""> What We provide ?</h3>

          <div class="service-item">
            <h4 class="service-title"><img src="./images/green-checked.png" alt=""> Low-cost, high quality</h4>
            <p class="c-service-description">Most agencies charge way too much. We are a lean team with streamlined workflows and a platform built from the ground up that allows us to charge much less.</p>
          </div>

          <div class="service-item">
            <h4 class="service-title"><img src="./images/green-checked.png" alt=""> Full transparency</h4>
            <p class="c-service-description">We charge much less due to streamlined workflows and our platform built from the ground up.</p>
          </div>

          <div class="service-item">
            <h4 class="service-title"><img src="./images/green-checked.png" alt=""> Cancel anytime</h4>
            <p class="c-service-description">No long-term contracts. Leave anytime, but you might just want to stay forever.</p>
          </div>
        </div>

        <!-- Right Column -->
        <div class="service-right">
          <div class="price-option">
            <label class="price-card">
              <div>
                <h4>5 Short form video – $99 / week</h4>
                <p>Tailored graphic and video content packages.</p>
              </div>
             <input type="radio" name="service" />
            </label>

            <label class="price-card active">
              
              <div>
                <span class="popular-tag">Most popular</span>
                <h4>10 Short form video – $99 / week</h4>
                <p>Tailored graphic and video content packages.</p>
              </div>
              <input type="radio" name="service" checked />
            </label>

            <label class="price-card">
              
              <div>
                <h4>5 Short form video – $99 / week</h4>
                <p>Tailored graphic and video content packages.</p>
              </div>
              <input type="radio" name="service" />
            </label>
          </div>

        </div>
      </div>
      
       <div class="get-start-btn"> <button class="primary-button">Get started</button></div>
    </div>
  </div>
`;
