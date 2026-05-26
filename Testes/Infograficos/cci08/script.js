const builderMessages = {
  weak: {
    className: "weak",
    message: "Justificativa fraca. Ela cita uma preferência genérica, mas não mostra relação clara com o enunciado nem com a condição usada no código."
  },
  partial: {
    className: "partial",
    message: "Justificativa parcial. Ela já percebe que há comparação, mas ainda pode melhorar citando o critério específico de maioridade: idade maior ou igual a 18."
  },
  strong: {
    className: "strong",
    message: "Justificativa técnica adequada. Ela conecta o pedido do enunciado, a decisão no código e a condição que representa o critério de maioridade."
  }
};

const choiceButtons = document.querySelectorAll(".choice-btn");
const builderResult = document.getElementById("builderResult");

choiceButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const choice = button.dataset.choice;
    const data = builderMessages[choice];

    choiceButtons.forEach((item) => {
      item.classList.remove("selected-weak", "selected-partial", "selected-strong");
    });

    button.classList.add(`selected-${choice}`);

    builderResult.className = "builder-result";
    builderResult.classList.add(data.className);
    builderResult.textContent = data.message;
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
        ? "Correto. A resposta apresenta relação técnica entre problema e solução."
        : "Revise: uma justificativa técnica precisa mostrar evidência no enunciado e no código.";
    });
  });
});
