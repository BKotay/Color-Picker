// App.js
import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker"; 

const App = () => {
  const colorOptions = [
    { letter: "B", color: "skyblue" },
    { letter: "L", color: "turquoise" },
    { letter: "A", color: "silver" },
    { letter: "M", color: "gold" },
    { letter: "a", color: "maroon" }, // Capital A to avoid reuse of 'a'
    { letter: "H", color: "khaki" },
  ];

  const [bgColor, setBgColor] = useState(""); // State for background color

  // Handle when a letter button is clicked
  const handleLetterClick = (color) => {
    setBgColor(color); // Update the background color
  };

  const handleReset = () => {
    setBgColor(""); // Reset the background color
  };

  return (
    <div
      className="app"
      style={{
        backgroundColor: bgColor,
        minHeight: "100vh",
        padding: "100px",
        transition: "background-color 1.3s ease",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "36px" }}>
        {/* Pass the bgColor to ColorPicker as a prop */}
        <ColorPicker
          colorOptions={colorOptions}
          onLetterClick={handleLetterClick}
          selectedColor={bgColor} // Pass the selectedColor to ColorPicker
        />
      </h1>
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <button
          style={{
            padding: "10px 20px",
            fontSize: "18px",
            backgroundColor: "#ccc",
            border: "none",
            cursor: "pointer",
          }}
          onClick={handleReset} // Reset the background color
        >
          Reset Background Color
        </button>
      </div>
    </div>
  );
};

export default App;


