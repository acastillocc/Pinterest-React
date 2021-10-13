import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiUpload } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const PinCard = (props) => {
  const [mostrar, setMostrar] = useState(false);

  function hoveringCard(e) {
    e.target.style.opacity = "0.7";
    // <div>
    //   <CgProfile size={25} />
    // </div>
  }

  function notHoveringCard(e) {
    e.target.style.opacity = "1";
  }
  return (
    <div
      style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}
      onMouseEnter={() => setMostrar(true)}
      onMouseLeave={() => setMostrar(false)}
      onMouseOver={hoveringCard}
      onMouseOut={notHoveringCard}
    >    
      {mostrar && <div className="btn_guardar">Guardar</div>}
      {mostrar && (
        <div className="btn_inside">
          <FiUpload color="black" />
        </div>
      )}
      {mostrar && (
        <div className="btn_inside">
          <BsThreeDots color="black" />
        </div>
      )}
    </div>
  );
};

const _stylesPinCard = {
  pin_card: {
    margin: "15px 10px",
    padding: 0,
    borderRadius: "16px",
    backgroundColor: "red",
  },
  small: {
    gridRowEnd: "span 26",
    backgroundImage: "url(https://picsum.photos//255/265)",
  },
  medium: {
    gridRowEnd: "span 33",
    backgroundImage: "url(https://picsum.photos//255/312)",
  },
  large: {
    gridRowEnd: "span 45",
    backgroundImage: "url(https://picsum.photos//255/425)",
  },

  btn_guardar: {
    display: 'flex',
    float: 'right',
    margin: '8px',
    padding: '4px',
    position: 'relative',
    backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '18px',
    width: '40%',
    height: '4vh',
    color: 'white',
    fontWeight: 'bold',
    cursor: 'pointer',
  },

  btn_inside: {
    display: 'flex',
    margin: '7px',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    width: '12%',
    height: '4vh',
    color: 'white',
    fontWeight: 'bold',
    opacity: '0.8',
    cursor: 'pointer',
  },

};

export default PinCard;
