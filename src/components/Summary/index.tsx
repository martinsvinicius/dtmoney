//images
import outcomeImage from '../../assets/outcome.svg';
import incomeImage from '../../assets/income.svg';

//styles
import { Amount, Container, Item } from "./styles";

export function Summary() {
  return (
    <Container>
      <Item>
        <div>
          <p>Entradas</p>
          <img src={incomeImage} alt="Entrada"/>
        </div>

        <Amount>R$ 17.400,00</Amount>
      </Item>
    </Container>
  );
}