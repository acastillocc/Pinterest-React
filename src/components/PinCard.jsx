import React from 'react';

const PinCard = (props) => {

  function hoveringCard (e){
    e.target.style.opacity = '0.5';    
  }
  
  function notHoveringCard (e) {
    e.target.style.opacity = '1';
  }
  return (
    <div style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size]  }} >

      <img src={props.image} alt='No se pudo cargar la imagen' style={{ ..._stylesPinCard.pin_card }} onMouseEnter= {hoveringCard} onMouseLeave = {notHoveringCard} />

    </div>

  );
};

const _stylesPinCard = {
  pin_card: {
    cursor: 'pointer',
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
  // backgroundColor: 'lightgray',
  },
  
  small: {
    gridRowEnd: 'span 30',
  },
  medium: {
    gridRowEnd: 'span 36',
  },
  large: {
    gridRowEnd: 'span 48',
  },
};

// const _buttons = {
//   botones: {
//     cursor: 'pointer',
//     padding: '0px',
//     margin: '5px',
//     borderRadius: '40px',
//     backgroundColor: 'yellow',
//     width: '10vw',
//     justifyContent: 'center',
//   }
// }

export default PinCard;
