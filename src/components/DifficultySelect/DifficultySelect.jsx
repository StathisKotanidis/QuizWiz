import { useForm } from "../../context/FormProvider";
import styles from "./DifficultySelect.module.css";

function DifficultySelect() {
  const { onUserInput } = useForm();
  return (
    <div className={styles.difficultyContainer}>
      <label htmlFor="difficulty" className={styles.visuallyHidden}>
        Difficulty
      </label>
      <select id="difficulty" onChange={(e) => onUserInput(e, "getDifficulty")}>
        <option value="" disabled selected>
          Select Difficulty
        </option>
        <option value="easy">Easy</option>
        <option value="medium">Medium</option>
        <option value="hard">Hard</option>
      </select>
    </div>
  );
}

export default DifficultySelect;
