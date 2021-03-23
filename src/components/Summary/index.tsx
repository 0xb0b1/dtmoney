import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
import totalImg from "../../assets/total.svg";

import { Container } from "./styles";

function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Income" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Entradas</p>
          <img src={outcomeImg} alt="Outcome" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>Entradas</p>
          <img src={totalImg} alt="Total" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  );
}

export default Summary;
