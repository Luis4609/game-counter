import React, { useState } from "react";
import styles from "@/styles/Home.module.css";

interface Scores {
  team1: number;
  team2: number;
}

function Counter() {
  const [scores, setScores] = useState<Scores>({ team1: 0, team2: 0 });
  const [team1InputValue, setTeam1InputValue] = useState<number>(0);
  const [team2InputValue, setTeam2InputValue] = useState<number>(0);

  function handleIncrement(team: "team1" | "team2") {
    if (team === "team1") {
      setScores((prevScores) => ({
        ...prevScores,
        team1: prevScores.team1 + team1InputValue,
      }));
      setTeam1InputValue(0);
    } else {
      setScores((prevScores) => ({
        ...prevScores,
        team2: prevScores.team2 + team2InputValue,
      }));
      setTeam2InputValue(0);
    }
  }

  function handleTeam1InputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTeam1InputValue(parseInt(event.target.value));
  }

  function handleTeam2InputChange(event: React.ChangeEvent<HTMLInputElement>) {
    setTeam2InputValue(parseInt(event.target.value));
  }

  return (
    <div className={styles.card}>
      <h2>Current Scores:</h2>
      <div className={styles.grid}>
        <div className={styles.teamScores}>
        <TeamScore team="Team 1"></TeamScore>
         <TeamScore team="Team 2"></TeamScore>
        </div>
        <div className={styles.scoreInputs}>
          <div className={styles.scoreInput}>
            <label htmlFor="team1ScoreInput">Enter Team 1 score:</label>
            <input
              type="number"
              id="team1ScoreInput"
              value={team1InputValue}
              onChange={handleTeam1InputChange}
            />
            <button onClick={() => handleIncrement("team1")}>
              Add to Team 1
            </button>
          </div>
          <div className={styles.scoreInput}>
            <label htmlFor="team2ScoreInput">Enter Team 2 score:</label>
            <input
              type="number"
              id="team2ScoreInput"
              value={team2InputValue}
              onChange={handleTeam2InputChange}
            />
            <button onClick={() => handleIncrement("team2")}>
              Add to Team 2
            </button>
          </div>
        </div>
      </div>
    </div>
  );

    function TeamScore(props: {team: string }) {
        return <div className={styles.teamScore}>
            <div className={styles.teamLabel}>{props.team}</div>
            <div className={styles.score}>{scores.team1}</div>
        </div>;
    }
}

export default Counter;
