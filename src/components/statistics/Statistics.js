import React from "react";
import statistics from "../../statistical-data.json";
import StatisticsItem from "./statisticsItem/StatisticsItem";
import styles from "./statistics.module.css";

const Statistics = () => {
  return (
    <section className={styles.statistics}>
      <h2 className={styles.title}>Upload stats</h2>

      <ul className={styles.statList}>
        {statistics.map(statistics => (
          <StatisticsItem statistics={statistics} key={statistics.id} />
        ))}
      </ul>
    </section>
  );
};

export default Statistics;
