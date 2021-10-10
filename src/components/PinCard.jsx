import React, { useState } from "react";
import { CgProfile } from "react-icons/cg";
import { FiUpload } from "react-icons/fi";
import { BsThreeDots } from "react-icons/bs";

const PinCard = (props) => {
  const [mostrar, setMostrar] = useState(false);

  function hoveringCard(e) {
    e.target.style.opacity = "0.5";
    <div>
      <CgProfile size={25} />
    </div>;
  }

  function notHoveringCard(e) {
    e.target.style.opacity = "1";
    e.target.style.transition = "all 0.3s ease";
  }
  return (
    <div
      style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}
      onMouseEnter={() => setMostrar(true)}
      onMouseLeave={() => setMostrar(false)}
    >
      {mostrar && (
      <div className="btn_guardar">Guardar</div>
      )}
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
    cursor: "zoom-in",
    margin: "15px 10px",
    padding: "8px",
    borderRadius: "16px",
    // backgroundImage: 'url(https://picsum.photos//211/240)',
  },

  small: {
    gridRowEnd: "span 30",
    backgroundImage: "url(https://picsum.photos//230/255)",
  },
  medium: {
    gridRowEnd: "span 36",
    backgroundImage: "url(https://picsum.photos//230/312)",
  },
  large: {
    gridRowEnd: "span 48",
    backgroundImage: "url(https://picsum.photos//230/425)",
  },
};

export default PinCard;
