import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartingScreen from "./pages/StartingScreen";
import QuizGame from "./pages/QuizGame";
import QuizScore from "./pages/QuizScore";
import PageNotFound from "./pages/PageNotFound";
import { FormProvider } from "./context/FormProvider.jsx";

export default function App() {
  return (
    <div className="appContainer">
      <BrowserRouter>
        <FormProvider>
          <Routes>
            <Route path="/" element={<StartingScreen />} />
            <Route path="quizgame" element={<QuizGame />} />
            <Route path="score" element={<QuizScore />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </FormProvider>
      </BrowserRouter>
    </div>
  );
}
