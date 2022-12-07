const valueInput = document.getElementById("expression");
const showValue = document.getElementById("showValue");

var input = "";
valueInput.addEventListener("keyup", function () {
  valueInput.value = valueInput.value;
  input = valueInput.value;
  showValue.innerHTML = input;
});

function recortarTexto(valor) {
  valor = valor.split(" ");
  return valor;
}

function verificaSeEhVariavel(valor) {
  valor = recortarTexto(valor);

  if (valor)
    switch (valor[0]) {
      case "$":
        salvaVariavel(valor);

        break;
      case "b":
        return true;
        break;
      case "c":
        return true;
    }
}

function salvaVariavel(valor) {}

//  \P{..|..} ou \p{..|..}  -> Define um parágrafo
// \L{..|..} ou \l{..|..} -> Define uma lista de itens
// \R{..|..} ou \r{..|..} -> Repete o texto um número de vezes
