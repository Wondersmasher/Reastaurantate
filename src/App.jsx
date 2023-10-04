import { Route, Routes } from "react-router-dom";
import {
  Home,
  About,
  Menu,
  Gallery,
  Reservation,
  SharedLayout,
  Blog,
  Contact,
} from "./pages";

const pages = [
  {
    page: <About />,
    path: "about",
  },
  {
    page: <Menu />,
    path: "menu",
  },
  {
    page: <Gallery />,
    path: "gallery",
  },
  {
    page: <Reservation />,
    path: "reservation",
  },
  {
    page: <Blog />,
    path: "blog",
  },
  {
    page: <Contact />,
    path: "contact",
  },
];
function App() {
  return (
    <main className="font-josefin">
      <Routes>
        <Route element={<SharedLayout />} path="/">
          <Route element={<Home />} index />
          {pages.map((page, id) => (
            <Route element={page.page} path={page.path} key={id} />
          ))}
        </Route>
      </Routes>
    </main>
  );
}

export default App;
