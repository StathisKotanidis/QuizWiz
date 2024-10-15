import Loader from "../components/Loader/Loader";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import QuizQuestions from "../components/QuizQuestions/QuizQuestions";
import { useQuestions } from "../context/QuestionsProvider";
import styles from "./QuizGame.module.css";

function QuizGame() {
  const { isLoading } = useQuestions();
  console.log(isLoading);
  return isLoading ? (
    <Loader />
  ) : (
    <div className={styles.quizGameContainer}>
      <ProgressBar />
      <QuizQuestions />
    </div>
  );
}

export default QuizGame;
