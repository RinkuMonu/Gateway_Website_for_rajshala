function openTab(event, tabId) {

  const contents = document.querySelectorAll(".tab-content");

  contents.forEach(tab => {
    tab.classList.add("hidden");
  });

  document.getElementById(tabId).classList.remove("hidden");

  const images = {
    ecommerce: "/images/ecommerce.jpg",
    education: "/images/education.jpg",
    bfsi: "/images/bfsi.png",
    saas: "/images/saas.webp"
  };

  document.getElementById("tabImage").style.backgroundImage =
    `url(${images[tabId]})`;

  const tabs = document.querySelectorAll(".tab-btn");

  tabs.forEach(btn => {
    btn.classList.remove("border-b-3", "border-[#134E4A]");
  });

  event.currentTarget.classList.add("border-b-3", "border-[#134E4A]");
}

function toggleFaq(index) {

  const answers = document.querySelectorAll(".faq-answer");

  answers.forEach((answer, i) => {
    if (i === index) {
      answer.classList.toggle("hidden");
    } else {
      answer.classList.add("hidden");
    }
  });

}