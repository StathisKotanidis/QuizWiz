import { useState, useEffect } from "react";
import { useQuestions } from "../../context/QuestionsProvider";
import styles from "./QuizQuestions.module.css";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

function QuizQuestions() {
  const { questions } = useQuestions();
  const [index, setIndex] = useState(0);
  const [updatedQuestions, setUpdatedQuestions] = useState([]);

  useEffect(() => {
    if (questions && questions.length > 0) {
      const shuffledQuestions = questions.map((question) => {
        const options = [
          ...question.incorrect_answers,
          question.correct_answer,
        ];
        return {
          ...question,
          options: shuffleArray(options),
        };
      });

      setUpdatedQuestions(shuffledQuestions);
    }
  }, [questions]);
  console.log(updatedQuestions);

  return (
    <div className={styles.questionsContainer}>
      <h1>{updatedQuestions[index]?.question}</h1>
      <span>Answer 1</span>
      <span>Answer 2 </span>
      <span>Answer 3</span>
      <span>Answer 4</span>
    </div>
  );
}

export default QuizQuestions;
