import React from "react";
import { FaPinterest } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { BsFillBellFill } from "react-icons/bs";
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
      <FaPinterest size={50} color="red" cursor='pointer' />

      <div style={_buscar.barraBuscar} type="input">
        <IoSearchSharp size={20} color="black"/>
        Buscar
      </div>

      <div style={_icons.iconos} onMouseEnter={hovering} onMouseLeave={notHovering}>
        <BsFillBellFill size={25} /> 
      </div>

      <div style={_icons.iconos} onMouseEnter={hovering} onMouseLeave={notHovering}>
        <AiFillMessage size={25} />
      </div>

      <div style={_icons.iconos} onMouseEnter={hovering} onMouseLeave={notHovering}>
        <CgProfile size={25} />
      </div>

      <div style={_icons.iconos} onMouseEnter={hovering} onMouseLeave={notHovering}>
        <IoIosArrowDown size={25}  />
      </div>

    </div>
  );
};

const _styleHeader = {
  leHeader: {
    display: "flex",
    padding: "15px",
    margin: "15px",
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
    margin: "20px",
    backgroundColor: "#D2D2D2",
    alignItems: "center",
    height: "3.5vh",
    width: "90%",
    opacity: "0.4",
  },
};

const _icons = {
  iconos: {
    display: "flex",
    cursor: 'pointer',
    padding: "7px",
    // backgroundColor: "lightgrey",
    opacity: "0.6",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "50px",
    height: "3.5vh",
    width: "2vw",
    color: "#808080",
  },

  iconosHover: {
    cursor: 'pointer',
    backgroundColor: 'lightgray'
  }
};



export default HeaderLayout;
