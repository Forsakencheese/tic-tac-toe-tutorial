//bringing in react
import { StrictMode } from "react";
//react's library to talk to web browsers
import { createRoot } from "react-dom/client";
//the styles of our components
import "./styles.css";
//the component we created in App.js
import App from "./App";

/**
 * We use createRoot() which creates a react root from
 * our document object, which represents our web page and
 * using the getElementById() method of document to get the
 * object representing the HTML with the passed in id of 'root'
 */
const root = createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);