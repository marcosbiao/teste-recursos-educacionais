const scenarios = {
  media: {
    title: "Calcular a média de duas notas.",
    text: "Leia duas notas, calcule a média e mostre o resultado.",
    input: "nota1 e nota2",
    process: "(nota1 + nota2) / 2",
    output: "média calculada"
  },
  troco: {
    title: "Calcular o troco de uma compra.",
    text: "Leia o valor pago e o valor da compra, calcule o troco e mostre o resultado.",
    input: "valor pago e valor da compra",
    process: "valorPago - valorCompra",
    output: "troco calculado"
  },
  maior: {
    title: "Encontrar o maior de dois números.",
    text: "Leia dois números, compare os valores e mostre qual é o maior.",
    input: "numero1 e numero2",
    process: "comparar numero1 com numero2",
    output: "maior valor"
  }
};

const scenarioButtons = document.querySelectorAll(".scenario-btn");
const scenarioTitle = document.getElementById("scenarioTitle");
const scenarioText = document.getElementById("scenarioText");
const inputStep = document.getElementById("inputStep");
const processStep = document.getElementById("processStep");
const outputStep = document.getElementById("outputStep");
const trackCards = document.querySelectorAll(".track-card");

scenarioButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const scenario = button.dataset.scenario;
    const data = scenarios[scenario];

    scenarioButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    scenarioTitle.textContent = data.title;
    scenarioText.textContent = data.text;
    inputStep.textContent = data.input;
    processStep.textContent = data.process;
    outputStep.textContent = data.output;

    trackCards.forEach((card, index) => {
      card.classList.remove("replay");
      void card.offsetWidth;
      card.style.animationDelay = `${index * 0.08}s`;
      card.classList.add("replay");
    });
  });
});

document.querySelectorAll(".quiz-card").forEach((card) => {
  const buttons = card.querySelectorAll("button");
  const feedback = card.querySelector(".quiz-feedback");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((item) => {
        item.classList.remove("is-correct", "is-wrong");
      });

      const isCorrect = button.dataset.answer === "correct";
      button.classList.add(isCorrect ? "is-correct" : "is-wrong");

      feedback.classList.add("show");
      feedback.classList.toggle("correct", isCorrect);
      feedback.classList.toggle("wrong", !isCorrect);

      feedback.textContent = isCorrect
        ? "Correto. A resposta identifica uma etapa essencial da decomposição."
        : "Revise: decompor não substitui o teste, mas organiza o raciocínio antes do código.";
    });
  });
});
