import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import searchImages from "./api";

searchImages();
console.log("sds", process.env.REACT_APP_API_KEY);

const el = document.getElementById("root");
const root = ReactDOM.createRoot(el);
console.log("sdsd", process.env.REACT_APP_API_KEY);
root.render(<App />);

///https://api.unsplash.com/photos/?client_id=YOUR_ACCESS_KEY
