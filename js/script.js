const campoBusca = document.getElementById("campoBusca");
const botaoPesquisar = document.getElementById("botaoPesquisar");
const resultadosBusca = document.getElementById("resultadosBusca")

const servicos = [
    {
        nome: "Segunda via do CPF",
        categoria: "Documentos",
        descricao: "Consulte informações sobre a segunda via do CPF;",
        link: "servico.html"
    },
    {
        nome: "Carteira de trabalho",
        categoria: "Trabalho",
        descricao: "Consulte informações sobre a Carteira de Trabalho.",
        link: "servico.html"
    },
    {
        nome: "Consulta do Bolsa Familia",
        categoria: "Beneficios",
        descricao: "Consulte informações sobre o Bolsa Familia",
        link: "servico.html"
    },
    {
        nome: "Agendamento de atendimento",
        categoria: "Atendimento",
        descricao: "Agende um atendimento em um serviço público.",
        link: "servico.html"
    },
    {
        nome: "Carteira de motorista",
        categoria: "Transporte",
        descricao: "Consulte informações sobre sua carteira de motorista.",
        link: "servico.html"
    }
];

console.log(campoBusca);
console.log(botaoPesquisar);

botaoPesquisar.addEventListener("click", function() {
    const texto = campoBusca.value.toLowerCase();

    const resultado = servicos.filter(function(servico) {
        return servico.nome.toLowerCase().includes(texto);
    });
    if (resultado.length > 0){

        let html = "";
        
        for (let i = 0; i < resultado.length ;i++){
            html = html + ` 
            <div class="card-servico">
                <h3>${resultado[i].nome}</h3>
                <p>${resultado[i].descricao}</p>
                <p>Categoria: ${resultado[i].categoria}</p>
                <a href="${resultado[i].link}" class="botao-servico"> 
                Ver serviço
                </a>
            </div>
            `;
        }
        resultadosBusca.innerHTML = html;

    }
    else{
        resultadosBusca.innerHTML = "<p> nenhum servico encontrado </p>";

    }

    console.log(resultado);

});           