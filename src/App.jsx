import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Content from "./components/Content/Content";
import Login from "./pages/Login";
import Homepage from "./pages/Homepage";
import Register from "./pages/RegisterForm";
import View from "./pages/Viewproduct";
import Cart from "./pages/Cart";
import Route from "./route/Route";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Route />
      </div>
    </>
  );
}

export default App;
