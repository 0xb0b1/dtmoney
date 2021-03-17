import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

function TransactionsTable() {
    useEffect(() => {
        api.get("transactions").then((response) => console.log(response.data));
    }, []);

    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Titulo</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Website</td>
                        <td className="deposit">R$ 12.000</td>
                        <td>Desenvolvimento</td>
                        <td>01/03/2021</td>
                    </tr>
                    <tr>
                        <td>Aluguel</td>
                        <td className="withdraw">R$ 1200</td>
                        <td>casa</td>
                        <td>01/03/2021</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    );
}

export default TransactionsTable;
