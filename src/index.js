import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import Profile from "./components//profile/Profile";
import Statistics from "./components/statistics/Statistics";
import user from "./user.json";
import statisticalData from "./statistical-data.json";

ReactDOM.render(<App />, document.getElementById("root"));

// Profile
//     name={user.name}
//     tag={user.tag}
//     location={user.location}
//     avatar={user.avatar}
//     stats={user.stats}
