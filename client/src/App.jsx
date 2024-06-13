import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Homepg from "./pages/Homepage";
import Footer from "./components/Footer";
// import About from "./pages/About";
// import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Blogs from "./pages/Blogs";
import BlogPost from "./pages/BlogPost";
import CreateBlog from "./pages/CreateBlog";
import { Provider } from "react-redux";
import store from "./redux/Store";

function App() {
  const Layout = () => {
    return (
      <div className="flex justify-center">
        <div className="box-border w-3/4 ">
          <Navbar />
          <Outlet />
          <Footer />
        </div>
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Homepg />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        // {
        //   path: "/blogs",
        //   element: <Blogs />,
        // },
        {
          path: ":category",
          element: <Blogs />,
        },
        {
          path: ":category/:id",
          element: <BlogPost />,
        },
        {
          path: "/create",
          element: <CreateBlog />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/signup",
      element: <Signup />,
    },
  ]);
  return (
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  );
}

export default App;
