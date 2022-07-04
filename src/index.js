import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Detail from "./components/Detail/Detail";
import Header from "./components/commons/Header";
import Footer from "./components/commons/Footer";
import NotFound from "./components/NotFound/NotFound";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route path="detalle" element={<Detail />} /> */}
        <Route path="detalle" element={<Detail />}>
          <Route path=":detalleId" element={<Detail />} />
        </Route>
        <Route
          path="*"
          element={<NotFound />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
