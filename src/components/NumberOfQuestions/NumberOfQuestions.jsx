import { useForm } from "../../context/FormProvider.jsx";
import styles from "./NumberOfQuestions.module.css";

function NumberOfQuestions() {
  const { onUserInput } = useForm();
  return (
    <div className={styles.questionsContainer}>
      <label htmlFor="questions" className={styles.visuallyHidden}>
        Questions
      </label>
      <input
        placeholder="Enter the Amount of Questions"
        max={50}
        min={1}
        required
        type="number"
        id="questions"
        onChange={(e) => onUserInput(e, "getQuestions")}
      ></input>
    </div>
  );
}

export default NumberOfQuestions;
