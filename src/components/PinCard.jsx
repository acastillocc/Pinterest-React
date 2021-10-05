import React from 'react';

const PinCard = (props) => {
  return (
    <div style={{ ..._stylesPinCard.pin_card, ..._stylesPinCard[props.size] }}>
      <img src={props.image} alt='No se pudo cargar la imagen' style={{ ..._stylesPinCard.pin_card }} />
    </div>

  );
};

const _stylesPinCard = {
  pin_card: {
    cursor: 'pointer',
    margin: '15px 10px',
    padding: 0,
    borderRadius: '16px',
    backgroundColor: 'transparent',
  },
  
  small: {
    gridRowEnd: 'span 26',
  },
  medium: {
    gridRowEnd: 'span 33',
  },
  large: {
    gridRowEnd: 'span 45',
  },
};

export default PinCard;
