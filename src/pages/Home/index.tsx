import { useState } from "react";
import { Banner } from "../../components/Banner";
import Cards from "../../components/Cards";

import cardapio from "./cardapio.json";
import { DisplayHome } from "./styles";

export function Home() {
  const [itens] = useState(cardapio);

  return (
    <DisplayHome>
      <Banner />
      <div>
        <Cards itens={itens} />
      </div>
    </DisplayHome>
  );
}
