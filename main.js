document.addEventListener('DOMContentLoaded', () => {

  function normalizarTexto(texto) {

    texto = texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    texto = texto.toLowerCase();

    texto = texto.replace(/[^a-z\s]/g, "");
    return texto;
  }

  function fCriptografar() {

      let textoCriptografar = document.getElementById("texto_criptografar").value;
      textoCriptografar = normalizarTexto(textoCriptografar);

      let textoCriptografado = textoCriptografar
          .replace(/e/g, "enter")
          .replace(/i/g, "imes")
          .replace(/a/g, "ai")
          .replace(/o/g, "ober")
          .replace(/u/g, "ufat");

      const visualizarTexto = document.getElementById('visualizar_texto');

      if (visualizarTexto) {

        visualizarTexto.innerHTML = '';

        const p = document.createElement('p');
        p.className = 'texto_criptografado';
        p.textContent = textoCriptografado;
        visualizarTexto.appendChild(p);

        const botaoCopiar = document.createElement('button');
        botaoCopiar.className = 'copiar';
        botaoCopiar.textContent = 'Copiar';
        botaoCopiar.addEventListener('click', fCopiar);
        visualizarTexto.appendChild(botaoCopiar);
    }
  }

  function fDescriptografar() {
      let textoCriptografar = document.getElementById("texto_criptografar").value;
      let textoCriptografado = textoCriptografar
          .replace(/enter/g, "e")
          .replace(/imes/g, "i")
          .replace(/ai/g, "a")
          .replace(/ober/g, "o")
          .replace(/ufat/g, "u");

      visualizarTexto = document.getElementById('visualizar_texto');

      if (visualizarTexto) {
        visualizarTexto.innerHTML = '';

        const p = document.createElement('p');
        p.className = 'texto_criptografado';
        p.textContent = textoCriptografado;
        visualizarTexto.appendChild(p);

        const botaoCopiar = document.createElement('button');
        botaoCopiar.className = 'copiar';
        botaoCopiar.textContent = 'Copiar';
        botaoCopiar.addEventListener('click', fCopiar);
        visualizarTexto.appendChild(botaoCopiar);
    }
  }

  const botaoDescriptografar = document.querySelector('.descriptografar');
  if (botaoDescriptografar) {
      botaoDescriptografar.addEventListener('click', fDescriptografar);
  }

  const botaoCriptografar = document.querySelector('.criptografar');
  if (botaoCriptografar) {
      botaoCriptografar.addEventListener('click', fCriptografar);
  }

  function fCopiar() {

    const textoParaCopiar = document.querySelector('#visualizar_texto .texto_criptografado').textContent;

    navigator.clipboard.writeText(textoParaCopiar)

  }});
