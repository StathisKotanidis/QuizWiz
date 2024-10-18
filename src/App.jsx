import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartingScreen from "./pages/StartingScreen";
import QuizGame from "./pages/QuizGame";
import QuizScore from "./pages/QuizScore";
import PageNotFound from "./pages/PageNotFound";
import { FormProvider } from "./context/FormProvider.jsx";
import { QuestionsProvider } from "./context/QuestionsProvider.jsx";

export default function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <FormProvider>
          <Routes>
            <Route path="/" element={<StartingScreen />} />
            <Route
              path="quizgame"
              element={
                <QuestionsProvider>
                  <QuizGame />
                </QuestionsProvider>
              }
            />
            <Route
              path="score"
              element={
                <QuestionsProvider>
                  <QuizScore />
                </QuestionsProvider>
              }
            />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </FormProvider>
      </BrowserRouter>
    </div>
  );
}
