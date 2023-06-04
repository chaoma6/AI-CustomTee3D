import { SketchPicker } from 'react-color';
import { useSnapshot } from 'valtio';

import React from 'react';
import state from '../store';

function ColorPicker() {
  const snap = useSnapshot(state);

  return (
    <div className="absolute left-full ml-3">
      <SketchPicker
        color={snap.color}
        disableAlpha
        presetColors={[
          '#ccc',
          '#EFBD4E',
          '#80C670',
          '#E74C3C',
          '#9B59B6',
          '#1ABC9C',
          '#BDC3C7',
          '#7F8C8D'
        ]}
        onChangeComplete={(color) => (state.color = color.hex)}
      />
    </div>
  );
}

export default ColorPicker;
