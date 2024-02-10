import React, { useState } from "react";
import Post from "../post/Post";
import { Input } from "antd";

export default function Form() {
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const [statusTitle, setStatusTitle] = useState();
  const [statusBody, setStatusBody] = useState();

  const [posts, setPosts] = useState([]); // {title: ..., body: ...}

  const deletePost = (i) =>
    setPosts(posts.filter((post, index) => index !== i));

  return (
    <>
      <form style={{ display: "flex", flexDirection: "column" }}>
        <label htmlFor="">Title</label>
        <Input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          allowClear={true}
          status={statusTitle}
        />
        <label htmlFor="">Body</label>
        <Input
          value={body}
          onChange={(e) => setBody(e.target.value)}
          allowClear
          status={statusBody}
        />
        <input
          type="button"
          value="Создать пост"
          style={{ marginTop: 15 }}
          onClick={() => {
            if (
              (body === undefined || body === null || body === "") &&
              (title === undefined || title === null || title === "")
            ) {
              setStatusBody("error");
              setStatusTitle("error");
            } else if (body === undefined || body === null || body === "") {
              setStatusBody("error");
              setStatusTitle();
            } else if (title === undefined || title === null || title === "") {
              setStatusTitle("error");
              setStatusBody();
            } else {
              setPosts([...posts, { title, body }]); // clear fields
              setStatusTitle();
              setStatusBody();
            }
          }}
        />
      </form>
      <div>
        {posts.map(({ title, body }, index) => (
          <Post
            title={title}
            body={body}
            deletePost={deletePost}
            index={index}
          />
        ))}
      </div>
    </>
  );
}
