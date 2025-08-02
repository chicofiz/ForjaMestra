document.querySelectorAll('.carrossel-texto-container').forEach(container => {
  const imagens = container.querySelectorAll('.carrossel-img');
  let indice = 0;

  function trocarImagem() {
    imagens.forEach(img => img.classList.remove('active'));
    imagens[indice].classList.add('active');
    indice = (indice + 1) % imagens.length;
  }

  trocarImagem();
  setInterval(trocarImagem, 4000);
});
