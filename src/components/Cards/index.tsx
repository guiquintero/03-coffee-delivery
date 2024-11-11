import { useState } from "react";
import SpinButton from "../SpinButton";
import {
  BottomArea,
  Buttons,
  Card,
  Description,
  DisplayCards,
  Real,
  ShoppingCartButton,
  Tag,
  Title,
  Valor,
} from "./styles";
import { PiShoppingCartSimpleFill } from "react-icons/pi";
import { useCart } from "../../contexts/CartContext";

interface Item {
  titulo: string;
  descricao: string;
  imagem: string;
  id: string;
  tag: string[];
  preco: number;
}

interface CardProps {
  itens: Item[];
}


export default function Cards({ itens }: CardProps) {

  const [spinValue, setSpinValue] = useState(0);
  const { addToCart } = useCart();

  const handleSpinChange = (value: number) => {
    setSpinValue(value);
  };

  const handleAddToCart = (item: Item) => {
    const addProduct = {
      name: item.titulo,
      price: item.preco,
      quantity: spinValue,
      image: item.imagem,
    };
    addToCart(addProduct);
  };


  return (
    <DisplayCards>
      {itens.map((item) => {
        return (
          <Card key={item.id}>
            <img src={item.imagem} alt={item.titulo} />
            <div>
              {item.tag.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </div>

            <Title>{item.titulo}</Title>
            <Description>{item.descricao}</Description>
            <BottomArea>
              <div>
                <Real>R$</Real>
                <Valor>{item.preco}</Valor>
              </div>
              <Buttons>
                <SpinButton initialValue={spinValue} onChange={handleSpinChange} />
                <ShoppingCartButton onClick={() => handleAddToCart(item)}>
                  <PiShoppingCartSimpleFill size={22} />
                </ShoppingCartButton>
              </Buttons>
            </BottomArea>
          </Card>
        );
      })}
    </DisplayCards>
  );
}
