import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import TestUI from "./TestUI";
import Canvas from "./Canvas/Canvas";
import reportWebVitals from "./reportWebVitals";

const IFrame = () => {
  return (
    <iframe
      src="http://localhost:3000/profile"
      width={"100%"}
      height="1000"
    ></iframe>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Canvas />
    {/* <IFrame/> */}
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
