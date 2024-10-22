import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

export function App() {
  return (
    <>
      <h1>Hello Vite</h1>
    </>
  );
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
