let etapaAtual = 1;

function trocarEtapa() {
    etapaAtual++;
    atualizarTexto();
}

function voltarEtapa() {
    etapaAtual--;
    atualizarTexto();
}

function atualizarTexto() {
    const etapa1Text = "Para melhor entendimento do que preciso fazer, busquei outras fontes de estudo, como fóruns na internet, e vídeos de programadores no youtube, também fiz alguns cursos de html e css através da Fundação Bradesco, que oferece cursos gratuitos voltados a áreas da tecnologia desde iniciantes a até mesmo alguns mais complexos.";
    const etapa2Text = "Primeiramente, criei os arquivos index.html, e style.css. Essa etapa de criação é feito para que o arquivo criado em html possa ter uma personalidade (design) criada pelo css, e eles irão trabalhar em conjunto para poder dar uma interface atrativa para a página criada (até o momento – Às 08:02 horas, do dia 18/05/2023 - sem definição de tema). Para criar esses arquivos, utilizei o Visual Studio, software que trabalha com várias linguagens juntas, o que vai facilitar bastante no desenvolvimento do projeto. Também é necessário criar uma pasta para deixar todos os arquivos criados e utilizados juntos.";
    const etapa3Text = "Primeiros passos após a criação da pasta e dos arquivos: Ao começar a editar um arquivo html pelo visual Studio, ao digitar o ponto de exclamação, o próprio software te sugere a complentação básica do código. Após Criei abas de navegação, e defini o espaçamento e cor das mesmas através do css. Importante dizer que, para cada aba criada, foi preciso criar um .css diferente, uma vez que cada aba precisa ter uma formatação diferente.";
    const etapa4Text = "Após pesquisas e sugestões diversas, decidi por criar um site onde fosse possível mostrar na prática o que eu aprendi, deixando alguns de meus códigos através de links para as pessoas poderem acessar e conferir.";
    const etapa5Text = "Com a decisão do que seria feito tomada, chegou a hora de fazer o site funcionar, e com HTML E CSS apenas, isso não seria possível, visto que o HTML é utilizado para estruturar o site, e o CSS é responsável pelo estilo. Para isso temos o JAVASCRIPT, que é responsável pela funcionalidade da página.";
    const etapa6Text = "Ao longo do processo enfrentei algumas dificuldades, entre elas, a data e o relógio que coloquei no rodapé, devido ao programa ter o calendário começando em zero, o que fazia a data sempre estar com 1 número a menos, exemplo, data atual 10/10/23, no site mostrava 10/09/23. Isso foi resolvido após alguns dias, simplesmente adicionando +1, no código javascript.";
    const etapa7Text = "Após corrigido os problemas, listei alguns projetos que fiz usando o html, css e javascript durante o curso.";

    const etapaElement = document.getElementById("etapa1");
    const introducao = document.getElementById("textoP");

    switch (etapaAtual) {
        case 1:
            introducao.textContent = "1ª ETAPA – PESQUISA APROFUNDADA DE HTML E CSS:";
            etapaElement.textContent = etapa1Text;
            break;
        case 2:
            introducao.textContent = "2ª ETAPA – CRIAÇÃO DOS ARQUIVOS .HTML e .CSS:";
            etapaElement.textContent = etapa2Text;
            break;
        case 3:
            introducao.textContent = "3ª ETAPA – COMEÇANDO A DIGITAR O CÓDIGO NO HTML:";
            etapaElement.textContent = etapa3Text;
            break;
        case 4:
            introducao.textContent = "4ª ETAPA – ESCOLHA DO OBJETIVO DO SITE:";
            etapaElement.textContent = etapa4Text;
            break;
        case 5:
            introducao.textContent = "5ª ETAPA – CRIANDO OS ARQUIVOS JAVASCRIPT:";
            etapaElement.textContent = etapa5Text;
            break;
        case 6:
            introducao.textContent = "6ª ETAPA – DIFICULDADES:";
            etapaElement.textContent = etapa6Text;
            break;
        case 7:
            introducao.textContent = "7ª ETAPA – ADICIONANDO PROJETOS:";
            etapaElement.textContent = etapa7Text;
            break;

        default:
            break;
    }

}