import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./App.tsx";
import SignUp from "./routes/SignUp.tsx";
import SignIn from "./routes/SignIn.tsx";

const root: HTMLElement = document.getElementById("root")!;

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      <Route element={<App />} path="/">
        <Route path="account">
          <Route element={<SignUp />} path="signup"></Route>
          <Route element={<SignIn />} path="signin"></Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter >
);