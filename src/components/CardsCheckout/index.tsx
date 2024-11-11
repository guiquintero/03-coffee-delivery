import { BiTrash } from "react-icons/bi"; 
import SpinButton from "../SpinButton";
import { CardContainer } from "./styles";
import { useCart } from "../../contexts/CartContext";

interface CardsCheckoutProps {
  image: string;
  name: string;
  price: number;
  quantity: number;
  key: number;
}

export function CardsCheckout(item: CardsCheckoutProps) {
  
  const {editFromCart,removeFromCart} = useCart();

  const handleRemoveFromCart = (index: number) => {
    removeFromCart(index);
  }

  const handleAddToCart = (index: number, quatity: number) => {
    
    editFromCart(index, quatity);
  }


  return (
    <CardContainer>
      <img src={item.image} alt="" />
      <div>
        <p id="name">{item.name}</p>
        <SpinButton initialValue={item.quantity} id="quantity" onChange={() => handleAddToCart(item.key, item.quantity)}/>
        <button id="button" onClick={() => handleRemoveFromCart(item.key)}><BiTrash />Remover</button>
      </div>
      <p>{item.price}</p>
    </CardContainer>
  );
}