import React, { useState } from "react";
import "./Login.css";
import Socials from "./Socials.js";

function Login({ login }) {
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userName, pass);
    console.log(userName);
    alert("Welcome " + userName + "!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <img class="enter" src="https://see.fontimg.com/api/renderfont4/xKd8/eyJyIjoiZnMiLCJoIjoxMzAsInciOjIwMDAsImZzIjo2NSwiZmdjIjoiI0ZGRkZGRiIsImJnYyI6IiMwMDAwMDAiLCJ0IjoxfQ/SmVyYWJlbGEgQ2hhdCByb29t/crucifixion-regular.png"/>

      <div class="login">
        <label htmlFor="name" />
        <input class="insert"
          placeholder="username"
          type="text"
          name="user"
          id="user"
          onChange={(e) => setUserName(e.target.value)}
          value={userName.name}
          
        />
        <input class="insert"
          placeholder="password"
          type="text"
          name="password"
          id="password"
          onChange={(e) => setPass(e.target.value)}
          value={pass.name}
          
        />
      </div>
      <div class="join">
        <input class = "submitButton" type="submit" value="Join" />
      </div>
      
      
    </form>
    
  );
}

export default Login;