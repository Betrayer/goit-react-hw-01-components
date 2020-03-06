import React from "react";
import styles from "./friendListItem.module.css";

const FriendListItem = ({ friends }) => {
  return (
    <li className={styles.item}>
      {friends.isOnline ? (
        <span className={styles.statusOn}></span>
      ) : (
        <span className={styles.statusOff}></span>
      )}
      <img
        className={styles.avatar}
        src={friends.avatar}
        alt="profile_image"
        width="48"
      />
      <p className={styles.name}>{friends.name}</p>
    </li>
  );
};

export default FriendListItem;
