import { useQuestions } from "../../context/QuestionsProvider";
import styles from "./ProgressBar.module.css";
function ProgressBar() {
  const { questions } = useQuestions();
  return (
    <div className={styles.progressBarContainer}>
      <progress max={questions.length} value={1}></progress>
      <div className={styles.progressContainer}>
        <span>Question: 1</span>
        <span> 1/{questions.length}</span>
      </div>
    </div>
  );
}
export default ProgressBar;
