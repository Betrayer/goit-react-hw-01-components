import React from "react";

const StatisticsItem = ({ statistics }) => {
  return (
    <li className="item">
      <span className="label">{statistics.label}</span>
      <span className="percentage">{statistics.percentage}</span>
    </li>
  );
};
export default StatisticsItem;
