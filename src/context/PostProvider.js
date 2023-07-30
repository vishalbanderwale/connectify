import React, { createContext, useEffect, useState } from "react";
export const PostContext = createContext();

function PostProvider({ children }) {
  const [post, setPost] = useState([]);

  const getPost = async () => {
    const response = await fetch("/api/posts");
    const data = await response.json();
    // console.log(data);
    setPost(data.posts);
  };

  useEffect(() => {
    getPost();
  }, []);
  return (
    <PostContext.Provider value={{ post }}>{children}</PostContext.Provider>
  );
}

export { PostProvider };
