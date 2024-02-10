import React, { useState } from "react";
import Button from "../button/Button";

export default function Todo() {
  const [doneFlg, setDoneFlg] = useState(false);
  const title = "Помыть пол";
  const description = "Хорошо помыть пол";
  return (
    <div onMouseMove={(e) => console.log(e)} style={{ cursor: "pointer" }}>
      <h1
        style={{
          textDecoration: doneFlg ? "line-through" : null,
          color: doneFlg ? "grey" : null,
        }}
      >
        {title}
      </h1>
      <div
        style={{
          textDecoration: doneFlg ? "line-through" : null,
          color: doneFlg ? "grey" : null,
        }}
      >
        {description}
      </div>
    </div>
  );
}
