const btnHubungi = document.getElementById("btn-hubungi");
const contactSection = document.getElementById("contact");
const contactForm = document.getElementById("contact-form");

btnHubungi.addEventListener("click", () => {
  contactSection.scrollIntoView({ behavior: "smooth" });
});

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const nama = document.getElementById("nama").value.trim();
  alert(`Terima kasih, ${nama}! Pesan Anda telah diterima.`);

  contactForm.reset();
});
