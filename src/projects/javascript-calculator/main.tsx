import { StrictMode } from "react";
import "./index.css";
import ReactDOM from "react-dom/client";

export function App() {
  return (
    <>
      <h1>Hello Vite</h1>
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
