# QuizWiz

QuizWiz is an interactive quiz application that allows users to test their knowledge across various categories. Users can select the number of questions, difficulty level, and category to customize their quiz experience. The app dynamically fetches data from an external trivia API and provides real-time feedback for each question.

**Link to Project:** [QuizWiz Live App](your-live-app-link)

---

## How It's Made:

**Tech Used:** React, React Router, Context API, CSS Modules, Fetch API, HTML, Lazy Loading

QuizWiz is built entirely using React to create a smooth, responsive, and dynamic user experience. The app leverages **React Router** to handle multiple routes within the application, ensuring a seamless navigation between screens like the quiz game, results, and error pages. 

- **Context API** is used for state management, ensuring data like quiz results and user selections are accessible across different components.
- **Lazy loading** optimizes the initial load time, loading components only when they are needed.
- The trivia questions are fetched from the **Open Trivia Database API**, which supplies the app with questions for each quiz session.
- The app is fully responsive, adapting to various screen sizes to ensure a smooth user experience on any device.

---

## Features:
- Select difficulty, category, and the number of questions
- Displays real-time feedback with color-coded answers (correct/incorrect)
- Highlights the selected answer, and moves to the next question on a timer or user selection
- Responsive design for an optimized experience on mobile, tablet, and desktop
- Score and percentage displayed at the end of each quiz
- Favicon, logo, and smooth navigation between screens with React Router
- Error handling for invalid routes with a custom 404 page

---

## Optimizations:

Looking ahead, a few improvements can enhance QuizWiz even further:
- **Improved Score Handling:** Store previous game scores and display stats like highest scores or percentage trends across multiple games.
- **Category Search:** Instead of a dropdown, allow users to type and search for categories directly to filter quiz topics.
- **Performance Tweaks:** Use more advanced techniques like **service workers** to cache quiz data and improve load times during repeated playthroughs.

---

## Lessons Learned:

Working on QuizWiz allowed me to sharpen my React skills, especially with **React Router** and **Context API**. Implementing **lazy loading** taught me to optimize the app for performance while keeping the experience smooth. Additionally, working with an external API (Open Trivia Database) reinforced the importance of handling asynchronous data fetching and error handling effectively.

---

## More Projects

- [IP-Atlas](https://stathiskotanidis.github.io/IP-Atlas/)
- [NASA-APOD](https://stathiskotanidis.github.io/Nasa-APOD/)

