import { useForm } from "../../context/FormProvider.jsx";
import styles from "./CategorySelect.module.css";

function CategorySelect() {
  const { onUserInput } = useForm();
  return (
    <div className={styles.categoryContainer}>
      <label htmlFor="category">Category</label>
      <select id="category" onChange={(e) => onUserInput(e, "getCategory")}>
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
  );
}

export default CategorySelect;
