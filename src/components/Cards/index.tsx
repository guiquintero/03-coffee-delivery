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
    <ul>
      {itens.map((item) => {
        return (
          <li key={item.id}>
            <img src={item.imagem} alt={item.titulo} />
            <p>{item.tag}</p>
            <p>{item.titulo}</p>
            <p>{item.descricao}</p>
            <p>{item.preco}</p>
          </li>
        );
      })}
    </ul>
  );
}
