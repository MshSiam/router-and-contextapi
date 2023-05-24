import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Components/Home/Home";
import Main from "./Components/Main/Main";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home /> },
        { path: "products", element: <div>this is products</div> },
        { path: "/contact", element: <div>this is contact</div> },
        { path: "/about", element: <div>this is about</div> },
        { path: "/inventory", element: <div>this is inventory</div> },
      ],
    },
  ]);

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
