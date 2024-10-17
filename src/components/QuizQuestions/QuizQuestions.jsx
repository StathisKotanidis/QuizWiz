import { useQuestions } from "../../context/QuestionsProvider";
import { useForm } from "../../context/FormProvider";
import styles from "./QuizQuestions.module.css";
import he from "he";
import Button from "../Button/Button";
import Timer from "../Timer/Timer";

function QuizQuestions() {
  const {
    updatedQuestions,
    index,
    answerClick,
    onAnswerClick,
    onButtonClick,
    time,
  } = useQuestions();
  const { amountOfQuestions } = useForm();

  return (
    <div className={styles.quizContainer}>
      <div className={styles.questionsContainer}>
        <h1>
          {updatedQuestions[index]?.question
            ? he.decode(updatedQuestions[index].question)
            : "Loading..."}
        </h1>
        {updatedQuestions[index]?.options.map((answer) => (
          <button
            onClick={() => onAnswerClick(answer)}
            key={answer}
            disabled={answerClick || time <= 0}
            className={
              answerClick
                ? answer === updatedQuestions[index]?.correct_answer
                  ? styles.correctAnswer
                  : styles.incorrectAnswer
                : ""
            }
          >
            {he.decode(answer)}
          </button>
        ))}
      </div>
      <div className={styles.timerAndButton}>
        <Timer />
        {answerClick || time <= 0 ? (
          <Button
            text={index < amountOfQuestions - 1 ? "Next" : "Results"}
            className={styles.buttonContainer}
            onClick={onButtonClick}
          />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default QuizQuestions;
