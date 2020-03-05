import React from "react";
import statistics from "../../statistical-data.json";
import StatisticsItem from "./statisticsItem/StatisticsItem";

const Statistics = () => {
  return (
    <section className="statistics">
      <h2 className="title">Upload stats</h2>

      <ul className="stat-list">
        {statistics.map(statistics => 
          <StatisticsItem statistics={statistics} key={statistics.id} />
        )}
      </ul>
    </section>
  );
};

export default Statistics;
