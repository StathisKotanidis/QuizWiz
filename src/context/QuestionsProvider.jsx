import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useForm } from "./FormProvider";

const QuestionsContext = createContext();

function QuestionsProvider({ children }) {
  const { amountOfQuestions, difficulty, category } = useForm();
  const [token, setToken] = useState(null);
  const [questions, setQuestions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
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

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        isLoading,
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
