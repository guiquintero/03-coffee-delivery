import { BannerContainer, BannerContent, Icon } from "./styles";
import coffee from "../../assets/coffee.png";
import { FaShoppingCart } from "react-icons/fa";
import { PiCoffeeFill, PiPackageFill, PiTimerFill } from "react-icons/pi";

export function Home() {
  return (
    <BannerContainer>
      <BannerContent>
        <h1>Encontre o café perfeito para qualquer hora do dia</h1>
        <p>
          Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
          hora
        </p>
        <div>
          <ul>
            <li>
              <Icon color={"yellow_500"}>
                <FaShoppingCart />
              </Icon>
              Compra simples e segura
            </li>
            <li>
              <Icon color="yellow_300">
                <PiTimerFill />
              </Icon>
              Entrega rápida e rastreada
            </li>
          </ul>
          <ul>
            <li>
              <Icon color="base_text">
                <PiPackageFill />
              </Icon>
              Embalagem mantém o café intacto
            </li>
            <li>
              <Icon color="purple_500">
                <PiCoffeeFill />
              </Icon>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>
      </BannerContent>
      <img src={coffee} alt="" />
    </BannerContainer>
  );
}
