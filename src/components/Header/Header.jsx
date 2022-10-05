import Nukenzie from "../../assets/LogoBlack.svg";
import DGBtns from "../DashboardGreyButtons/DashboardGreyButtons"
import { HeaderStyled } from "./styles";

function Header({ setIsLogged }) {

  function logout() {
    setIsLogged(false); 
  }

  return (
    <HeaderStyled>
      <div className="container">
        <img src={Nukenzie} alt="" />

        <DGBtns action={logout} setIsLogged={setIsLogged} name="Inicio" />
      </div>
    </HeaderStyled>
  );
}

export default Header;
