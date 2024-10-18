import Results from "../components/Results/Results";
import Button from "../components/Button/Button";
import styles from "./QuizScore.module.css";
import { useNavigate } from "react-router-dom";

function QuizScore() {
  const navigate = useNavigate();

  function handlePlayAgainBtn() {
    navigate("/");
  }

  return (
    <div className={styles.quizScoreContainer}>
      <Results />
      <Button text="Play Again" onClick={handlePlayAgainBtn} />
    </div>
  );
}

export default QuizScore;
