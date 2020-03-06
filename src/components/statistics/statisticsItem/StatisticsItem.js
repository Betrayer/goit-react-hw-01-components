import React from "react";
import style from "./statisticsItem.module.css";

const StatisticsItem = ({ statistics }) => {
  return (
    <li className={style.item}>
      <span className={style.label}>{statistics.label}</span>
      <span className={style.percentage}>{statistics.percentage}%</span>
    </li>
  );
};
export default StatisticsItem;
