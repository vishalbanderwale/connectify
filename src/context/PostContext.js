import React, { createContext, useEffect } from "react";
import { useReducer } from "react";
import { reducerFunction } from "../Reducer/PostReducer";
export const postContext = createContext();

function PostProvider({ children }) {
  // const [post, setPost] = useState([]);
  const initalState = { Posts: [], Bookmarks: [], sort: "" };

  const [Poststate, Dispatch] = useReducer(reducerFunction, initalState);

  const Token = localStorage.getItem("Token");
  // console.log(Token);

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
      // console.log("like");
      //private route  we need authorization token

      const data = await response.json();
      // setPost(data.posts);

      if (response.status === 201) {
        Dispatch({ type: "LIKE_POST", payload: data.posts });
      } else {
        console.log("error");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const dislikePost = async (id) => {
    try {
      const response = await fetch(`/api/posts/dislike/${id}`, {
        method: "POST",
        headers: {
          authorization: Token,
        },
      });

      const data = await response.json();
      console.log(data);

      Dispatch({ type: "DISLIKE_POST", payload: data.posts });
    } catch (error) {
      console.error(error);
    }
  };

  const addBookmarkPost = async (id) => {
    try {
      const response = await fetch(`/api/users/bookmark/${id}`, {
        method: "POST",
        headers: {
          authorization: Token,
        },
      });
      const data = await response.json();
      console.log(data);
      Dispatch({ type: "ADD_BOOKMARK", payload: data.bookmarks });
      //bookmarks coming from response
    } catch (error) {
      console.error(error);
    }
  };

  const removeBookmarkPost = async (id) => {
    try {
      const response = await fetch(`api/users/remove-bookmark/${id}`, {
        method: "POST",
        headers: {
          authorization: Token,
        },
      });
      const data = await response.json();
      Dispatch({ type: "REMOVE_BOOKMARK", payload: data.bookmarks });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getPost();
  }, []);

  return (
    <postContext.Provider
      value={{
        post: Poststate.Posts,
        sort: Poststate.sort,
        likePost,
        dislikePost,
        addBookmarkPost,
        removeBookmarkPost,
        bookmarks: Poststate.Bookmarks,
        Token,
        Dispatch,
      }}
    >
      {children}
    </postContext.Provider>
  );
}

export { PostProvider };

// {/* // state.posts from object post value:23 obj */}
// {/* //const{posts,sort} = postState */}

// bookmark key is not there so we are making new separate
