import { HashRouter as BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./App";
import HomePage from "./HomePage";
import Register from "./Register";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/homepage" element={<HomePage />}></Route>
      </Routes>
    </BrowserRouter>
  );
};
export default App;
