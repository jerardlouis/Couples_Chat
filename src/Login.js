import React, { useState } from "react";
import "./Login.css";
import Socials from "./Socials.js";

function Login({ login }) {
  const [userName, setUserName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    login(userName);
    console.log(userName);
    alert("Welcome to the game " + userName + "!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <img class="enter" src="https://see.fontimg.com/api/renderfont4/Xg59/eyJyIjoiZnMiLCJoIjoyMDIsInciOjIwMDAsImZzIjoxMDEsImZnYyI6IiNGRkZGRkYiLCJiZ2MiOiIjMDAwMDAwIiwidCI6MX0/RW50ZXIgWW91ciBVc2VybmFtZQ/grind-mafia.png"/>

      <div class="login">
        <label htmlFor="name" />
        <input class="insert"
          placeholder="Who are you?"
          type="text"
          name="user"
          id="user"
          onChange={(e) => setUserName(e.target.value)}
          value={userName.name}
          
        />
      </div>
      <div>
        <input class = "submitButton" type="submit" value="Join Game" />
      </div>
      
      <Socials/>
      <p>By Jerard Dayanghirang</p>
      <div class="image">
        <img src="https://martincrownover.com/blog/wp-content/uploads/2009/04/particle-fire-header-ani.gif" width="1500" height="400"/>
      </div>
    </form>
    
  );
}

export default Login;