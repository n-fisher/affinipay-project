import React, { FC } from 'react';

export interface PopoverProps {
  x: number;
  y: number;
  word: string;
  definition: string;
  visible: Boolean;
  onDismiss: Function;
}

const Popover: FC<PopoverProps> = ({x, y, word, definition, visible, onDismiss}) => {
  return visible && (
    <div className='popover'
      style={{
        top: y,
        left: x
      }}
      onClick={_=>onDismiss()}
    >
      <h4>{word}</h4>
      <p>{definition}</p>
    </div>
  );
}

export default Popover;
