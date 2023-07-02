import { useState } from "react";
import "./App.css";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
// import Alerts from "./Components/Alerts";
import About from "./Components/About";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  // const [alert, setAlert] = useState(null);

  // const showAlert = (message, type) => {
  //   setAlert({
  //     message: message,
  //     type: type,
  //   });
  //   setTimeout(() => {
  //     setAlert(null);
  //   }, 1500);
  // };

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "rgb(66,66,66)";
      // showAlert("Dark Mode has been enabled!", "success");
      toast.success("Dark Mode has been enabled!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        pauseOnHover: false,
        autoClose: 1000,
        hideProgressBar: true,
      });
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      // showAlert("Light Mode has been enabled!", "success");
      toast.success("Light Mode has been enabled!", {
        position: toast.POSITION.BOTTOM_RIGHT,
        pauseOnHover: false,
        autoClose: 1000,
        hideProgressBar: true,
      });
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="TextUtils"
          aboutTitle="About Us"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route exact path="/about" element={<About mode={mode} />} />
          <Route
            exact
            path="/"
            element={
              <TextForm heading="Enter your text to covert it: " mode={mode} />
            }
          />
        </Routes>
        <ToastContainer />
        {/* <Alerts alert={alert}/> */}
      </BrowserRouter>
    </>
  );
}

export default App;
