import React, { useState } from "react";
import LandingComponent from "./components/landing/landingComponent";
import background from "./background.jpeg";
import "./App.css";
import StatsComponent from "./components/stats/statsComponent";
function App() {
  const [username, setusername] = useState("");
  const getUsername = (uname) => {
    setusername(uname);
    console.log(typeof username);
  };
  return (
    <div
      className="app"
      style={{
        backgroundImage: `url(${background})`,
      }}
    >
      {!username ? (
        <LandingComponent getUsername={getUsername} />
      ) : (
        <StatsComponent uname={username} />
      )}
    </div>
  );
}

export default App;
