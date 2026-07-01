/* Shared educational resource catalog. */
(function () {
  const competenciasCCI = {
      CCI01: "Representar problemas introdutórios por meio de soluções algorítmicas claras",
      CCI02: "Implementar programas introdutórios com fluxo verificável de entrada, processamento e saída",
      CCI03: "Manipular dados simples, variáveis, constantes e expressões preservando a coerência do estado",
      CCI04: "Controlar o fluxo por decisões condicionais e expressões lógicas corretas",
      CCI05: "Controlar processamento iterativo com repetição, atualização de estado e paradas seguras",
      CCI06: "Representar, percorrer e processar coleções indexadas e dados estruturados simples",
      CCI07: "Modularizar soluções por funções ou procedimentos com interfaces coerentes",
      CCI08: "Analisar, justificar e selecionar estruturas ou estratégias adequadas ao problema",
      CCI09: "Organizar cadastros, saídas consolidadas, consultas e relatórios verificáveis",
      CCI10: "Integrar múltiplas estruturas em soluções introdutórias mais complexas",
      CCI11: "Modelar e organizar dados compostos em programas introdutórios",
      CCI12: "Construir subprogramas recursivos com progressão verificável",
      CCI13: "Desenvolver soluções com persistência e consulta em arquivos"
    };

  const infograficosBase = [
      {
        competenciaCodigo: "CCI01",
        competenciaNome: "Representar problemas introdutórios por meio de soluções algorítmicas claras",
        itemTrabalhado: "Entrada, processamento e saída",
        titulo: "Como enxergar um problema de programação",
        descricao: "Aprenda a ler um enunciado como um caminho de informação: o que entra, o que será calculado ou decidido e o que deve sair como resposta.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci01_como_enxergar_um_problema_de_programacao.html"
      },
      {
        competenciaCodigo: "CCI01",
        competenciaNome: "Representar problemas introdutórios por meio de soluções algorítmicas claras",
        itemTrabalhado: "Formas de representação",
        titulo: "Antes do código: escolha uma forma de representar a solução",
        descricao: "Compare linguagem natural, pseudocódigo e fluxograma para organizar um algoritmo antes de transformá-lo em comandos da linguagem C.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci01_formas_de_representacao.html"
      },
      {
        competenciaCodigo: "CCI01",
        competenciaNome: "Representar problemas introdutórios por meio de soluções algorítmicas claras",
        itemTrabalhado: "Decomposição",
        titulo: "Quebrando um problema em partes menores",
        descricao: "Explore diferentes caminhos para transformar um problema grande em partes menores, claras e programáveis antes de escrever o código em C.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci01_quebrando_problema_em_partes_menores.html"
      },
      {
        competenciaCodigo: "CCI02",
        competenciaNome: "Implementar programas introdutórios com fluxo verificável de entrada, processamento e saída",
        itemTrabalhado: "Estrutura básica de um programa em C",
        titulo: "Anatomia de um programa em C",
        descricao: "Reconheça como biblioteca, função main, variáveis, comandos e retorno se organizam para formar um programa executável.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci02_anatomia_programa_c.html"
      },
      {
        competenciaCodigo: "CCI02",
        competenciaNome: "Implementar programas introdutórios com fluxo verificável de entrada, processamento e saída",
        itemTrabalhado: "Teste com valores simples",
        titulo: "Como saber se meu programa funciona?",
        descricao: "Aprenda a testar programas básicos com entradas pequenas, prever a resposta correta e comparar o resultado esperado com o que o código realmente produz.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci02_como_saber_se_programa_funciona.html"
      },
      {
        competenciaCodigo: "CCI02",
        competenciaNome: "Implementar programas introdutórios com fluxo verificável de entrada, processamento e saída",
        itemTrabalhado: "Entrada, processamento e saída",
        titulo: "O fluxo E P S: entrada, processamento e saída",
        descricao: "Visualize como um programa recebe dados, transforma ou decide algo e produz uma resposta compreensível para o usuário.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci02_fluxo_eps.html"
      },
      {
        competenciaCodigo: "CCI02",
        competenciaNome: "Implementar programas introdutórios com fluxo verificável de entrada, processamento e saída",
        itemTrabalhado: "Variável, constante e atribuição",
        titulo: "Variável não é número solto: é memória com nome",
        descricao: "Entenda como um programa guarda valores, identifica cada espaço de memória e modifica seu estado por meio de atribuições.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci02_variavel_memoria_com_nome.html"
      },
      {
        competenciaCodigo: "CCI03",
        competenciaNome: "Manipular dados simples, variáveis, constantes e expressões preservando a coerência do estado",
        itemTrabalhado: "Estado do programa",
        titulo: "O valor da variável muda: acompanhe o estado",
        descricao: "Aprenda a seguir a execução linha por linha e registrar o valor atual de cada variável após atribuições, cálculos e atualizações.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci03_estado_programa.html"
      },
      {
        competenciaCodigo: "CCI03",
        competenciaNome: "Manipular dados simples, variáveis, constantes e expressões preservando a coerência do estado",
        itemTrabalhado: "Expressões e precedência",
        titulo: "A ordem dos cálculos no programa",
        descricao: "Entenda como o C interpreta expressões aritméticas, decide qual operação executar primeiro e como os parênteses tornam a intenção do cálculo mais clara.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci03_ordem_dos_calculos.html"
      },
      {
        competenciaCodigo: "CCI04",
        competenciaNome: "Controlar o fluxo por decisões condicionais e expressões lógicas corretas",
        itemTrabalhado: "Fronteiras e cobertura",
        titulo: "Sua condição cobre todos os casos?",
        descricao: "Aprenda a testar limites, localizar lacunas, evitar sobreposição de faixas e tratar entradas que não pertencem a nenhum caso esperado.",
        tempo: "20–25 min",
        url: "recursos/Infograficos/cci04_cobertura_casos.html"
      },
      {
        competenciaCodigo: "CCI04",
        competenciaNome: "Controlar o fluxo por decisões condicionais e expressões lógicas corretas",
        itemTrabalhado: "Operadores relacionais e lógicos",
        titulo: "Como escrever uma condição correta",
        descricao: "Aprenda a comparar valores, combinar regras e prever quando uma expressão em C será verdadeira ou falsa.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci04_condicao_correta.html"
      },
      {
        competenciaCodigo: "CCI04",
        competenciaNome: "Controlar o fluxo por decisões condicionais e expressões lógicas corretas",
        itemTrabalhado: "if else versus switch case",
        titulo: "Quando usar if e quando usar switch",
        descricao: "Compare duas formas de controlar decisões em C e escolha a estrutura mais clara para cada tipo de regra.",
        tempo: "18–25 min",
        url: "recursos/Infograficos/cci04_if_else_switch_case.html"
      },
      {
        competenciaCodigo: "CCI05",
        competenciaNome: "Controlar processamento iterativo com repetição, atualização de estado e paradas seguras",
        itemTrabalhado: "Condição de parada",
        titulo: "Como evitar laço infinito",
        descricao: "Entenda como inicialização, teste, atualização e parada segura trabalham juntas para garantir que uma repetição termine.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci05_como_evitar_laco_infinito.html"
      },
      {
        competenciaCodigo: "CCI05",
        competenciaNome: "Controlar processamento iterativo com repetição, atualização de estado e paradas seguras",
        itemTrabalhado: "Padrões com laços",
        titulo: "Padrões clássicos com repetição",
        descricao: "Reconheça modelos que aparecem em muitos problemas com laços: somar, contar, calcular média, encontrar o maior e localizar o menor valor.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci05_padroes_classicos_repeticao.html"
      },
      {
        competenciaCodigo: "CCI05",
        competenciaNome: "Controlar processamento iterativo com repetição, atualização de estado e paradas seguras",
        itemTrabalhado: "for, while e do while",
        titulo: "Qual laço usar?",
        descricao: "Compare for, while e do while para escolher a estrutura de repetição que deixa a lógica mais clara e adequada ao problema.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci05_qual_laco_usar.html"
      },
      {
        competenciaCodigo: "CCI05",
        competenciaNome: "Controlar processamento iterativo com repetição, atualização de estado e paradas seguras",
        itemTrabalhado: "Contador, acumulador e controle",
        titulo: "As três variáveis mais importantes da repetição",
        descricao: "Entenda como contador, acumulador e variável de controle registram o que acontece dentro de um laço e ajudam o programa a saber quanto repetiu, o que reuniu e quando deve parar.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci05_tres_variaveis_repeticao.html"
      },
      {
        competenciaCodigo: "CCI06",
        competenciaNome: "Representar, percorrer e processar coleções indexadas e dados estruturados simples",
        itemTrabalhado: "Erros com índice",
        titulo: "Cuidado com o índice fora do limite",
        descricao: "Aprenda a reconhecer posições válidas, corrigir limites de laços e impedir acessos indevidos em vetores e matrizes.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci06_indice_fora_limite.html"
      },
      {
        competenciaCodigo: "CCI06",
        competenciaNome: "Representar, percorrer e processar coleções indexadas e dados estruturados simples",
        itemTrabalhado: "Matriz, linha e coluna",
        titulo: "Matriz: dados organizados em linhas e colunas",
        descricao: "Entenda como representar uma tabela em C, acessar cada célula com dois índices e percorrer todos os elementos usando laços aninhados.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci06_matriz_linhas_colunas.html"
      },
      {
        competenciaCodigo: "CCI06",
        competenciaNome: "Representar, percorrer e processar coleções indexadas e dados estruturados simples",
        itemTrabalhado: "Percorrer vetor com laço",
        titulo: "Como visitar todos os elementos de um vetor",
        descricao: "Entenda como o laço for, o índice e o tamanho do vetor trabalham juntos para acessar cada posição uma única vez.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci06_visitar_elementos_vetor.html"
      },
      {
        competenciaCodigo: "CCI07",
        competenciaNome: "Modularizar soluções por funções ou procedimentos com interfaces coerentes",
        itemTrabalhado: "Escopo e variáveis locais",
        titulo: "Onde a variável existe?",
        descricao: "Entenda como o local da declaração define onde uma variável pode ser usada, por quanto tempo uma variável local comum permanece disponível e por que dados globais devem ser empregados com critério.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci07_escopo_variaveis_locais.html"
      },
      {
        competenciaCodigo: "CCI07",
        competenciaNome: "Modularizar soluções por funções ou procedimentos com interfaces coerentes",
        itemTrabalhado: "Função e procedimento",
        titulo: "Função ou procedimento? Entenda a diferença",
        descricao: "Compare estruturas que devolvem um valor com estruturas void que executam uma ação, e escolha a forma adequada para cada parte do programa.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci07_funcao_ou_procedimento.html"
      },
      {
        competenciaCodigo: "CCI07",
        competenciaNome: "Modularizar soluções por funções ou procedimentos com interfaces coerentes",
        itemTrabalhado: "Parâmetros e argumentos",
        titulo: "Como uma função recebe informações",
        descricao: "Entenda onde aparecem os parâmetros, quais valores são enviados como argumentos e como uma chamada conecta o fluxo principal ao corpo da função.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci07_parametros_argumentos.html"
      },
      {
        competenciaCodigo: "CCI08",
        competenciaNome: "Analisar, justificar e selecionar estruturas ou estratégias adequadas ao problema",
        itemTrabalhado: "Escolha de estruturas",
        titulo: "Qual estrutura resolve melhor este problema?",
        descricao: "Aprenda a reconhecer o tipo de tarefa descrita no enunciado e a escolher entre condição, repetição, vetor, matriz e função.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci08_qual_estrutura_resolve_melhor.html"
      },
      {
        competenciaCodigo: "CCI08",
        competenciaNome: "Analisar, justificar e selecionar estruturas ou estratégias adequadas ao problema",
        itemTrabalhado: "Comparação de estratégias",
        titulo: "Solução simples ou solução complicada?",
        descricao: "Aprenda a comparar estratégias de programação pela correção, clareza, adequação e complexidade, sem confundir simplicidade com código curto.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci08_solucao_simples_ou_complicada.html"
      },
      {
        competenciaCodigo: "CCI09",
        competenciaNome: "Organizar cadastros, saídas consolidadas, consultas e relatórios verificáveis",
        itemTrabalhado: "Cadastro simples",
        titulo: "Como organizar um cadastro em C",
        descricao: "Aprenda a agrupar os dados de cada pessoa, produto ou livro em um registro e a armazenar vários registros de forma organizada.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci09_como_organizar_cadastro_c.html"
      },
      {
        competenciaCodigo: "CCI09",
        competenciaNome: "Organizar cadastros, saídas consolidadas, consultas e relatórios verificáveis",
        itemTrabalhado: "Consulta e filtro",
        titulo: "Como procurar informações em um cadastro",
        descricao: "Aprenda a consultar registros por código, nome ou posição e a filtrar todos os elementos que atendem a um critério.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci09_consulta_filtro.html"
      },
      {
        competenciaCodigo: "CCI10",
        competenciaNome: "Integrar múltiplas estruturas em soluções introdutórias mais complexas",
        itemTrabalhado: "Divisão do programa em partes",
        titulo: "Como planejar um programa maior sem se perder",
        descricao: "Aprenda a transformar um enunciado amplo em blocos funcionais, definir o papel de cada parte e conectar tudo antes de escrever o código completo.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci10_planejar_programa_maior.html"
      },
      {
        competenciaCodigo: "CCI10",
        competenciaNome: "Integrar múltiplas estruturas em soluções introdutórias mais complexas",
        itemTrabalhado: "Teste por partes",
        titulo: "Teste primeiro as partes, depois o todo",
        descricao: "Aprenda a verificar funções, laços, consultas e saídas separadamente para localizar erros antes de integrar o programa completo.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci10_teste_por_partes.html"
      },
      {
        competenciaCodigo: "CCI11",
        competenciaNome: "Modelar e organizar dados compostos em programas introdutórios",
        itemTrabalhado: "Conceito de struct",
        titulo: "Struct: quando várias informações formam uma entidade",
        descricao: "Entenda como a linguagem C agrupa dados relacionados em um único tipo composto e por que isso torna o programa mais organizado.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci11_conceito_struct.html"
      },
      {
        competenciaCodigo: "CCI11",
        competenciaNome: "Modelar e organizar dados compostos em programas introdutórios",
        itemTrabalhado: "Vetor de structs",
        titulo: "Vários registros organizados em uma coleção",
        descricao: "Entenda como um vetor de structs permite armazenar e percorrer vários alunos, produtos ou livros com a mesma organização.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci11_vetor_de_structs.html"
      },
      {
        competenciaCodigo: "CCI12",
        competenciaNome: "Construir subprogramas recursivos com progressão verificável",
        itemTrabalhado: "Caso base e passo recursivo",
        titulo: "Toda recursão precisa de uma saída",
        descricao: "Entenda como o caso base interrompe as chamadas e como o passo recursivo reduz o problema até alcançar essa saída.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci12_caso_base_passo_recursivo.html"
      },
      {
        competenciaCodigo: "CCI12",
        competenciaNome: "Construir subprogramas recursivos com progressão verificável",
        itemTrabalhado: "Pilha de chamadas",
        titulo: "O que acontece quando uma função chama ela mesma",
        descricao: "Visualize como cada chamada recursiva ocupa uma posição na pilha, aguarda sua resposta e retorna na ordem inversa.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci12_pilha_de_chamadas.html"
      },
      {
        competenciaCodigo: "CCI13",
        competenciaNome: "Desenvolver soluções com persistência e consulta em arquivos",
        itemTrabalhado: "Cadastro com arquivo",
        titulo: "Salvando e recuperando registros",
        descricao: "Entenda como transformar registros mantidos na memória em dados persistentes e como recuperar essas informações para listar ou consultar um cadastro.",
        tempo: "18–25 min",
        url: "recursos/Infograficos/cci13_cadastro_com_arquivo.html"
      },
      {
        competenciaCodigo: "CCI13",
        competenciaNome: "Desenvolver soluções com persistência e consulta em arquivos",
        itemTrabalhado: "Abrir, ler, escrever e fechar",
        titulo: "O ciclo básico de um arquivo em C",
        descricao: "Entenda como abrir, verificar, ler ou escrever e fechar um arquivo com segurança, acompanhando o caminho entre o programa e os dados armazenados.",
        tempo: "15–20 min",
        url: "recursos/Infograficos/cci13_ciclo_basico_arquivo_c.html"
      },
      {
        competenciaCodigo: "CCI13",
        competenciaNome: "Desenvolver soluções com persistência e consulta em arquivos",
        itemTrabalhado: "Modos de abertura",
        titulo: "Cuidado: o modo de abertura pode apagar seus dados",
        descricao: "Entenda como r, w e a alteram o comportamento de um arquivo e escolha o modo adequado antes de ler ou gravar informações.",
        tempo: "12–18 min",
        url: "recursos/Infograficos/cci13_modos_de_abertura.html"
      }
    ];

  const roteirosBase = [
      {
        competenciaCodigo: "CCI01",
        titulo: "Do hidrômetro ao consumo mensal",
        descricao: "Orienta a tradução da situação do consumo de água em entradas, processamento, saída e representação algorítmica validável.",
        tema: "Representação algorítmica",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "14–18 min",
        problema: "Descobrir o consumo de água de uma residência.",
        conteudo: "problema entrada saída decomposição representação algoritmo validação hidrômetro consumo",
        url: "./recursos/roteiroresolucao/cci01_hidrometro_consumo_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI01",
        titulo: "Planejando um pedido na reprografia",
        descricao: "Orienta a identificação de dados, regras e resultados para representar um pedido de impressão antes de programar.",
        tema: "Representação algorítmica",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "13–16 min",
        problema: "Prever o custo antes de confirmar a impressão.",
        conteudo: "decomposição problema pedido reprografia entrada regra saída representação algoritmo",
        url: "./recursos/roteiroresolucao/cci01_pedido_reprografia_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI02",
        titulo: "Do ano de nascimento ao tempo vivido",
        descricao: "Orienta a interpretação do enunciado, o planejamento das conversões e a validação de uma estimativa em anos, meses e dias.",
        tema: "Entrada, processamento e saída",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "12 min",
        problema: "Calcular quanto tempo uma pessoa já viveu a partir do ano de nascimento.",
        conteudo: "entrada processamento saída conversão expressões aritméticas validação",
        url: "./recursos/roteiroresolucao/cci02_anos_de_vida.html"
      },
      {
        competenciaCodigo: "CCI02",
        titulo: "Verificando o caminho da entrada até a saída",
        descricao: "Orienta a preparação de um caso de teste, o rastreamento do estado das variáveis e a comparação entre a saída esperada e a obtida.",
        tema: "Teste de mesa",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "12 min",
        problema: "Executar manualmente um programa que calcula o dobro de um número.",
        conteudo: "teste de mesa variáveis atribuição entrada processamento saída rastreamento",
        url: "./recursos/roteiroresolucao/cci02_teste_de_mesa_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI03",
        titulo: "Atualizando o saldo do cartão de transporte",
        descricao: "Orienta o acompanhamento do estado do saldo antes e depois de cada movimentação do cartão de transporte.",
        tema: "Estado e variáveis",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "14–18 min",
        problema: "Acompanhar o saldo durante um dia de deslocamentos.",
        conteudo: "variáveis estado atribuição saldo cartão transporte atualização coerência expressões",
        url: "./recursos/roteiroresolucao/cci03_cartao_transporte_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI03",
        titulo: "Acompanhando o estoque da cantina",
        descricao: "Orienta o registro de vendas, reposições e perdas para manter o estado do estoque coerente até o fechamento.",
        tema: "Estado e variáveis",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "14–18 min",
        problema: "Atualizar o estoque após vendas, reposição e perdas.",
        conteudo: "estoque variáveis estado atribuição atualização expressões cantina coerência",
        url: "./recursos/roteiroresolucao/cci03_estoque_cantina.html"
      },
      {
        competenciaCodigo: "CCI04",
        titulo: "Verificando direito a auxílio estudantil",
        descricao: "Orienta a tradução de critérios verbais em condições compostas e a validação de casos aceitos ou recusados.",
        tema: "Decisões condicionais",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "14–18 min",
        problema: "Analisar uma solicitação de auxílio permanência.",
        conteudo: "condicionais expressões lógicas operadores relacionais critérios auxílio estudantil decisão",
        url: "./recursos/roteiroresolucao/cci04_auxilio_estudantil_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI04",
        titulo: "Calculando a tarifa de estacionamento",
        descricao: "Orienta a organização de faixas de cobrança em uma cadeia condicional sem lacunas ou sobreposições.",
        tema: "Decisões condicionais",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "14–18 min",
        problema: "Calcular a cobrança de um estacionamento de bairro.",
        conteudo: "if else if condição intervalo tarifa estacionamento decisão expressão lógica",
        url: "./recursos/roteiroresolucao/cci04_tarifa_estacionamento_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI05",
        titulo: "Acompanhando o consumo de água da semana",
        descricao: "Orienta uma repetição com sete leituras, preservando total acumulado e média diária ao final do processamento.",
        tema: "Repetição",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "14–18 min",
        problema: "Registrar sete dias, calcular o total e obter a média diária.",
        conteudo: "laço contador repetição acumulador média consumo água semana parada estado",
        url: "./recursos/roteiroresolucao/cci05_consumo_agua_semana_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI05",
        titulo: "Atendendo uma fila até o encerramento",
        descricao: "Orienta o uso de sentinela para processar uma quantidade desconhecida de atendimentos sem contar o valor de parada.",
        tema: "Repetição com sentinela",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "14–18 min",
        problema: "Registrar atendimentos até o operador informar a senha de encerramento.",
        conteudo: "laço sentinela repetição parada contador atendimento fila atualização estado",
        url: "./recursos/roteiroresolucao/cci05_fila_sentinela_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI05",
        titulo: "Repetindo uma ação um número definido de vezes",
        descricao: "Orienta o controle de cinco leituras, a preservação da soma acumulada e o cálculo da média após o encerramento do laço.",
        tema: "Repetição",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "12–16 min",
        problema: "Ler cinco notas, calcular a soma e obter a média.",
        conteudo: "laço com contador repetição soma acumulada média variáveis parada",
        url: "./recursos/roteiroresolucao/cci05_laco_contador_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI06",
        titulo: "Organizando os assentos de um cinema",
        descricao: "Orienta o acesso seguro a uma matriz de assentos, preservando a correspondência entre fileiras, números e posições.",
        tema: "Coleções indexadas",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "16–20 min",
        problema: "Consultar e reservar um assento no Cine Bairro.",
        conteudo: "matriz vetor índices limites assentos cinema percurso validação coleção",
        url: "./recursos/roteiroresolucao/cci06_assentos_cinema_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI06",
        titulo: "Analisando temperaturas da semana",
        descricao: "Orienta o uso de vetor para armazenar sete temperaturas, calcular média e comparar todos os valores registrados.",
        tema: "Coleções indexadas",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "16–20 min",
        problema: "Produzir o boletim semanal de uma estação meteorológica comunitária.",
        conteudo: "vetor índice percurso média maior menor temperatura coleção comparação",
        url: "./recursos/roteiroresolucao/cci06_temperaturas_semana_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI07",
        titulo: "Calculando o valor de uma entrega",
        descricao: "Orienta a separação entre cálculo e apresentação usando função com retorno e procedimento com responsabilidade clara.",
        tema: "Funções e procedimentos",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "14–18 min",
        problema: "Tarifa de entrega calculada por distância e peso.",
        conteudo: "função procedimento parâmetros retorno modularização entrega distância peso interface",
        url: "./recursos/roteiroresolucao/cci07_calculando_entrega_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI07",
        titulo: "Encontrando o maior de três números",
        descricao: "Orienta a leitura no escopo principal, a construção de uma função para localizar o maior valor e o uso de um procedimento para apresentar o resultado.",
        tema: "Funções e procedimentos",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "12–16 min",
        problema: "Encontrar o maior de três números inteiros com responsabilidades separadas.",
        conteudo: "funções procedimentos modularização parâmetros retorno escopo condicionais",
        url: "./recursos/roteiroresolucao/cci07_maior_tres_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI07",
        titulo: "Gerando o salário líquido",
        descricao: "Orienta a decomposição do demonstrativo salarial em módulos com parâmetros, retorno e apresentação separados.",
        tema: "Funções e procedimentos",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "14–18 min",
        problema: "Demonstrativo salarial com responsabilidades separadas.",
        conteudo: "função procedimento salário líquido parâmetros retorno modularização interface",
        url: "./recursos/roteiroresolucao/cci07_salario_liquido_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI08",
        titulo: "Como armazenar as notas da turma?",
        descricao: "Orienta a análise técnica para escolher vetor, percorrê-lo com segurança e justificar a estrutura usada.",
        tema: "Escolha de estratégia",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "14–18 min",
        problema: "Uma turma precisa de armazenamento organizado e consultável.",
        conteudo: "análise estratégia vetor estrutura notas turma justificativa escolha percurso",
        url: "./recursos/roteiroresolucao/cci08_notas_turma_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI08",
        titulo: "Qual laço usar no atendimento?",
        descricao: "Orienta a escolha entre estruturas de repetição a partir da informação disponível e da condição de parada.",
        tema: "Escolha de estratégia",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "14–18 min",
        problema: "Duas rotinas de atendimento exigem formas diferentes de repetir.",
        conteudo: "análise estratégia laço repetição contador sentinela condição parada atendimento",
        url: "./recursos/roteiroresolucao/cci08_qual_laco_atendimento_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI09",
        titulo: "Agenda de atendimentos da clínica-escola",
        descricao: "Orienta a organização de cadastro, busca por horário e listagem verificável dos atendimentos de um dia.",
        tema: "Cadastros e relatórios",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "18–22 min",
        problema: "Uma clínica-escola precisa organizar a agenda de um dia.",
        conteudo: "cadastro consulta relatório busca linear agenda clínica vetores registros saída",
        url: "./recursos/roteiroresolucao/cci09_agenda_clinica_escola_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI09",
        titulo: "Relatório de empréstimos da biblioteca",
        descricao: "Orienta a associação de dados por índice, busca de empréstimos e relatório de atrasos com saída consolidada.",
        tema: "Cadastros e relatórios",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "18–22 min",
        problema: "Uma biblioteca precisa acompanhar seus empréstimos ativos.",
        conteudo: "cadastro consulta relatório empréstimos biblioteca busca atraso listagem verificável",
        url: "./recursos/roteiroresolucao/cci09_emprestimos_biblioteca_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI10",
        titulo: "Inscrições para uma corrida comunitária",
        descricao: "Orienta a integração de coleções, decisões, funções e relatórios para classificar participantes e consolidar inscrições.",
        tema: "Soluções integradoras",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "20–25 min",
        problema: "Uma corrida comunitária precisa cadastrar e classificar os participantes.",
        conteudo: "integração vetores funções condicionais relatório cadastro corrida participantes classificação",
        url: "./recursos/roteiroresolucao/cci10_corrida_comunitaria_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI10",
        titulo: "Gerenciando doações de uma campanha",
        descricao: "Orienta a combinação de busca, decisões, funções e resumo consolidado para controlar o estoque de doações.",
        tema: "Soluções integradoras",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "20–25 min",
        problema: "Uma campanha precisa controlar o estoque das doações recebidas.",
        conteudo: "integração vetores busca funções estoque doações relatório decisão categorias",
        url: "./recursos/roteiroresolucao/cci10_doacoes_campanha_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI11",
        titulo: "Cadastro de livros da biblioteca",
        descricao: "Orienta a modelagem de um livro como registro, o acesso a campos e a alteração coerente da situação do empréstimo.",
        tema: "Dados compostos",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "18–22 min",
        problema: "Uma biblioteca precisa manter os dados de cada livro reunidos e coerentes.",
        conteudo: "struct registro campos livro biblioteca dados compostos empréstimo função",
        url: "./recursos/roteiroresolucao/cci11_cadastro_livros_biblioteca_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI11",
        titulo: "Controle de produtos da cantina",
        descricao: "Orienta a distinção entre registro, campo e vetor de registros para organizar produtos com atributos diferentes.",
        tema: "Dados compostos",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "18–22 min",
        problema: "A cantina precisa controlar produtos com características diferentes.",
        conteudo: "struct registro vetor de registros campos produto cantina dados compostos",
        url: "./recursos/roteiroresolucao/cci11_produtos_cantina_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI12",
        titulo: "Contagem regressiva para o encerramento das inscrições",
        descricao: "Orienta a definição de caso base, redução do argumento e rastreamento da pilha em uma contagem regressiva recursiva.",
        tema: "Recursão",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "18–22 min",
        problema: "O painel precisa anunciar o fim das inscrições.",
        conteudo: "recursão caso base chamada recursiva redução pilha contagem regressiva progresso",
        url: "./recursos/roteiroresolucao/cci12_contagem_regressiva_inscricoes_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI12",
        titulo: "Montando uma pirâmide de arrecadação",
        descricao: "Orienta a construção de uma relação recursiva com caso base, retorno e chamada sobre problema menor.",
        tema: "Recursão",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "18–22 min",
        problema: "Uma campanha organiza as latas arrecadadas em níveis.",
        conteudo: "recursão caso base retorno problema menor pilha pirâmide arrecadação progressão",
        url: "./recursos/roteiroresolucao/cci12_piramide_arrecadacao_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI13",
        titulo: "Cadastro persistente de estudantes",
        descricao: "Orienta a gravação, reabertura, consulta e fechamento de arquivo para manter um cadastro disponível entre execuções.",
        tema: "Arquivos e persistência",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "22–28 min",
        problema: "O cadastro precisa continuar disponível após o programa ser fechado.",
        conteudo: "arquivo persistência fopen fprintf fscanf fclose cadastro estudantes consulta gravação",
        url: "./recursos/roteiroresolucao/cci13_cadastro_persistente_estudantes_missoes_visual.html"
      },
      {
        competenciaCodigo: "CCI13",
        titulo: "Diário de despesas pessoais",
        descricao: "Orienta abertura segura, acréscimo de registros e leitura consolidada de despesas armazenadas em arquivo.",
        tema: "Arquivos e persistência",
        formato: "Roteiro por missões",
        linguagem: "C",
        etapas: 3,
        tempo: "22–28 min",
        problema: "O histórico não pode desaparecer ao registrar uma nova despesa.",
        conteudo: "arquivo persistência fopen append leitura escrita fclose despesas relatório consulta",
        url: "./recursos/roteiroresolucao/cci13_diario_despesas_pessoais_missoes_visual.html"
      }
    ];

  const cardsErrosBase = [
      {
        competenciaCodigo: "CCI01",
        titulo: "Passos algorítmicos vagos",
        tipoErro: "Erro de formulação",
        gravidade: "Média",
        sintoma: "Ações genéricas e não executáveis",
        descricao: "Mostra por que ações vagas expressam intenção, mas não descrevem passos executáveis para implementar a solução.",
        conteudoAbordado: "Formulação de passos algorítmicos e precisão operacional",
        impacto: "A solução não pode ser implementada",
        tempo: "10–12 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI01_passos_algoritmicos_vagos.html"
      },
      {
        competenciaCodigo: "CCI01",
        titulo: "Solução começa sem entender o problema",
        tipoErro: "Erro de interpretação",
        gravidade: "Alta",
        sintoma: "Resolve apenas parte do pedido",
        descricao: "Investiga como um algoritmo pode parecer coerente e ainda assim responder a um problema diferente daquele que foi proposto.",
        conteudoAbordado: "Leitura do enunciado, entrada, processamento e saída",
        impacto: "Dados essenciais são ignorados",
        tempo: "12–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI01_solucao_sem_entender_problema.html"
      },
      {
        competenciaCodigo: "CCI02",
        titulo: "Processamento incompleto",
        tipoErro: "Erro de lógica",
        gravidade: "Alta",
        sintoma: "A saída aparece, mas o cálculo está incorreto",
        descricao: "Investiga programas que leem os dados e produzem uma saída, mas não realizam todas as operações necessárias.",
        conteudoAbordado: "Entrada, processamento, saída e expressões",
        impacto: "Entradas lidas não participam do resultado.",
        tempo: "10–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI02_processamento_incompleto.html"
      },
      {
        competenciaCodigo: "CCI03",
        titulo: "Tipo de dado inadequado",
        tipoErro: "Erro de representação",
        gravidade: "Alta",
        sintoma: "Casas decimais desaparecem do resultado",
        descricao: "Mostra como o programa pode executar normalmente e ainda perder informação por causa do tipo escolhido.",
        conteudoAbordado: "Tipos de dados, variáveis, expressões e conversão",
        impacto: "O estado armazenado deixa de representar o cálculo real.",
        tempo: "10–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI03_tipo_de_dado_inadequado.html"
      },
      {
        competenciaCodigo: "CCI03",
        titulo: "Variável não inicializada",
        tipoErro: "Erro de estado",
        gravidade: "Alta",
        sintoma: "Resultado imprevisível ou incorreto",
        descricao: "Investiga cálculos que se tornam imprevisíveis quando uma variável é usada antes de receber valor inicial coerente.",
        conteudoAbordado: "Variáveis, inicialização, expressões e estado",
        impacto: "Um estado indefinido contamina os cálculos seguintes",
        tempo: "10–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI03_variavel_nao_inicializada.html"
      },
      {
        competenciaCodigo: "CCI04",
        titulo: "Condição invertida",
        tipoErro: "Erro de condição",
        gravidade: "Alta",
        sintoma: "O bloco errado executa em determinados casos",
        descricao: "Mostra como uma expressão lógica invertida altera a decisão executada pelo programa.",
        conteudoAbordado: "Condições, operadores relacionais e expressões lógicas",
        impacto: "A decisão produz uma classificação oposta",
        tempo: "10–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI04_condicao_invertida.html"
      },
      {
        competenciaCodigo: "CCI04",
        titulo: "Ordem inadequada em if encadeado",
        tipoErro: "Erro de decisão",
        gravidade: "Média",
        sintoma: "Algumas condições nunca são alcançadas",
        descricao: "Analisa encadeamentos condicionais em que a ordem das verificações torna casos específicos inalcançáveis.",
        conteudoAbordado: "If encadeado, ordem das condições e cobertura de casos",
        impacto: "Casos específicos recebem uma classificação genérica",
        tempo: "12–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI04_ordem_inadequada_if_encadeado.html"
      },
      {
        competenciaCodigo: "CCI05",
        titulo: "Acumulador atualizado fora do laço",
        tipoErro: "Erro de atualização de estado",
        gravidade: "Alta",
        sintoma: "O total final considera apenas parte dos valores",
        descricao: "Mostra como a posição da atualização do acumulador muda o estado calculado ao longo das repetições.",
        conteudoAbordado: "Laços, acumuladores e atualização de estado",
        impacto: "O estado acumulado não evolui a cada repetição",
        tempo: "12–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI05_acumulador_fora_laco.html"
      },
      {
        competenciaCodigo: "CCI05",
        titulo: "Condição de parada incorreta",
        tipoErro: "Erro de limite",
        gravidade: "Alta",
        sintoma: "O laço executa vezes a mais ou a menos",
        descricao: "Investiga condições de parada que deixam de contemplar exatamente o intervalo necessário de repetição.",
        conteudoAbordado: "Condição de parada, limites e testes de fronteira",
        impacto: "O primeiro ou o último caso pode ser ignorado ou repetido",
        tempo: "12–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI05_condicao_parada_incorreta.html"
      },
      {
        competenciaCodigo: "CCI05",
        titulo: "Laço infinito por falta de atualização",
        tipoErro: "Erro de repetição",
        gravidade: "Alta",
        sintoma: "O programa não para de executar",
        descricao: "Evidencia laços sem progresso verificável porque a variável de controle não é atualizada corretamente.",
        conteudoAbordado: "Repetição, variável de controle e progresso do laço",
        impacto: "A mesma repetição ocorre indefinidamente",
        tempo: "10–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI05_laco_infinito_falta_atualizacao.html"
      },
      {
        competenciaCodigo: "CCI06",
        titulo: "Confusão entre índice e valor",
        tipoErro: "Erro de indexação",
        gravidade: "Alta",
        sintoma: "A posição é usada como se fosse o conteúdo",
        descricao: "Mostra como comparar ou processar o índice no lugar do valor armazenado altera o resultado.",
        conteudoAbordado: "Vetores, índices, valores e comparação de elementos",
        impacto: "Comparações e cálculos usam o dado errado",
        tempo: "12–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI06_confusao_indice_valor.html"
      },
      {
        competenciaCodigo: "CCI06",
        titulo: "Índice fora dos limites",
        tipoErro: "Erro de acesso",
        gravidade: "Alta",
        sintoma: "Acesso inválido ou comportamento inesperado",
        descricao: "Investiga acessos que ultrapassam as posições válidas de uma coleção indexada.",
        conteudoAbordado: "Limites de vetor, índices válidos e segurança de acesso",
        impacto: "Leitura de lixo, falha ou corrupção de memória",
        tempo: "10–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI06_indice_fora_limites.html"
      },
      {
        competenciaCodigo: "CCI06",
        titulo: "Processamento parcial da coleção",
        tipoErro: "Erro de percurso",
        gravidade: "Alta",
        sintoma: "Apenas parte dos dados é considerada",
        descricao: "Analisa percursos que ignoram elementos da coleção e produzem resultados incompletos.",
        conteudoAbordado: "Percurso de vetor, limites e processamento de todos os elementos",
        impacto: "Totais, médias e buscas ficam incompletos",
        tempo: "12–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI06_processamento_parcial_colecao.html"
      },
      {
        competenciaCodigo: "CCI07",
        titulo: "Função sem responsabilidade clara",
        tipoErro: "Erro de modularização",
        gravidade: "Média",
        sintoma: "Uma função faz tarefas demais",
        descricao: "Mostra como misturar responsabilidades em uma função reduz clareza, teste e reutilização.",
        conteudoAbordado: "Funções, responsabilidades e separação de tarefas",
        impacto: "Baixa clareza e pouca reutilização",
        tempo: "12–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI07_funcao_sem_responsabilidade_clara.html"
      },
      {
        competenciaCodigo: "CCI07",
        titulo: "Parâmetros insuficientes ou desnecessários",
        tipoErro: "Erro de interface",
        gravidade: "Alta",
        sintoma: "Dependência externa ou dados ignorados",
        descricao: "Investiga funções cuja interface não comunica de forma coerente os dados necessários para executar a tarefa.",
        conteudoAbordado: "Parâmetros, dependências e interface de funções",
        impacto: "Função difícil de testar e reutilizar",
        tempo: "12–18 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI07_parametros_insuficientes_desnecessarios.html"
      },
      {
        competenciaCodigo: "CCI07",
        titulo: "Retorno ausente ou inadequado",
        tipoErro: "Erro de retorno",
        gravidade: "Alta",
        sintoma: "A função produz, mas não entrega",
        descricao: "Analisa funções que calculam um resultado, mas não o disponibilizam corretamente ao chamador.",
        conteudoAbordado: "Retorno de função, chamada e comunicação de resultado",
        impacto: "O chamador não recebe o resultado",
        tempo: "10–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI07_retorno_ausente_inadequado.html"
      },
      {
        competenciaCodigo: "CCI08",
        titulo: "Estrutura escolhida sem relação com o problema",
        tipoErro: "Erro de escolha de estratégia",
        gravidade: "Média",
        sintoma: "Mais estruturas do que o necessário",
        descricao: "Mostra como escolher estruturas sem relação com o problema aumenta complexidade sem melhorar a solução.",
        conteudoAbordado: "Escolha de estratégia, adequação e simplicidade",
        impacto: "Solução mais complexa e menos clara",
        tempo: "12–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI08_estrutura_sem_relacao_problema.html"
      },
      {
        competenciaCodigo: "CCI08",
        titulo: "Justificativa baseada apenas em preferência",
        tipoErro: "Erro de justificativa",
        gravidade: "Média",
        sintoma: "Escolha explicada por gosto pessoal",
        descricao: "Investiga justificativas que não apresentam critérios técnicos para defender a estratégia escolhida.",
        conteudoAbordado: "Critérios de escolha, análise e justificativa técnica",
        impacto: "Decisão difícil de avaliar ou defender",
        tempo: "10–12 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI08_justificativa_baseada_preferencia.html"
      },
      {
        competenciaCodigo: "CCI09",
        titulo: "Cadastro sem validação mínima",
        tipoErro: "Erro de validação",
        gravidade: "Alta",
        sintoma: "Dados incoerentes são aceitos",
        descricao: "Mostra como a ausência de validação compromete cadastros, consultas e relatórios posteriores.",
        conteudoAbordado: "Cadastro, validação de dados e confiabilidade",
        impacto: "Consultas e relatórios perdem confiabilidade",
        tempo: "12–18 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI09_cadastro_sem_validacao_minima.html"
      },
      {
        competenciaCodigo: "CCI09",
        titulo: "Consulta não percorre todos os registros",
        tipoErro: "Erro de consulta",
        gravidade: "Alta",
        sintoma: "Registro cadastrado não é encontrado",
        descricao: "Analisa consultas que deixam de percorrer todos os registros e retornam ausências falsas.",
        conteudoAbordado: "Busca, percurso de registros e consultas verificáveis",
        impacto: "A consulta produz uma ausência falsa",
        tempo: "12–18 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI09_consulta_nao_percorre_todos_registros.html"
      },
      {
        competenciaCodigo: "CCI10",
        titulo: "Correção local sem testar o conjunto",
        tipoErro: "Erro de integração",
        gravidade: "Alta",
        sintoma: "Uma parte melhora, mas outra passa a falhar",
        descricao: "Mostra como corrigir um trecho isolado sem retestar o conjunto pode quebrar o fluxo completo.",
        conteudoAbordado: "Integração, testes de conjunto e validação do fluxo",
        impacto: "O fluxo completo deixa de ser coerente",
        tempo: "15–20 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI10_correcao_local_sem_testar_conjunto.html"
      },
      {
        competenciaCodigo: "CCI10",
        titulo: "Integração sem ordem lógica",
        tipoErro: "Erro de integração",
        gravidade: "Alta",
        sintoma: "As partes funcionam, mas o conjunto falha",
        descricao: "Investiga soluções em que estruturas corretas isoladamente são combinadas em ordem inadequada.",
        conteudoAbordado: "Sequência lógica, integração de estruturas e dependência de dados",
        impacto: "Dados são processados antes de existirem",
        tempo: "15–20 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI10_integracao_sem_ordem_logica.html"
      },
      {
        competenciaCodigo: "CCI11",
        titulo: "Acesso incorreto a campos",
        tipoErro: "Erro de modelagem de dados",
        gravidade: "Alta",
        sintoma: "O campo errado aparece na saída",
        descricao: "Mostra como acessar o campo errado em um dado composto altera o significado da informação exibida.",
        conteudoAbordado: "Structs, campos e organização de dados compostos",
        impacto: "O significado do dado é alterado",
        tempo: "12–15 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI11_acesso_incorreto_campos.html"
      },
      {
        competenciaCodigo: "CCI11",
        titulo: "Confusão entre registro e coleção de registros",
        tipoErro: "Erro de estrutura de dados",
        gravidade: "Alta",
        sintoma: "Somente o último cadastro permanece",
        descricao: "Investiga confusões entre um único registro e uma coleção de registros ao armazenar cadastros.",
        conteudoAbordado: "Registros, vetores de registros e organização de cadastros",
        impacto: "Registros anteriores são sobrescritos",
        tempo: "12–18 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI11_confusao_registro_colecao.html"
      },
      {
        competenciaCodigo: "CCI12",
        titulo: "Caso base ausente",
        tipoErro: "Erro de recursão",
        gravidade: "Alta",
        sintoma: "As chamadas não terminam",
        descricao: "Mostra como a ausência de caso base impede a parada de chamadas recursivas.",
        conteudoAbordado: "Recursão, caso base e condição de parada",
        impacto: "A pilha de execução cresce continuamente",
        tempo: "12–18 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI12_caso_base_ausente.html"
      },
      {
        competenciaCodigo: "CCI12",
        titulo: "Chamada recursiva sem redução do problema",
        tipoErro: "Erro de progressão recursiva",
        gravidade: "Alta",
        sintoma: "O caso base existe, mas nunca é alcançado",
        descricao: "Analisa chamadas recursivas que repetem o mesmo estado e não aproximam a execução do caso base.",
        conteudoAbordado: "Recursão, redução do problema e progresso verificável",
        impacto: "As chamadas repetem o mesmo estado",
        tempo: "12–18 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI12_chamada_sem_reducao_problema.html"
      },
      {
        competenciaCodigo: "CCI13",
        titulo: "Arquivo não aberto ou não verificado",
        tipoErro: "Erro de persistência",
        gravidade: "Alta",
        sintoma: "A leitura ou gravação falha inesperadamente",
        descricao: "Investiga operações em arquivos feitas sem verificar se o recurso foi aberto corretamente.",
        conteudoAbordado: "Abertura de arquivo, verificação e tratamento de falhas",
        impacto: "O programa usa um recurso que pode não existir",
        tempo: "15–20 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI13_arquivo_nao_aberto_verificado.html"
      },
      {
        competenciaCodigo: "CCI13",
        titulo: "Modo de abertura inadequado",
        tipoErro: "Erro de arquivo",
        gravidade: "Alta",
        sintoma: "Dados são apagados, ignorados ou não podem ser lidos",
        descricao: "Mostra como escolher o modo de abertura errado altera leitura, gravação ou preservação de dados.",
        conteudoAbordado: "Modos de abertura, leitura, gravação e persistência",
        impacto: "A operação realizada não corresponde à intenção",
        tempo: "12–18 min",
        linguagem: "C",
        versao: "card atual",
        url: "recursos/carderro/CCI13_modo_abertura_inadequado.html"
      }
    ];

  function normalizeCompetenceCodes(value) {
    const values = Array.isArray(value) ? value : [value];
    const codes = [];

    values.forEach((entry) => {
      if (Array.isArray(entry)) {
        normalizeCompetenceCodes(entry).forEach((code) => codes.push(code));
        return;
      }

      const text = String(entry ?? "");
      const matches = text.matchAll(/CCI\s*(0[1-9]|1[0-3]|[1-9])\b/gi);
      for (const match of matches) {
        codes.push(`CCI${String(Number(match[1])).padStart(2, "0")}`);
      }
    });

    return [...new Set(codes)].filter((code) => competenciasCCI[code]);
  }

  function getResourceCompetences(resource) {
    return normalizeCompetenceCodes([
      resource.competenciaCodigo,
      resource.competencias,
      resource.competenciasSecundarias,
      resource.competenciasAdicionais,
      resource.competencia
    ]);
  }

  function enrichResource(resource, type, typeLabel) {
    const primaryCode = normalizeCompetenceCodes(resource.competenciaCodigo)[0] || resource.competenciaCodigo;
    const competences = getResourceCompetences({ ...resource, competenciaCodigo: primaryCode });

    return {
      ...resource,
      tipo: type,
      tipoRecurso: typeLabel,
      competenciaCodigo: primaryCode,
      competenciaNome: resource.competenciaNome || competenciasCCI[primaryCode] || "",
      competencias: competences.length ? competences : normalizeCompetenceCodes(primaryCode)
    };
  }

  const infograficos = infograficosBase.map((resource) => enrichResource(resource, "infografico", "Infográfico"));
  const roteiros = roteirosBase.map((resource) => enrichResource(resource, "roteiro", "Roteiro de resolução"));
  const cardsErros = cardsErrosBase.map((resource) => enrichResource(resource, "card-erro", "Card de erro"));

  function getResourcesByCompetence(value) {
    const code = normalizeCompetenceCodes(value)[0];

    if (!code) {
      return { infograficos: [], roteiros: [], cardsErros: [] };
    }

    const hasCompetence = (resource) => resource.competencias.includes(code);

    return {
      infograficos: infograficos.filter(hasCompetence),
      roteiros: roteiros.filter(hasCompetence),
      cardsErros: cardsErros.filter(hasCompetence)
    };
  }

  window.ResourceCatalog = {
    competenciasCCI,
    competenciasLista: Object.entries(competenciasCCI).map(([codigo, descricao]) => ({ codigo, descricao })),
    resources: { infograficos, roteiros, cardsErros },
    normalizeCompetenceCodes,
    getResourcesByCompetence
  };
})();
