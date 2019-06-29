import React, { FC } from 'react';

export interface PopoverProps {
  x: number;
  y: number;
  word: string;
  definition: string;
  visible: Boolean;
}

const Popover: FC<PopoverProps> = ({x, y, word, definition, visible}) => {
  return visible && (
    <div className='popover'
      style={{
        top: y + window.scrollY,
        left: x
      }}
    >
      <h4>{word}</h4>
      <p>{definition}</p>
    </div>
  );
}

export default Popover;
