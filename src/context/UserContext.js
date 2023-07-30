import { createContext, useEffect, useState } from "react";

export const userContext = createContext();

function UserProvider({ children }) {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const response = await fetch("api/users");
    const usersData = await response.json();
    // console.log(usersData);
    setUsers(usersData.users);
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
    <userContext.Provider value={{ users }}>{children}</userContext.Provider>
  );
}

export { UserProvider };
