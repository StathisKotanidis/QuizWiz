import { useReducer } from "react";
import styles from "./Form.module.css";

const initialState = {
  questions: 0,
  difficulty: "Easy",
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

  const API_URL = `https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=multiple`;

  return (
    <form className={styles.formContainer}>
      <div className={styles.questionsContainer}>
        <label htmlFor="questions">Questions</label>
        <input
          type="number"
          id="questions"
          onChange={(e) => handleUserInput(e, "getQuestions")}
        ></input>
      </div>

      <div className={styles.difficultyContainer}>
        <label htmlFor="difficulty">Difficulty</label>
        <select
          id="difficulty"
          onChange={(e) => handleUserInput(e, "getDifficulty")}
        >
          <option value="easy">Easy</option>
          <option value="medium">Medium</option>
          <option value="hard">Hard</option>
        </select>
      </div>

      <div className={styles.categoryContainer}>
        <label htmlFor="category">Category</label>
        <select
          id="category"
          onChange={(e) => handleUserInput(e, "getCategory")}
        >
          <option value="9">General Knowledge</option>
          <option value="10">Books</option>
          <option value="11">Films</option>
          <option value="12">Music</option>
          <option value="13">Musical & Theaters</option>
          <option value="14">Television</option>
          <option value="15">Video Games</option>
          <option value="16">Board Games</option>
          <option value="17">Science & Nature</option>
          <option value="18">Science: Computers</option>
          <option value="19">Science: Mathematics</option>
          <option value="20">Mythology</option>
          <option value="21">Sports</option>
          <option value="22">Geography</option>
          <option value="23">History</option>
          <option value="24">Politics</option>
          <option value="25">Art</option>
          <option value="26">Celebrities</option>
          <option value="27">Animals</option>
          <option value="28">Vehicles</option>
          <option value="29">Comics</option>
          <option value="30">Science: Gadgets</option>
          <option value="31">Japanese Anime & Manga</option>
          <option value="32">Cartoon & Animations</option>
        </select>
      </div>

      <div className={styles.buttonContainer}>
        <button>Play</button>
      </div>
    </form>
  );
}
export default Form;

// API link
