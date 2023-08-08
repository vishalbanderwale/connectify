import { useContext } from "react";
import { createContext, useEffect, useState } from "react";
import { authContext } from "./AuthContext";

export const userContext = createContext();

function UserProvider({ children }) {
  const userToken = localStorage.getItem("Token");
  console.log(userToken);
  const [users, setUsers] = useState([]);
  const { setmainUser } = useContext(authContext);

  const getUsers = async () => {
    const response = await fetch("api/users");
    const usersData = await response.json();
    // console.log(usersData);
    setUsers(usersData.users);
  };

  const followUsers = async (id) => {
    const response = await fetch(`api/users/follow/${id}`, {
      method: "POST",
      headers: {
        authorization: userToken,
      },
    });
    const data = await response.json();
    // console.log(data);
    setmainUser(data.user);
    // if(response.status===200){
    // Dispat
    //     }else{
    //       console.log("error")
    //     }
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <userContext.Provider value={{ users, followUsers }}>
      {children}
    </userContext.Provider>
  );
}

export { UserProvider };
