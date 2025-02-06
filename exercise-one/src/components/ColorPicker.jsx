import React from "react";

// ColorButton Component
const ColorButton = ({ letter, color, onLetterClick }) => {
  return (
    <button
      style={{
        backgroundColor: color,
        color: "white",
        fontSize: "124px",
        padding: "10px",
        border: "none",
        cursor: "pointer",
      }}
      onClick={() => onLetterClick(color)} // When button is clicked, the color is passed to the parent function
    >
      {letter}
    </button>
  );
};

// ColorPicker Component
const ColorPicker = ({ colorOptions, onLetterClick, selectedColor }) => {
  return (
    <div>
      <div style={{ marginBottom: "20px", textAlign: "center" }}>
        <h2>Selected Color: {selectedColor}</h2>
      </div>

      {/* Render ColorButton for each color */}
      {colorOptions.map(({ letter, color }) => (
        <ColorButton
          key={letter}
          letter={letter}
          color={color}
          onLetterClick={onLetterClick}
        />
      ))}
    </div>
  );
};

export default ColorPicker; 

