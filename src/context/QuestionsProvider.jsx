import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useForm } from "./FormProvider";

const QuestionsContext = createContext();

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    [array[i], array[randomIndex]] = [array[randomIndex], array[i]];
  }
  return array;
}

function QuestionsProvider({ children }) {
  const { amountOfQuestions, difficulty, category } = useForm();
  const [token, setToken] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [index, setIndex] = useState(0);
  const [answerClick, setAnswerClick] = useState(false);
  const [clickedAnswer, setClickedAnswer] = useState(null);
  const [updatedQuestions, setUpdatedQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [time, setTime] = useState(15);
  const didFetch = useRef(false);

  useEffect(
    function () {
      async function getSessionToken() {
        try {
          const res = await fetch(
            "https://opentdb.com/api_token.php?command=request"
          );
          if (!res) throw new Error("Couldn't retrieve a session token");
          const data = await res.json();
          setToken(data.token);
        } catch (err) {
          console.error(err);
        }
      }
      if (!didFetch.current) {
        getSessionToken();
        didFetch.current = true;
      }
    },
    [token]
  );

  useEffect(() => {
    if (token) {
      setIsLoading(true);
      const getQuestions = async () => {
        try {
          const res = await fetch(
            `https://opentdb.com/api.php?amount=${amountOfQuestions}&category=${category}&difficulty=${difficulty}&type=multiple&token=${token}`
          );
          const data = await res.json();
          setQuestions(data.results);
        } catch (err) {
          console.error("Error fetching quiz data:", err);
        } finally {
          setIsLoading(false);
        }
      };
      getQuestions();
    }
  }, [token, amountOfQuestions, difficulty, category]);

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
    const timer = setInterval(() => {
      setTime((prevTime) => {
        if (prevTime > 0) {
          return prevTime - 1;
        } else {
          handleIndex();
          return 0;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [index, handleIndex]);

  useEffect(() => {
    setTime(15);
  }, [index]);

  function handleAnswerClick(answer) {
    setAnswerClick(true);
    setClickedAnswer(answer);

    if (answer === updatedQuestions[index].correct_answer) {
      setScore((prevScore) => prevScore + 1);
    }
  }

  function handleIndex() {
    setAnswerClick(false);
    setIndex((prevIndex) => prevIndex + 1);
  }

  return (
    <QuestionsContext.Provider
      value={{
        updatedQuestions,
        isLoading,
        index,
        answerClick,
        score,
        time,
        onAnswerClick: handleAnswerClick,
        onButtonClick: handleIndex,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
}

function useQuestions() {
  const context = useContext(QuestionsContext);
  return context;
}

export { QuestionsProvider, useQuestions };
