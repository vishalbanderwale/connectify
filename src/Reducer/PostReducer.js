function reducerFunction(state, { type, payload }) {
  // action:{type,payload}
  switch (type) {
    case "SET_POST":
      return { ...state, Posts: payload };

    case "LIKE_POST":
      return { ...state, Posts: payload };

    case "DISLIKE_POST":
      return { ...state, Posts: payload };

    case "ADD_BOOKMARK":
      return { ...state, Bookmarks: payload };

    case "REMOVE_BOOKMARK":
      return { ...state, Bookmarks: payload };

    case "SORTING":
      return { ...state, sort: payload };
  }
}

//calling data and updating it

export { reducerFunction };
