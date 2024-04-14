import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Admin from "./pages/Admin";
import { Provider } from "react-redux";
import { setupStore } from "./app/store";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Admin />,
  },
]);
const store = setupStore()
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
