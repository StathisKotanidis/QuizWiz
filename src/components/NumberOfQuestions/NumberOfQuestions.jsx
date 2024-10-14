import { useForm } from "../../context/FormProvider.jsx";
import styles from "./NumberOfQuestions.module.css";

function NumberOfQuestions() {
  const { onUserInput } = useForm();
  return (
    <div className={styles.questionsContainer}>
      <label htmlFor="questions">Questions</label>
      <input
        type="number"
        id="questions"
        onChange={(e) => onUserInput(e, "getQuestions")}
      ></input>
    </div>
  );
}

export default NumberOfQuestions;
