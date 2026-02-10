// import { StrictMode } from 'react'
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { TodosProvider } from "./store/Todos.tsx";

createRoot(document.getElementById("root")!).render(
  <TodosProvider>
    {/* // <StrictMode> */}
    <App />
    {/* // </StrictMode>, */}
  </TodosProvider>,
);
