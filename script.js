document.getElementById("form").addEventListener("submit", function(event) {
  event.preventDefault();
  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const origem = document.getElementById("origem").value;

  if (nome && email && origem) {
    document.getElementById("formulario").style.display = "none";
    document.getElementById("pagamento").classList.remove("oculto");
  }
});

function mostrarConteudo() {
  // Esconde todo o conteúdo principal da página
  document.getElementById("main-content").style.display = "none";

  // Mostra só a tela de "Verificando pagamento"
  document.getElementById("verificando").classList.remove("oculto");
}

function copiarPix() {
  const codigo = document.querySelector(".pix-code").textContent.trim();
  navigator.clipboard.writeText(codigo).then(() => {
    alert("Código Pix copiado com sucesso!");
  }, () => {
    alert("Não foi possível copiar o Pix. Copie manualmente.");
  });
}
