import React from "react";
import {Link} from "react-router-dom";

export default function MenuPrincipal() {
  return (
  <div className="container bg-green-500 p-4 my-4 rounded-xl flex-grow">
    <h1 className="text-center font-semibold text-4xl text-white mb-8">Controle de Estoque</h1>

    <div className="grid lg:grid-cols-2  place-items-center md:grid-cols-1 sm:grid-cols-1">
      <div>
        <Link to="/" className=" text-white px-16 py-2 rounded-md text-xl font-medium hover:bg-green-700  hover:text-white ">
          Materiais
        </Link>
      </div>
      <div>
        <Link to="/projetos" className=" text-white px-16 py-2 rounded-md text-sm font-medium hover:bg-green-700 hover:text-white text-xl">
          Cadastro
        </Link>
      </div>
    </div>
  </div>
  )
}

