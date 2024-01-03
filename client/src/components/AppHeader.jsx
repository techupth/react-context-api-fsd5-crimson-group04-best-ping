import { useContext } from "react";
import { CounterContext } from "../contexts/CounterContext";

function AppHeader() {
  const contextData = useContext(CounterContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {contextData.CounterState}</h2>
    </div>
  );
}

export default AppHeader;
