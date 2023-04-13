import React from "react";
import style from "./boxes.module.css";

const initialState = {
  red: 'red',
  gold: 'gold',
  aqua: 'aqua',
  purple: 'purple'
}

export default function BoxesColor() {
  const [colors, setColors] = React.useState(initialState);
  const [checked, setChecked] = React.useState('');

  function handleChange(e, color) {
    setChecked(color);

    const { checked } = e.target;
    if(checked && (
      color === 'red' || color === 'gold' ||color === 'aqua' ||color === 'purple'
    )) {
      setColors({
        red: color,
        gold: color,
        aqua: color,
        purple: color
      })

      return;
    }

    setChecked('');
    setColors(initialState)

  }

  console.log('checked: ', { checked})

  return (
    <div className="boxColor">
      <h2>Boxes Color</h2>
      <div style={{ backgroundColor: colors['red']}}>
        Red

        <input type="checkbox" name="color" checked={checked === 'red'} onChange={e => handleChange(e, 'red')} />
      </div>
      <div style={{ backgroundColor: colors['gold']}}>
        Gold
        <input type="checkbox" name="color" checked={checked === 'gold'} onChange={e => handleChange(e, 'gold')} />
      </div>
      <div style={{ backgroundColor: colors['aqua']}}>
        Aqua
        <input type="checkbox" name="color" checked={checked === 'aqua'} onChange={e => handleChange(e, 'aqua')} />
      </div>
      <div style={{ backgroundColor: colors['purple']}} >
        Purple
        <input type="checkbox" name="color" checked={checked === 'purple'} onChange={e => handleChange(e, 'purple')} />
      </div>
    </div>
  );
}
