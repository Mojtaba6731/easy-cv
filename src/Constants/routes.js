import Home from "../Components/Home/Home";
import About from "../Components/About/About";
import Resume from "../Components/Resumeh/Resumeh";

export const routes = [
  {
    path: "/",
    title: "Home",
    exact: true,
    publicPage: true,
    component: <Home />,
  },
  {
    path: "/About",
    title: "About",
    exact: true,
    publicPage: true,
    component: <About />,
  },
  {
    path: "/Resume",
    title: "Resume",
    exact: true,
    publicPage: false,
    component: <Resume />,
  },
];
