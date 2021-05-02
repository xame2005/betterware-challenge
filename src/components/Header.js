import React from "react";

export default function Header(props) {
  return (
    <header className="row block center">
      <div>
        <a href="#">
          <h1>Betterware</h1>
        </a>
      </div>
      <div>
        <a href="#/login">Iniciar Sesión</a>
        <a href="#/cart">Carrito</a>
      </div>
    </header>
  );
}
