import { useState } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";
import { userContext } from "./UserContext";

export const authContext = createContext();

function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  const Navigate = useNavigate();
  // const { setUsers } = useContext(userContext);

  const [loginData, setloginData] = useState([{ username: "", password: "" }]);

  const [mainUser, setmainUser] = useState({});
  console.log(mainUser);

  const handleLoginInput = (e) => {
    const name = e.target.name;
    // console.log(name)
    const value = e.target.value;
    // console.log(value)
    setloginData({ ...loginData, [name]: value });
    // console.log(loginData)
  };

  const userLogin = async (loginData) => {
    try {
      const response = await fetch("api/auth/login", {
        method: "POST",
        body: JSON.stringify(loginData),
      });

      const data = await response.json();
      // console.log(data);
      localStorage.setItem("Token", data.encodedToken);
      if (response.status === 200) {
        setmainUser(data.foundUser);
        Navigate("/home");
      } else {
        console.log("something wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    userLogin(loginData);
  };

  const [authUser, setauthUser] = useState({
    fullName: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    avatarUrl: "https://randomuser.me/api/portraits/men/3.jpg",
    bio: "my Bio",
  });

  console.log(authUser);

  const handleSignUpInput = (event) => {
    const name = event.target.name;
    // console.log(name)
    const value = event.target.value;
    // console.log(value)
    setauthUser({ ...authUser, [name]: value });
    //name (variable) is key []
    // console.log(user)
  };

  const signUpUser = async (user) => {
    console.log(user);
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(user),
        //convert  object to json
      });
      const data = await response.json();
      console.log(data);
      console.log(response);
      //  console.log(data)
      if (response.status === 201) {
        Navigate("/login");
      } else {
        console.log("something wrong");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    signUpUser(authUser);
  };

  return (
    <authContext.Provider
      value={{
        isLogged,
        setIsLogged,
        handleLoginInput,
        handleLoginSubmit,
        handleSignUpInput,
        handleSignUpSubmit,
        authUser,
        loginData,
        mainUser,
        setmainUser,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export { AuthProvider };
