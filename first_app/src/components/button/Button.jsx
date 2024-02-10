import React, { useState } from "react";

export default function Button({ onClick }) {
  const [backgroundColor, setBackgroundColor] = useState("#000");
  const [color, setColor] = useState("#FFF");
  const [text, setText] = useState("Rainbow");
  return (
    <button
      style={{ backgroundColor, color }}
      onClick={onClick}
      //      () => {
      //     setColor(`#${Math.floor(Math.random() * 1000)}`);
      //     setBackgroundColor(`#${Math.floor(Math.random() * 1000)}`);
      //     setText(text + String(Math.random()));
      //   }}
    >
      {text}
    </button>
  );
}
