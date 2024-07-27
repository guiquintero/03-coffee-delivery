import { BiTrash } from "react-icons/bi"; 
import SpinButton from "../SpinButton";
import { CardContainer } from "./styles";

interface CardsCheckoutProps {
  image: string;
  name: string;
  price: string;
  quantity: number;
}

export function CardsCheckout({ image, name, price, quantity }: CardsCheckoutProps) {
  return (
    <CardContainer>
      <img src={image} alt="" />
      <div>
        <p id="name">{name}</p>
        <SpinButton initialValue={quantity} id="quantity"/>
        <button id="button"><BiTrash />Remover</button>
      </div>
      <p>{price}</p>
    </CardContainer>
  );
}