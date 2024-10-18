import { useQuestions } from "../../context/QuestionsProvider";
import styles from "./Results.module.css";

function Results() {
  const { score, updatedQuestions } = useQuestions();
  const percentage = Math.round((score / updatedQuestions.length) * 100);

  function getResults(score, updatedQuestions) {
    if (percentage <= 29) {
      return `Don’t worry! You got ${score} out of ${updatedQuestions.length} questions correct (${percentage}%). It’s a great opportunity to learn more! ☺`;
    } else if (percentage >= 30 && percentage <= 49) {
      return `Keep going! You got ${score} out of ${updatedQuestions.length} right, which is (${percentage}%). With more practice, you'll get there! 🦾`;
    } else if (percentage >= 50 && percentage <= 69) {
      return `Good effort! 👏 You got ${score} out of ${updatedQuestions.length} questions correct, which is (${percentage}%). Keep practicing! 🦾`;
    } else if (percentage >= 70 && percentage <= 89) {
      return `Great work! 🙌 You got ${score} out of ${updatedQuestions.length} questions right. That's (${percentage}%).`;
    } else if (percentage >= 90 && percentage <= 99) {
      return `Bravo! 😃 🎉 You’re a quiz master with [score] out of ${updatedQuestions.length} correct answers. Amazing job with  (${percentage}%). 🤯`;
    } else {
      return `👑 You are a true QuizWiz Master.👑 You got ${score} out of ${updatedQuestions.length} questions correct, which is of course  (${percentage}%). 🥇🏆`;
    }
  }

  return (
    <div className={styles.resultsContainer}>
      <p>{getResults(score, updatedQuestions)}</p>
    </div>
  );
}

export default Results;
