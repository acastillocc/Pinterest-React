import React from "react";
import { FaPinterest } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoIosArrowDown } from "react-icons/io";

const HeaderLayout = () => {  

  function hovering (e) {
    e.target.style.background = 'lightgray';
    e.target.style.transition = 'all 0.3s ease';
  }

  function notHovering (e) {
    e.target.style.background = 'transparent';
  }

  return (
    <div style={_styleHeader.leHeader}>
      <FaPinterest size={40} color="red" cursor='pointer' onMouseEnter/>

      <div className='btn_inicio' type="input">     
        Inicio
      </div>

      <div className='btn_hoy' type="input">     
        Hoy
      </div>

      <div style={_buscar.barraBuscar} type="input">
        <IoSearchSharp size={20} color="black"/>
        Buscar
      </div>

      <div className='iconos'>
        <FaBell size={25} color='#767676' /> 
      </div>

      <div className='iconos'>
        <AiFillMessage size={25} color='#767676' />
      </div>

      <div className='iconos'>
        <CgProfile size={25} color='#767676' />
      </div>

      <div className='iconos'>
        <IoIosArrowDown size={25} color='#767676'  />
      </div>

    </div>
  );
};

const _styleHeader = {
  leHeader: {
    display: "flex",
    padding: "15px",
    margin: "20px",
    alignItems: "center",
    backgroundColor: "white",
    boxSizing: "border-box",
    height: "5vh",
  },
};

const _buscar = {
  barraBuscar: {
    display: "flex",
    borderRadius: "40px",
    padding: "8px",
    margin: "10px",
    backgroundColor: "#D2D2D2",
    alignItems: "center",
    height: "3.5vh",
    width: "90%",
    cursor: 'text',
    opacity: "0.4",
  },
};


export default HeaderLayout;
