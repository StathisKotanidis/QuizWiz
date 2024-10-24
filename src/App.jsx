import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { FormProvider } from "./context/FormProvider.jsx";
import { QuestionsProvider } from "./context/QuestionsProvider.jsx";
import Loader from "./components/Loader/Loader.jsx";

const StartingScreen = lazy(() => import("./pages/StartingScreen.jsx"));
const QuizGame = lazy(() => import("./pages/QuizGame.jsx"));
const QuizScore = lazy(() => import("./pages/QuizScore.jsx"));
const PageNotFound = lazy(() => import("./pages/PageNotFound.jsx"));

export default function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <Suspense fallback={<Loader />}>
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
        </Suspense>
      </BrowserRouter>
    </div>
  );
}
