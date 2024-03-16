import { Button } from "antd";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Loading from "../common/Loading";
import { WarningOutlined } from "@ant-design/icons";

export default function Test() {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  useEffect(() => {
    setLoading(true);
    axios("https://jsonplaceholder.typicode.com/users/1")
      .then((data) => {
        setUser(data.data);
        setLoading(false);
      })
      .catch((e) => {
        setLoading(false);
        setError(true);
      });
  }, []);

  if (error) return <WarningOutlined style={{ color: "red" }} />;
  if (loading) return <Loading />;
  return (
    <div>
      <h1>{user.name}</h1>
      <div>{user.email}</div>
      <div>{user.phone}</div>
    </div>
  );
}

// localStorage.getItem(key);
// localStorage.setItem(key, value);
