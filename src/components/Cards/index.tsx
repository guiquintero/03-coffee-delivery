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

interface Item {
  titulo: string;
  descricao: string;
  imagem: string;
  id: string;
  tag: string[];
  preco: string;
}

interface CardProps {
  itens: Item[];
}

interface CartItem {
  products: {
    name: string;
    price: number;
    quantity: number;
  };
}

export default function Cards({ itens }: CardProps) {

  const [spinValue, setSpinValue] = useState(1);

  const handleSpinChange = (value: number) => {
    setSpinValue(value);
  };

  const [cart, setCart] = useState<CartItem[]>([]);

  function handleAddToCart(item: Item, quantity: number) {
    const addProduct:CartItem = {
      products: {
          name: item.titulo,
          price: parseFloat(item.preco),
          quantity: quantity,
        }
    }
    setCart([...cart, addProduct]);
    console.log(cart);
  }


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
                <SpinButton initialValue={spinValue} onChange={handleSpinChange}/>
                <ShoppingCartButton onClick={() => handleAddToCart(item, spinValue)}>
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
