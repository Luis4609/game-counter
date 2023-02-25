import React from 'react'
import styles from "@/styles/Home.module.css";

function ScoreInputs() {
  return (
    <div className={styles.scoreInput}>
      <label htmlFor="team1ScoreInput">Enter Team 1 score:</label>
      <input
        type="number"
        id="team1ScoreInput"
      //   value={team1InputValue}
      //   onChange={handleTeam1InputChange}
      // />
      // <button onClick={() => handleIncrement("team1")}>
      //   Add to Team 1
      // </button>
      />
    </div>
  )
}

export default ScoreInputs