import Summary from "../Summary";
import TransactionsTable from "../TransactionsTable";
import { Container } from "./styles";

function Dashboard() {
    return (
        <Container>
            <Summary />
            <TransactionsTable />
        </Container>
    );
}

export default Dashboard;
