import React from "react";
import { FaPinterest, FaSearch, FaBell, FaCommentDots } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown, IoPerson } from "react-icons/io";

const HeaderLayout = () => {
  return (
    <div className="header">
      <div className="logo">
        <FaPinterest size={25} color="red" cursor="pointer" onMouseEnter />
      </div>

      <div className="btn_inicio" type="input">
        Inicio
      </div>

      <div className="btn_hoy" type="input">
        Hoy
      </div>

      <div className="buscar" type="input">
        <FaSearch size={20} color="black" />
        Buscar
      </div>

      <div className="iconos">
        <FaBell size={25} />
      </div>

      <div className="iconos">
        <FaCommentDots size={25} />
      </div>

      <div className="iconos">
        <CgProfile size={25} />
      </div>

      <div className="iconos">
        <IoIosArrowDown size={20} />
      </div>

      <div className="texto_mobile">Para ti</div>
      <div className="texto_mobile">Hoy</div>
      <div className="texto_mobile">Illustration</div>

      <div className="texto_mobile">Recetas de</div>
    </div>
  );
};

export default HeaderLayout;
