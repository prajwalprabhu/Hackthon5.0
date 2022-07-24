import logo from "./logo.svg";
import "./App.css";
import Login from "./components/Login";
import Send from "./components/Send";
import Signup from "./components/Signup";
import { useEffect, useState } from "react";
function App() {
  useEffect(() => {
    if (!window.ethereum) {
      alert("Metamask not found");
    }
  }, []);
  let [logged, setLogged] = useState(false);
  let [signup, setsignup] = useState(true);
  return (
    // <div>
    //   {!logged && (
    //     <Login
    //       logged={(val) => {
    //         if (val == true) setLogged(true);
    //       }}
    //     />
    //   )}
    //   {signup && (
    //     <button
    //       onClick={() => {
    //         setsignup(false);
    //         setLogged(true);
    //       }}
    //     >
    //       Signup
    //     </button>
    //   )}
    //   {!signup && <Signup signed={(val) => {}} />}
    // </div>
    <>
      <Login />
      <Signup />
      <Send />
    </>
  );
}

export default App;
