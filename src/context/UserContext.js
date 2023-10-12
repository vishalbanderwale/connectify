import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { authContext } from "./AuthContext";

export const userContext = createContext();

function UserProvider({ children }) {
  const userToken = localStorage.getItem("Token");
  // console.log(userToken);
  const [users, setUsers] = useState([]);
  const { setmainUser } = useContext(authContext);
  const [editProfile, setEditProfile] = useState(false);

  function editProfileHandler() {
    setEditProfile(!editProfile);
  }

  // const sortedData = trendingPost(post, sort);

  // console.log(users);

  const getUsers = async () => {
    const response = await fetch("api/users");
    const usersData = await response.json();
    // console.log(usersData);
    setUsers(usersData.users);
  };

  // const filteredMain = sortedData?.filter(
  //   (fi) =>
  //     mainUser?.following?.find((f) => f?.username === fi?.username) ||
  //     fi?.username === mainUser?.username //checking its username matching with our username
  //   // we are taking one post checking twice
  // );

  const editUser = async (body) => {
    // console.log(edit);
    const response = await fetch("api/users/edit", {
      method: "POST",
      headers: {
        authorization: userToken,
      },
      body: JSON.stringify({
        userData: body,
      }),
    });
    const data = await response.json();
    console.log(data);
    if (response.status === 201) {
      setmainUser(data.user);
      // editProfileHandler();
    } else {
      console.log("error");
    }
  };

  const followUsers = async (id) => {
    console.log(id);
    const response = await fetch(`api/users/follow/${id}`, {
      method: "POST",
      headers: {
        authorization: userToken,
      },
    });
    const data = await response.json();
    console.log(data);
    setmainUser(data.user);
    setmainUser(data.followUser);
  };

  const unFollowUsers = async (id) => {
    const response = await fetch(`api/users/follow/${id}`, {
      method: "POST",
      headers: {
        authorization: userToken,
      },
    });
    const data = await response.json();
    console.log(data);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <userContext.Provider
      value={{
        users,
        getUsers,
        followUsers,
        unFollowUsers,
        setUsers,
        editUser,
        editProfile,
        setEditProfile,
        editProfileHandler,
      }}
    >
      {children}
    </userContext.Provider>
  );
}

export { UserProvider };
