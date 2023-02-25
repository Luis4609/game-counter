import styles from "@/styles/Home.module.css";

interface TeamScoreInterface {
    team: string;
    score: number
}
function TeamScore(props: TeamScoreInterface) {
    return <div className={styles.teamScore}>
        <div className={styles.teamLabel}>{props.team}</div>
        <div className={styles.score}>{props.score}</div>
    </div>;
}