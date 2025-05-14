const faqsData = [
  {
    question: "What cars do you have in your inventory?",
    answer: "Lorem ipsum dolor sit amet consectetur. Integer facilisi sit tortor lobortis amet. Risus vestibulum nec fringilla sed in tincidunt tempus porta. Vulputate ornare vitae turpis mauris."
  },
  {
    question: "Do you offer test drives?",
    answer: "Yes, we offer test drives for most vehicles. Please schedule in advance."
  },
  {
    question: "What financing options are available?",
    answer: "We provide multiple financing options through our partner banks and credit unions."
  },
  {
    question: "Can I trade in my old car?",
    answer: "Absolutely. We evaluate your current vehicle and apply the value to your new purchase."
  },
  {
    question: "How do I schedule a service appointment?",
    answer: "You can schedule a service appointment online or by calling our service center."
  }
];

const faqContainer = document.getElementById("faq-container");

// Generate HTML from array
faqContainer.innerHTML = faqsData
  .map((item, index) => {
    const isFirst = index === 0;
    return `
      <div class="faq ${isFirst ? "active" : ""}">
        <div class="faq-question">
          ${item.question}
          <span class="icon">${isFirst ? "-" : "+"}</span>
        </div>
        <div class="faq-answer" style="display: ${isFirst ? "block" : "none"};">
          ${item.answer}
        </div>
      </div>
    `;
  })
  .join("");

// Add event listeners
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.querySelector(".faq-question").addEventListener("click", () => {
    faqs.forEach((item) => {
      if (item !== faq) {
        item.classList.remove("active");
        item.querySelector(".faq-answer").style.display = "none";
        item.querySelector(".icon").textContent = "+";
      }
    });

    const isActive = faq.classList.toggle("active");
    faq.querySelector(".faq-answer").style.display = isActive ? "block" : "none";
    faq.querySelector(".icon").textContent = isActive ? "-" : "+";
  });
});
