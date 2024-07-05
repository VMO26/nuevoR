import { useState } from "react";
import "./NavBar.css";
import logo from "../assets/logo.png";
import cart_icon from "../assets/cart_icon.png";

function NavBar() {
  /* const [variable, function modificadoraDeVariable] = useState(valorInicialDeLaVariale) String
    La convencion es que la funcion modificadora de variable se le ateponga un set más el nombre de la variable, todo junto y usando camel case  */
  const [menu, setMenu] = useState("tienda");
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="logo" />
        <p>Mi tienda en linea</p>
        {menu}
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu("tienda")}>
          Tienda
          {/* sintaxis de operador ternario: evaluador ? siCumpleCondicion : NoCumpleCondicion */}
          {/*sintexis de operador AND: evaluador && siCumpleLaCondicion */}
          {menu === "tienda" && <hr />}{" "}
        </li>
        <li onClick={() => setMenu("hombre")}>
          Hombre
          {menu === "hombre" && <hr />}
        </li>
        <li onClick={() => setMenu("mujer")}>
          Mujer
          {menu === "mujer" && <hr />}
        </li>
        <li onClick={() => setMenu("niños")}>
          Niños
          {menu === "niños" && <hr />}
        </li>
      </ul>
      <div className="nav-login-cart">
        <button>Login</button>
        <img src={cart_icon} alt="cart_icon" />
      </div>
    </div>
  );
}

export default NavBar;
