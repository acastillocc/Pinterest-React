import React from 'react';
import PinCard from './PinCard';

const PinterestLayout = () => {
  return (
    <div style={_stylesLayout.pin_container}>
      <PinCard size='small' image='https://picsum.photos//211/240'/>
      <PinCard size='medium' image='https://picsum.photos//211/300'/>
      <PinCard size='large' image='https://picsum.photos//211/425'/>
      <PinCard size='small' image='https://picsum.photos//211/240'/>
      <PinCard size='medium' image='https://picsum.photos//211/300'/>
      <PinCard size='large' image='https://picsum.photos//211/425'/>
      <PinCard size='small' image='https://picsum.photos//211/240'/>
      <PinCard size='medium' image='https://picsum.photos//211/300'/>
      <PinCard size='large' image='https://picsum.photos//211/425'/>
      <PinCard size='small' image='https://picsum.photos//211/240'/>
      <PinCard size='medium' image='https://picsum.photos//211/300'/>
      <PinCard size='large' image='https://picsum.photos//211/425'/>
      <PinCard size='small' image='https://picsum.photos//211/240'/>
      <PinCard size='medium' image='https://picsum.photos//211/300'/>
      <PinCard size='large' image='https://picsum.photos//211/425'/>
      <PinCard size='small' image='https://picsum.photos//211/240'/>
      <PinCard size='medium' image='https://picsum.photos//211/300'/>
      <PinCard size='large' image='https://picsum.photos//211/425'/>
    </div>
  );
};

const _stylesLayout = {
  pin_container: {
    margin: 0,
    padding: 0,
    width: '90vw',
    backgroundColor: 'white',
    position: 'absolute',
    left: '50%',
    transform: 'translateX(-50%)',
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, 250px)',
    gridAutoRows: '10px',
    justifyContent: 'center',
  },

};

export default PinterestLayout;
