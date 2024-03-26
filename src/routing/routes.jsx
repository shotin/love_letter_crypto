import Home from "../pages/Home";
import Post from "../pages/Post";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Home />,
    protected: false,
  },
  {
    id: 2,
    path: "/post",
    element: <Post />,
    protected: false,
  },
];
