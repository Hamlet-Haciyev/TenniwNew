import "antd/dist/antd.min.css";
import Authorized from "./Authorized";
import UnAuthorized from "./UnAuthorized";
import { useSelector, useDispatch } from "react-redux";
import "./tailwind.css"
const App = () => {
  const logAuth = useSelector((state) => state.auth.authHorize);
  console.log(logAuth);
  return (
    <div className="App" style={{ backgroundColor: "#F5F5F5" }}>
      {logAuth ? <Authorized /> : <UnAuthorized />}
    </div>
  );
}

export default App;
