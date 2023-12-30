import ReactDOM from "react-dom/client";
import "./index.css";

import {
  Route,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import App from "./App";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ChoseInfoPage from "./pages/ChoseInfoPage";
import PlansPage from "./pages/PlansPage";
import BrowserPage from "./pages/BrowserPage";
import WatchPage from "./pages/WatchPage";
import ErrorPage from "./pages/ErrorPage";
import RegisterPage from "./pages/RegisterPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />

      <Route path="/planInfo" element={<ChoseInfoPage />} />
      <Route path="/planInfo/plans" element={<PlansPage />} />

      <Route path="/browse" element={<BrowserPage />} />
      <Route path="/browse/watch/:id" element={<WatchPage />} />

      <Route path="/register" element={<RegisterPage />} />

      <Route path="*" element={<ErrorPage />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <RouterProvider router={router} />
);
