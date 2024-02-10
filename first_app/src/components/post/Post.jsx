import React from "react";
import { DeleteOutlined } from "@ant-design/icons"; // { DeleteFilled }

export default function Post(props) {
  const { title, body, deletePost, index } = props;
  return (
    <div>
      <h2>{title}</h2>
      <p>{body}</p>
      <DeleteOutlined onClick={() => deletePost(index)} />
    </div>
  );
}
