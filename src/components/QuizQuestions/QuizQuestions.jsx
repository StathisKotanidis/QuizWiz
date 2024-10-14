import { useQuestions } from "../../context/QuestionsProvider";
import styles from "./QuizQuestions.module.css";

function QuizQuestions() {
  const { questions } = useQuestions;
  return <div>placeholder text</div>;
}

export default QuizQuestions;
