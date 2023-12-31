import "./App.scss";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import AboutInfo from "./pages/AboutInfo/AboutInfo";
import BlogInfo from "./pages/BlogInfo/BlogInfo";
import ContactInfo from "./pages/ContactInfo/ContactInfo";
import PhotoGallery from "./pages/PhotoGallery/PhotoGallery";
import Error from "./pages/Error/Error";
import Home from "./pages/Home/Home";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Post from "./pages/Post/Post";

const Layout = () => {
  return (
    <div className="app">
      <ScrollToTop>
        <Navbar />
        <Outlet />
        <Footer />
      </ScrollToTop>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <AboutInfo />,
      },
      {
        path: "/gallery",
        element: <PhotoGallery />,
      },
      {
        path: "/blog",
        element: <BlogInfo />,
      },
      {
        path: "/blog/:blogId",
        element: <Post />,
      },
      {
        path: "/contact",
        element: <ContactInfo />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
