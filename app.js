let section = document.getElementById("resultados-pesquisa");

let titulo = "";
let descricao = "";
let tags = "";

function pesquisar() {

    let resultados = "";

    let campoPesquisa = document.getElementById("campo-pesquisa").value;
    console.log(campoPesquisa);
    campoPesquisa = campoPesquisa.toLowerCase();

    if (campoPesquisa == " " || campoPesquisa =="") {
        section.innerHTML = "<p>Nada foi encontrado. Precisamos saber o que você quer pesquisar.</p>";
        return;

    } else {

        for (let dado of dados) {

            titulo = dado.titulo.toLowerCase();
            descricao = dado.descricao.toLowerCase();
            tags = dado.tags.toLowerCase();
            console.log(titulo.includes(campoPesquisa));

            if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa))  {

                resultados += `
            <div class="item-resultado"> 
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href=${dado.link} target="_blank">Mais informações</a>
            </div>`;
            };


        };
    };

    if (!resultados) {
        resultados = "<p>Nada foi encontrado</p>"
    }

    section.innerHTML = resultados;

};