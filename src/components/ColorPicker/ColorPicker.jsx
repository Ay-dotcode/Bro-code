import { useState } from 'react';
import styles from './ColorPicker.module.css';

function ColorPicker() {

    const [color, setColor] = useState("#FFFFFF");
    function handleColorChange(e) {
        setColor(e.target.value);
    }
    return (
        <div className={styles['color-picker-container']}>
            <h1>Color Picker</h1>
            <div
                className={styles['color-display']}
                style={{
                    backgroundColor: color,
                    color: `#${(Number(`0x${color.slice(1)}`) ^ 0xFFFFFF).toString(16).padStart(6, '0')}`
                }}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="">Select a Color:</label>
            <input type="color" value={color} onChange={handleColorChange} />
        </div>
    );

}

export default ColorPicker