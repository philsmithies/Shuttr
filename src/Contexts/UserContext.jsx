import React, { useState, createContext, useEffect } from "react";

// import Axios from "axios";

// This will hold the context
export const UserContext = createContext();

const UserContextProvider = (props) => {
  const [data, setData] = useState();

  // Fetch Method to get the data
  // useEffect(() => {
  //   Axios({
  //     method: "GET",
  //     withCredentials: true,
  //     url: "/user",
  //   }).then((res) => {
  //     setData(res.data);
  //   });
  // }, []);

  useEffect(() => {
    const loggedUserJSON = window.localStorage.getItem("shuttr-user");
    if (loggedUserJSON) {
      const user = JSON.parse(loggedUserJSON);
      setData(user);
    }
  }, []);

  return (
    <UserContext.Provider value={data}>{props.children}</UserContext.Provider>
  );
};

export default UserContextProvider;
