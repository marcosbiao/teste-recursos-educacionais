
const heroVariableValue = document.getElementById("heroVariableValue");
const heroTile = document.querySelector(".tile-moving");
let heroAnimationTimers = [];

function clearHeroAnimationTimers() {
  heroAnimationTimers.forEach((timer) => clearTimeout(timer));
  heroAnimationTimers = [];
}

function updateHeroVariableValue(value) {
  if (!heroVariableValue) {
    return;
  }

  heroVariableValue.textContent = value;
  heroVariableValue.classList.remove("header-value-updated");
  void heroVariableValue.offsetWidth;
  heroVariableValue.classList.add("header-value-updated");
}

function syncHeroMemoryAnimation() {
  if (!heroVariableValue || !heroTile) {
    return;
  }

  clearHeroAnimationTimers();
  updateHeroVariableValue("18");

  heroAnimationTimers.push(setTimeout(() => {
    updateHeroVariableValue("19");
  }, 2150));

  heroAnimationTimers.push(setTimeout(() => {
    updateHeroVariableValue("18");
  }, 4050));
}

if (heroTile) {
  syncHeroMemoryAnimation();
  heroTile.addEventListener("animationiteration", syncHeroMemoryAnimation);
}

const commandStates = [
  {
    command: "idade = 18;",
    incoming: "18",
    value: "18",
    explanation: "A variável <code>idade</code> recebe o valor <strong>18</strong>. Esse passa a ser o estado atual dessa variável."
  },
  {
    command: "idade = idade + 1;",
    incoming: "19",
    value: "19",
    explanation: "O lado direito usa o valor anterior de <code>idade</code>, que era 18. Depois do cálculo, a variável passa a armazenar <strong>19</strong>."
  },
  {
    command: "idade = 25;",
    incoming: "25",
    value: "25",
    explanation: "A atribuição substitui o valor armazenado. A variável <code>idade</code> deixa de guardar 19 e passa a guardar <strong>25</strong>."
  }
];

const commandButtons = document.querySelectorAll(".command-btn");
const commandCode = document.getElementById("commandCode");
const incomingValue = document.getElementById("incomingValue");
const variableValue = document.getElementById("variableValue");
const variableBox = document.getElementById("variableBox");
const stateExplanation = document.getElementById("stateExplanation");

commandButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const step = Number(button.dataset.step);
    const state = commandStates[step];

    commandButtons.forEach((item) => item.classList.remove("active"));
    button.classList.add("active");

    commandCode.textContent = state.command;
    incomingValue.textContent = state.incoming;
    variableValue.textContent = state.value;
    stateExplanation.innerHTML = state.explanation;

    variableBox.classList.remove("replay");
    void variableBox.offsetWidth;
    variableBox.classList.add("replay");
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
        ? "Correto. A resposta considera nome, valor armazenado e estado da variável."
        : "Revise: variável guarda valor por nome; atribuição atualiza estado; constante permanece fixa.";
    });
  });
});
