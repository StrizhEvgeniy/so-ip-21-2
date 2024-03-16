import React from "react";
import Todo from "./components/todo/Todo";

export default function Row() {
  const todos = [
    { title: 123, desc: 11, doneFlg: true },
    { title: 223, desc: 31, doneFlg: false },
    { title: 323, desc: 21, doneFlg: true },
  ];
  return todos.map(({ title, desc, doneFlg }) => (
    <Todo title={title} desc={desc} doneFlg={doneFlg} />
  ));
}
