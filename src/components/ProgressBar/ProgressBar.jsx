import { useQuestions } from "../../context/QuestionsProvider";
import styles from "./ProgressBar.module.css";
function ProgressBar() {
  const { questions, index } = useQuestions();
  return (
    <div className={styles.progressBarContainer}>
      <progress max={questions.length} value={index}></progress>
      <div className={styles.progressContainer}>
        <span>Question: {index + 1}</span>
        <span> Score: 0/{questions.length}</span>
      </div>
    </div>
  );
}
export default ProgressBar;
