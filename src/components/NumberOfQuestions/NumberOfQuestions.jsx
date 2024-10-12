import styles from "./NumberOfQuestions.module.css";

function NumberOfQuestions({ onHandleUserInput }) {
  return (
    <div className={styles.questionsContainer}>
      <label htmlFor="questions">Questions</label>
      <input
        type="number"
        id="questions"
        onChange={(e) => onHandleUserInput(e, "getQuestions")}
      ></input>
    </div>
  );
}

export default NumberOfQuestions;
