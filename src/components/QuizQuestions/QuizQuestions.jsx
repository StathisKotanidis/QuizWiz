import { useState, useEffect } from "react";
import { useQuestions } from "../../context/QuestionsProvider";
import { useForm } from "../../context/FormProvider";
import styles from "./QuizQuestions.module.css";
import he from "he";
import Button from "../Button/Button";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

function QuizQuestions() {
  const { questions, index, onButtonClick } = useQuestions();
  const { amountOfQuestions } = useForm();
  const [answerClick, setAnswerClick] = useState(false);
  const [clickedAnswer, setClickedAnswer] = useState(null);
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

  useEffect(() => {
    setAnswerClick(false);
    setClickedAnswer(null);
  }, [index]);

  const handleAnswerClick = (answer) => {
    setAnswerClick(true);
    setClickedAnswer(answer);
  };

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
            onClick={() => handleAnswerClick(answer)}
            key={answer}
            disabled={answerClick}
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
      {answerClick ? (
        <Button
          text={index < amountOfQuestions - 1 ? "Next" : "Results"}
          className={styles.buttonContainer}
          onClick={onButtonClick}
        />
      ) : (
        ""
      )}
    </div>
  );
}

export default QuizQuestions;
