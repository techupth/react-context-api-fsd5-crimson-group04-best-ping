import { userContext } from "../context/userdata";
import { useContext } from "react";

function AppHeader(props) {
  const data = useContext(userContext);
  return (
    <div className="app-header-container">
      <h1 className="app-title">Products</h1>
      <h2>สวัสดีคุณ {data.name}</h2>
    </div>
  );
}

export default AppHeader;
