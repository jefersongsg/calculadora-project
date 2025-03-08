
import { Container, Buttons, Div } from "./styles"

function App() {
  let currentValue = ""; // Valor atual digitado no input
  let previousValue = ""; // Valor armazenado para cálculos
  let operator = ""; // Operador selecionado

  const handleNumberClick = (value) => {
    const input = document.getElementById("num");
    currentValue += value;
    input.value = currentValue;
  };

  const handleOperatorClick = (op) => {
    const input = document.getElementById("num");
    previousValue = currentValue; // Armazena o valor atual
    operator = op; // Define o operador
    currentValue = ""; // Reseta o valor atual
    //input.value += operator; // Exibe o operador
    input.value = ""; // Limpa o input
  };

  const handleEqualClick = () => {
    const input = document.getElementById("num");
    const prev = parseFloat(previousValue);
    const current = parseFloat(currentValue);
    let result;

    if (!isNaN(prev) && !isNaN(current)) {
      switch (operator) {
        case "+":
          result = prev + current;
          break;
        case "-":
          result = prev - current;
          break;
        case "*":
          result = prev * current;
          break;
        case "/":
          result = current !== 0 ? prev / current : "Erro"; // Evita divisão por zero
          break;
        default:
          result = "Erro";
      }
      input.value = result.toFixed(); // Arredonda para 3 casas decimais
      currentValue = result.toString();
      previousValue = input.value ;
      operator = input.value ;
    }
    currentValue = ""; // Reseta o valor atual
  };

  const handleClearClick = () => {
    const input = document.getElementById("num");
    input.value = "";  // Limpa o input
    currentValue = ""; // Reseta o valor atual
}

  return (
    <Div>
      <Container>
        <input type="number" id="num" placeholder="0" disabled/>
          <Buttons>
            <button onClick={() => handleNumberClick("1") }>1</button>
            <button onClick={() => handleNumberClick("2")} >2</button>
            <button onClick={() => handleNumberClick("3")} >3</button>
            <button onClick={() => handleNumberClick("4")} >4</button>
            <button onClick={() => handleNumberClick("5")} >5</button>
            <button onClick={() => handleNumberClick("6")} >6</button>
            <button onClick={() => handleNumberClick("7")} >7</button>
            <button onClick={() => handleNumberClick("8")} >8</button>
            <button onClick={() => handleNumberClick("9")} >9</button>
            <button onClick={() => handleNumberClick("0")} >0</button>
            <button onClick={() => handleOperatorClick("+")} id="soma">+</button>
            <button onClick={() => handleOperatorClick("-")} id="sub">-</button>
            <button onClick={() => handleOperatorClick("*")} id="mult">*</button>
            <button onClick={() => handleOperatorClick("/")} id="div">/</button>
            <button onClick={handleEqualClick} id="igual">=</button>
            <button onClick={handleClearClick} id="clear">C</button>
          </Buttons>
      </Container>
    </Div>
  )
}
export default App
