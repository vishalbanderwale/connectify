function reducerFunction(state, { type, payload }) {
  // action:{type,payload}
  switch (type) {
    case "SET_POST":
      return { ...state, Posts: payload };

    case "LIKE_POST":
      return { ...state, Posts: payload };
  }
}

export { reducerFunction };
