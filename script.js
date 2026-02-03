document.getElementById("formAgendamento").addEventListener("submit", function(e){
  e.preventDefault();

  const nome = document.getElementById("nome").value;
  const data = document.getElementById("data").value;
  const servico = document.getElementById("servico").value;
  const mensagem = document.getElementById("mensagem").value;

  const texto =
`Olá! Meu nome é ${nome}.
Gostaria de fazer um agendamento:

 Data: ${data}
 Serviço: ${servico}.
 Observações: ${mensagem}.`;

  const url = "https://wa.me/5527995733542?text=" + encodeURIComponent(texto);
  window.open(url, "_blank");
});
