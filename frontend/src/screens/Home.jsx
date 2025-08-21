import { useEffect, useState } from "react";
import { baseUrl } from "../config/Axios";

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token"); // ya jaha tu token save kar raha hai

    fetch(`${baseUrl}/auth/check`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`, // token bhejna hoga
      },
      credentials: "include"
    })
      .then(res => {
        if (!res.ok) {
          throw new Error("Unauthorized");
        }
        return res.json();
      })
      .then(data => {
        console.log(data);
        setUser(data.user);   // backend se jo user aa raha hai usko save kar
        setLoading(false);    // loading khatam
      })
      .catch(err => {
        console.error(err);
        setLoading(false);    // error me bhi loading hatao
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      {user ? (
        <>
        <div>
          
        </div>
        </>
      ) : (
        <h1>You are not authenticated</h1>
      )}
    </div>
  );
};

export default Home;
