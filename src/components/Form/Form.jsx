import styles from "./Form.module.css";
import NumberOfQuestions from "../NumberOfQuestions/NumberOfQuestions";
import DifficultySelect from "../DifficultySelect/DifficultySelect";
import CategorySelect from "../CategorySelect/CategorySelect";
import Button from "../Button/Button";
import { useForm } from "../../context/FormProvider";

function Form() {
  const { onSubmit } = useForm();
  return (
    <form className={styles.formContainer} onSubmit={onSubmit}>
      <NumberOfQuestions />
      <DifficultySelect />
      <CategorySelect />
      <Button text="Play" type="submit" className={styles.buttonContainer} />
    </form>
  );
}
export default Form;

//const API_URL = `https://opentdb.com/api.php?amount=${questions}&category=${category}&difficulty=${difficulty}&type=multiple`;
