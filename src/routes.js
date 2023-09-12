import { createBrowserRouter } from "react-router-dom";
// import App from "./src/App";
import Details from "./Details";
import App from "./App";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/details",
    element: <Details />,
  },
])

export default router;