import { useReducer } from "react";
import styles from "./Form.module.css";
import NumberOfQuestions from "../NumberOfQuestions/NumberOfQuestions";
import DifficultySelect from "../DifficultySelect/DifficultySelect";
import CategorySelect from "../CategorySelect/CategorySelect";
import Button from "../Button/Button";

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

function Form() {
  const [{ questions, difficulty, category }, dispatch] = useReducer(
    reducer,
    initialState
  );

  function handleUserInput(e, type) {
    if (type === "getQuestions")
      dispatch({ type: "getQuestions", payload: e.target.value });
    if (type === "getDifficulty")
      dispatch({ type: "getDifficulty", payload: e.target.value });
    if (type === "getCategory")
      dispatch({ type: "getCategory", payload: e.target.value });
  }

  //const API_URL = `https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=multiple`;

  return (
    <form className={styles.formContainer}>
      <NumberOfQuestions
        onHandleUserInput={handleUserInput}
        questions={questions}
      />
      <DifficultySelect
        onHandleUserInput={handleUserInput}
        difficulty={difficulty}
      />
      <CategorySelect onHandleUserInput={handleUserInput} category={category} />

      <div className={styles.buttonContainer}>
        <Button text="Play" />
      </div>
    </form>
  );
}
export default Form;
