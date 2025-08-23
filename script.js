async function carregarIndice() {
    const resp = await fetch("/data/listaDeEspecies.json");
    const indice = await resp.json();

    const lista = document.getElementById("especies");
    indice.especies.forEach(esp => {
        const li = document.createElement("li");
        li.textContent = `${esp.nomePopular} - ${esp.nomeCientifico}`;
        li.dataset.json = esp.pasta;
        lista.appendChild(li);
    });

    document.querySelectorAll("#lista-abelhas li").forEach(item => {
        item.addEventListener("click", async () => {
            const resp = await fetch(item.dataset.json);
            const dados = await resp.json();

            const detalhes = document.getElementById("detalhes");
            detalhes.innerHTML = `
                <h2>${dados.nomePopular} <small>(${dados.nomeCientifico})</small></h2>
                <p>${dados.descricao}</p>
                <div class="imagens">
                </div>
            `;
        });
    });
}

carregarIndice();