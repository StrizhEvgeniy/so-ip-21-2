import { useState } from "react";

export default function Todo({ title, description, doneFlg }) {
  const [isDone, setIsDone] = useState(doneFlg);
  return (
    <div
      onMouseEnter={(e) => {
        setIsDone(!isDone);
      }}
      style={{ cursor: "pointer" }}
    >
      <h1
        style={{
          textDecoration: isDone ? "line-through" : null,
          color: isDone ? "grey" : null,
        }}
      >
        {title}
      </h1>
      <div
        style={{
          textDecoration: isDone ? "line-through" : null,
          color: isDone ? "grey" : null,
        }}
      >
        {description}
      </div>
    </div>
  );
}
