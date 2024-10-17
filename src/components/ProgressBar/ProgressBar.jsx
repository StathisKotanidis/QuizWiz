import { useQuestions } from "../../context/QuestionsProvider";
import styles from "./ProgressBar.module.css";
function ProgressBar() {
  const { updatedQuestions, index, score, answerClick } = useQuestions();
  return (
    <div className={styles.progressBarContainer}>
      <progress
        max={updatedQuestions.length}
        value={index + Number(answerClick !== null)}
      ></progress>
      <div className={styles.progressContainer}>
        <span>Question: {index + 1}</span>
        <span>
          Score: {score}/{updatedQuestions.length}
        </span>
      </div>
    </div>
  );
}
export default ProgressBar;
