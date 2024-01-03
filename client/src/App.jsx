import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/HomePage.jsx";
import ViewProductPage from "./pages/ViewProductPage.jsx";
import { CounterContext } from "./contexts/CounterContext.jsx";
import { LevelContext } from "./contexts/LevelContext.jsx";

function App() {
  const userData = {
    username: "John",
    avatar: "https://placedog.net/100/100",
    level: "platinum",
  };

  return (
    <CounterContext.Provider
      value={{
        CounterState: userData.username,
      }}
    >
      <LevelContext.Provider
        value={{
          LevelState: userData.level,
        }}
      >
        <div className="App">
          <Router>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/product/view/:id" element={<ViewProductPage />} />
            </Routes>
          </Router>
        </div>
      </LevelContext.Provider>
    </CounterContext.Provider>
  );
}

export default App;
