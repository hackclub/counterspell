import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./pages/App";
import NotFound from "./pages/NotFound";

// To add your own page, uncomment the following import statement.
// Replace `ExampleCity` with the name of your city.
// E.g. Ottawa, ON -> `Ottawa`.
// import ExampleCity from "./pages/ExampleCity";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />

        {/*
          To add your own page, copy paste and uncomment the following code! 
          Replace `/example-city` and `ExampleCity` with the name of your city.
          E.g. Ottawa, ON -> `/ottawa` and `Ottawa`.
        */}
        {/* <Route path="/example-city" element={<ExampleCity />} /> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
