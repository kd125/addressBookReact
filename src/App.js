import "./App.css";
import { useState, useEffect } from "react";
import axios from "axios";
import React from "react";
import UserCard from "./card";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get("https://randomuser.me/api?results=25").then(({ data }) => {
      setUsers(data.results);
    });
  }, []);

  return (
    <div>
      <ul>
        {users.map((user, index) => {
          const fullName = `${user.name.first} ${user.name.last}`;
          const pic = user.picture.medium;
          const email = user.email;
          const location = `${user.location.city}, ${user.location.country}`;
          return (
            <li key={index}>
              <UserCard
                img={pic}
                name={fullName}
                email={email}
                location={location}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
