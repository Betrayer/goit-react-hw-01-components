import React from "react";
import FriendListItem from "./friendListItem/FriendListItem";
import friends from "../../friends.json";
import styles from "./friendList.module.css";

const FriendList = () => {
  return (
    <ul className={styles.friendList}>
      {friends.map(friends => (
        <FriendListItem friends={friends} key={friends.id} />
      ))}
    </ul>
  );
};

export default FriendList;
