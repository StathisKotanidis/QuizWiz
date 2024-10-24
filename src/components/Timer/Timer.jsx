import styles from "./Timer.module.css";
import { useQuestions } from "../../context/QuestionsProvider";

function Timer() {
  const { time } = useQuestions();

  return (
    <div className={styles.timerContainer}>
      <span>{time}</span>
    </div>
  );
}

export default Timer;
