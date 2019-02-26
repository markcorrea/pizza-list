import React from 'react'

import SizeColumn from './SizeColumn'

const SizeBoard = props => {
  const { pizzaSizes } = props.size
  return (
    <div>
      <div className='card-container'>
        <div className='row'>
          {pizzaSizes.map((currentSize, sizeIndex) => (
            <SizeColumn
              key={`size_board_${sizeIndex}`}
              size={currentSize}
              sizeIndex={sizeIndex}
              checkTopping={props.checkTopping}
              addToCart={props.addToCart}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default SizeBoard
