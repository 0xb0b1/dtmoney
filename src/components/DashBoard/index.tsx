import Summary from "../Summary";
import TransactionsTable from "../TransactionsTable";
import { Container } from "./styles";

function DashBoard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
    </Container>
  );
}

export default DashBoard;
