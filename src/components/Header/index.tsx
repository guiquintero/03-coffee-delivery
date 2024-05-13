import { FaShoppingCart } from "react-icons/fa"; 
import { FaMapMarkerAlt } from "react-icons/fa"; 
import { Cart, DivLeft, HeaderContainer, Local } from "./styles";
import Logo from "../../assets/Logo.png"

export function Header() {
  return (
    <HeaderContainer>
      <img src={Logo}/>
      <DivLeft>
        <Local><FaMapMarkerAlt />Curitiba, PR</Local>
        <Cart><FaShoppingCart /></Cart>
      </DivLeft>
    </HeaderContainer>
  );
}