import { FiDollarSign } from "react-icons/fi";
import { MdTimer } from "react-icons/md";
import {
  ContainerLeft,
  ContainerRight,
  DisplaySuccess,
  Icon,
  List,
} from "./styles";
import delivery from "../../assets/Illustration.png";
import { IoLocationSharp } from "react-icons/io5";

export function Success() {
  return (
    <DisplaySuccess>
      <ContainerLeft>
        <h2>Uhu! Pedido confirmado</h2>
        <p>Agora é só aguardar que logo o café chegará até você</p>
        <div>
          <List>
            <li>
              <Icon color={"purple_300"}>
                <IoLocationSharp />
              </Icon>
              <p>
                Entrega em Rua João Daniel Martinelli, 102
                <br />
                Farrapos - Porto Alegre, RS
              </p>
            </li>
            <li>
              <Icon color={"yellow_300"}>
                <MdTimer />
              </Icon>
              <p>
                Previsão de entrega <br />
                20 min - 30 min{" "}
              </p>
            </li>
            <li>
              <Icon color={"yellow_500"}>
                <FiDollarSign />
              </Icon>
              <p>
                Pagamento na entrega <br />
                Cartão de Crédito
              </p>
            </li>
          </List>
        </div>
      </ContainerLeft>
      <ContainerRight>
        <img src={delivery} alt="" />
      </ContainerRight>
    </DisplaySuccess>
  );
}
