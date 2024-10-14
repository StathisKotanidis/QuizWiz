import { useForm } from "../../context/FormProvider";
import styles from "./DifficultySelect.module.css";

function DifficultySelect() {
  const { onUserInput } = useForm();
  return (
    <div className={styles.difficultyContainer}>
      <label htmlFor="difficulty">Difficulty</label>
      <select id="difficulty" onChange={(e) => onUserInput(e, "getDifficulty")}>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}

export default DifficultySelect;
