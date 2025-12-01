document.addEventListener("DOMContentLoaded", () => {

  const toggle = document.getElementById("theme-toggle");
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("light");
  });

  const modal = document.getElementById("modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = document.getElementById("modal-close");

  document.querySelectorAll(".card").forEach(card => {
    card.addEventListener("click", () => {
      const title = card.querySelector("h3")?.innerText || "";
      const text = card.querySelector("p")?.innerText || "";

      modalBody.innerHTML = `<h2>${title}</h2><p>${text}</p>`;
      modal.style.display = "flex";
    });
  });

  closeBtn.onclick = () => modal.style.display = "none";
  window.onclick = e => { if (e.target === modal) modal.style.display = "none"; }

  const form = document.getElementById("cadastroForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value;
    const uf = document.getElementById("uf").value;
    const lgpd = document.getElementById("lgpd").checked;

    if (!nome || !email || !uf || !lgpd) {
      alert("Por favor, preencha todos os campos obrigatórios e aceite a LGPD.");
      return;
    }

    alert("Cadastro enviado com sucesso!");
    form.reset();
  });

});
