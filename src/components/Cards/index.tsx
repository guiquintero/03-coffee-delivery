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

export default function Cards({ itens }: CardProps) {
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
                <SpinButton />
                <ShoppingCartButton>
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
