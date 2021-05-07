import { useEffect } from "react";
import { api } from "../../services/api";
import { Container } from "./styles";

export function TransactionsTable() {
  useEffect(() => {
    api.get('transactions')
  }, []);

  return(
    <Container>
      <table>
        <thead>
          <tr>
            <th>Título</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Desenvolvimento de App</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Desenvolvimento</td>
            <td>12/04/2021</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td className="withdraw">- R$ 59,00</td>
            <td>Alimentação</td>
            <td>10/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}