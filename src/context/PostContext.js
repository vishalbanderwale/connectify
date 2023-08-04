import React, { createContext, useEffect, useState } from "react";
import { useReducer } from "react";
import { reducerFunction } from "../Reducer/PostReducer";
export const postContext = createContext();

function PostProvider({ children }) {
  // const [post, setPost] = useState([]);
  const initalState = { Posts: [] };

  const [state, Dispatch] = useReducer(reducerFunction, initalState);

  const Token = localStorage.getItem("Token");
  console.log(Token);

  const getPost = async () => {
    const response = await fetch("/api/posts");
    //get request we dont  need to write method
    const data = await response.json();
    // console.log(data);
    // setPost(data.posts);

    Dispatch({ type: "SET_POST", payload: data.posts });
  };

  const likePost = async (id) => {
    try {
      const response = await fetch(`/api/posts/like/${id}`, {
        method: "POST",

        headers: {
          authorization: Token,
        },
      });
      console.log("like");
      //private route  we need authorization token

      const data = await response.json();
      // setPost(data.posts);
      Dispatch({ type: "LIKE_POST", payload: data.posts });

      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <postContext.Provider value={{ post: state.Posts, likePost }}>
      {children}
    </postContext.Provider>
  );
}

export { PostProvider };
