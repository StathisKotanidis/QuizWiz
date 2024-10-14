import { createContext, useContext, useReducer } from "react";
import { useNavigate } from "react-router-dom";

const initialState = {
  questions: 0,
  difficulty: "easy",
  category: "General Knowledge",
};

function reducer(state, action) {
  switch (action.type) {
    case "getQuestions":
      return { ...state, questions: action.payload };
    case "getDifficulty":
      return { ...state, difficulty: action.payload };
    case "getCategory":
      return { ...state, category: action.payload };
    default:
      return state;
  }
}
const FormContext = createContext();

function FormProvider({ children }) {
  const [{ questions, difficulty, category }, dispatch] = useReducer(
    reducer,
    initialState
  );

  const navigate = useNavigate();

  function handleUserInput(e, type) {
    if (type === "getQuestions")
      dispatch({ type: "getQuestions", payload: e.target.value });
    if (type === "getDifficulty")
      dispatch({ type: "getDifficulty", payload: e.target.value });
    if (type === "getCategory")
      dispatch({ type: "getCategory", payload: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    navigate("quizgame");
  }

  return (
    <FormContext.Provider
      value={{
        questions,
        difficulty,
        category,
        onSubmit: handleSubmit,
        onUserInput: handleUserInput,
      }}
    >
      {children}
    </FormContext.Provider>
  );
}

function useForm() {
  const context = useContext(FormContext);
  return context;
}

export { FormProvider, useForm };
