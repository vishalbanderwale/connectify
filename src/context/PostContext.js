import React, { createContext, useEffect, useState } from "react";
export const postContext = createContext();

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
    <postContext.Provider value={{ post }}>{children}</postContext.Provider>
  );
}

export { PostProvider };
