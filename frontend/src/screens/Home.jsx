import axios from "axios";
import React, { useEffect } from "react";
import { baseUrl } from "../config/Axios";

const Home = () => {
  useEffect(() => {
    const token = localStorage.getItem("token"); // ya jaha save kiya hai

    axios
      .get(`${baseUrl}/user/home`, {
        headers: {
          Authorization: `Bearer ${token}`, // ye important hai
        },
      })
      .then((res) => {
        console.log("home", res.data);
      })
      .catch((err) => {
        console.log("err", err.response?.data || err);
      });
  }, []);

  return <></>;
};

export default Home;
