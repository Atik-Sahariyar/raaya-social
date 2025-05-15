const servicesSection = document.getElementById("services-section");

    const servicesOverviewData = [
        {
            title: 'We take raw video and/or premium stock footage',
            imageSrc: '../images/clip-img.jpg', 
            description: 'Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video. Our team will help you choose the best hooks & content from your video.'
        },
        {
            title: 'We structure it for views and watch-time and time',
            imageSrc: '../images/clip-img.jpg', 
            description: 'Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video. Our team will help you choose the best hooks & content from your video.'
        },
        {
            title: 'We create your unique style and theme time',
            imageSrc: '../images/clip-img.jpg', 
            description: 'Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video. Our team will help you choose the best hooks & content from your video.'
        }
    ];

    const videoFormatsData = [
        { title: 'Instagram Reels', description: 'Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.' },
        { title: 'Tik Tok videos', description: 'Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.' },
        { title: 'YouTube shorts', description: 'Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.' },
        { title: 'Instagram Reels', description: 'Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.' },
        { title: 'Educational shorts', description: 'Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.' },
        { title: 'Instagram Reels', description: 'Share your long-form videos or raw clips with us. Our team will help you choose the best hooks & content from your video.' }
    ];

servicesSection.innerHTML = `
  <div class="services-section-container">
    <h2 class="headline">Turn your raw video into <span class="highlight">engaging clip</span></h2>

    <div class="service-cards-wrapper">
      ${servicesOverviewData.map(data => `
        <div class="service-card">
          <div class="title-head">
            <img src="./images/check-icon.png" alt="check-icon" class="check-icon">
            <p class="title">${data.title}</p>
          </div>
          <img src="${data.imageSrc}" alt="clip" class="service-img">
          <p class="service-description">${data.description}</p>
        </div>
      `).join('')}
    </div>

    <div class="service-cards2-wrapper">
      ${videoFormatsData.map(data => `
        <div class="service-card2">
          <p class="title">${data.title}</p>
          <p class="service-description">${data.description}</p>
        </div>
      `).join('')}
    </div>
  </div>
`;
