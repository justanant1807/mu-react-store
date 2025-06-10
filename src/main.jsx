import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

const updateSW = registerSW({
  onNeedRefresh() {
    if (confirm("New content available. Reload?")) {
      updateSW(true);
    }
  },
  onOfflineReady() {
    console.log("App is ready to work offline.");
  }
});

createRoot(document.getElementById("root")).render(<App />);
