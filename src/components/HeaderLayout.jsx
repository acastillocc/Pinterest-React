import React from "react";
import { FaPinterest } from "react-icons/fa";
import { IoSearchSharp } from "react-icons/io5";
import { BsFillBellFill } from "react-icons/bs";
import { AiFillMessage } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import {IoIosArrowDown} from "react-icons/io"

const HeaderLayout = () => {
  return (
    <div style={_styleHeader.leHeader}>
      <FaPinterest size={50} color="red" />
      <div style={_buscar.barraBuscar} type="input">
        <IoSearchSharp size={20} color="black" />
        <pre />
        Buscar
      </div>
        <div style={_icons.iconos}>
          <BsFillBellFill size={25} cursor="pointer" />
          <AiFillMessage size={25} cursor="pointer" />
          <CgProfile size={25} cursor="pointer"/>
          <IoIosArrowDown size={25} cursor="pointer"/>

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
    padding: "7px",
    alignItems: "center",
    justifyContent:"space-between",
    height: "3.5vh",
    width: "13vw",
    color: "#808080",
  },
};


export default HeaderLayout;
