   document.getElementById("buscar").addEventListener("click", () => {
    const nome = document.getElementById("filmes").value.toLowerCase().trim();
    const resultado = document.getElementById("resultado");

    if (!nome) {
      resultado.innerHTML = "Digite um nome de algum filme.";
      return;
    }

    resultado.innerHTML = "Buscando...";

    fetch("https://ghibliapi.vercel.app/films")
      .then(res => res.json())
      .then(filmes => {
        const filme = filmes.find(f => f.title.toLowerCase() === nome);

        if (filme) {
          resultado.innerHTML = `
            <h3>${filme.title}</h3>
            <p><strong>Descrição:</strong> ${filme.description}</p>
            <p><strong>Diretor:</strong> ${filme.director}</p>
            <p><strong>Ano de lançamento:</strong> ${filme.release_date}</p>
          `;
        } else {
          resultado.innerHTML = "Filme não encontrado. Verifique o nome digitado.";
        }
      })
      .catch(error => {
        resultado.innerHTML = 'Erro: ' + error.message;
      });
  });
