import { FaShoppingCart } from "react-icons/fa"; 
import { FaMapMarkerAlt } from "react-icons/fa"; 
import { Cart, DivLeft, HeaderContainer, Local } from "./styles";
import Logo from "../../assets/Logo.svg"
import { useNavigate } from "react-router-dom";

export function Header() {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <img src={Logo} onClick={() => navigate("/")}/>
      <DivLeft>
        <Local><FaMapMarkerAlt />Curitiba, PR</Local>
        <Cart onClick={() => navigate("/checkout")}><FaShoppingCart /></Cart>
      </DivLeft>
    </HeaderContainer>
  );
}