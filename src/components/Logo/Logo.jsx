import styles from "./Logo.module.css";

function Logo() {
  return (
    <div className={styles.imageContainer}>
      <img src="./src/assets/logo.png" alt="quizwiz-logo"></img>
    </div>
  );
}

export default Logo;
