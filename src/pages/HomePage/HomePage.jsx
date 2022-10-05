import { Home } from "./styles";
import logo from "../../assets/LogoWhite.svg";
import imagem from "../../assets/HomeImage.svg";
import { ImgHome } from "./styles";
import StartInsertButton from "../../components/StartAndInsertButton/StartInsertButton"

function HomePage({ setIsLogged }) {
  
  function login() {
    setIsLogged(true);
  }

  return (
    <Home>
      <div>
        <img className="nukenzie" src={logo} alt="" />

        <h1>Centralize o controle das suas financas</h1>

        <h3> de forma rápida e segura</h3>

        <StartInsertButton action={login} name="Iniciar" width={240} />
      </div>
    
      <ImgHome className="imagem" src={imagem} alt="" />
    </Home>
  );
}

export default HomePage;
