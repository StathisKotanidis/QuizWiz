import styles from "./Logo.module.css";
import logo from "../../assets/logo.png";

function Logo() {
  return (
    <div className={styles.imageContainer}>
      <img src={logo} alt="quizwiz-logo" />
    </div>
  );
}

export default Logo;
