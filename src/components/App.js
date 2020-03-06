import React from "react";
import Statistics from "./statistics/Statistics";
import Profile from "./profile/Profile";
import TransactionHistory from "./transactionHistory/TransactionHistory";
import user from "../user.json";
import FriendList from "./friendList/FriendList";

const App = () => {
  return (
    <>
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics />
      <FriendList />
      <TransactionHistory />
    </>
  );
};

export default App;
