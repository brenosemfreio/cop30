const eventos = {
  24: "Abertura oficial da COP30 + discursos iniciais + cerimônia cultural amazônica.",
  25: "Painéis sobre financiamento climático e redução de emissões globais.",
  31: "Fechamento da COP30 e apresentação de metas finais e acordos diplomáticos."
};

document.querySelectorAll('.event').forEach(day => {
  day.addEventListener('click', () => {
    const num = day.getAttribute('data-day');
    document.getElementById('agendaTitle').textContent = `Dia ${num} - Evento`;
    document.getElementById('agendaText').textContent = eventos[num];
    new bootstrap.Modal(document.getElementById('agendaModal')).show();
  });
});

document.getElementById("cadastroForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const uf = document.getElementById("uf").value;
  const lgpd = document.getElementById("lgpd").checked;

  if (!nome || !email || !uf || !lgpd) {
    alert("Por favor, preencha todos os campos obrigatórios.");
    return;
  }

  alert("Cadastro enviado com sucesso! Obrigado!");
  this.reset();
});
