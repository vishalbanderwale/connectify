import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const authContext = createContext();

function AuthProvider({ children }) {
  const [isLogged, setIsLogged] = useState(false);

  const Navigate = useNavigate();

  const [loginData, setloginData] = useState([{ username: "", password: "" }]);

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
      console.log(data);
      localStorage.setItem("Token", data.encodedToken);
      if (response.status === 200) {
        Navigate("/");
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

  const [user, setUser] = useState([
    {
      fullName: "",
      email: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
  ]);

  const handleSignUpInput = (event) => {
    const name = event.target.name;
    // console.log(name)
    const value = event.target.value;
    // console.log(value)
    setUser({ ...user, [name]: value });
    //name (variable) is key []
    // console.log(user)
  };

  const signUpUser = async (user) => {
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
    signUpUser();
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
        user,
        loginData,
      }}
    >
      {children}
    </authContext.Provider>
  );
}

export { AuthProvider };
