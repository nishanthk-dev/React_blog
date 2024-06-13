import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { user } from "../redux/user/userSlice";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const dispatch = useDispatch();
  const Navigate = useNavigate();
  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://react-blog-iota-flame.vercel.app/api/login",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    );
    const resdata = await response.json();

    // console.log(resdata);
    if (response.ok) {
      dispatch(user(resdata));
      Navigate("/");
    }
  };

  return (
    <div className="flex justify-center">
      <div className="w-3/4">
        <Link to="/">
          <h1 className="text-3xl font-bold p-5 text-center">MindfulSpark</h1>
        </Link>
        <hr />
        <div className="max-w-sm mx-auto py-8 flex justify-around">
          <Link className="" to="/login">
            Login
          </Link>
          <Link className="" to="/signup">
            Signup
          </Link>
        </div>
        <form className="max-w-sm mx-auto py-8" onSubmit={handleOnSubmit}>
          <div className="mb-5">
            <label htmlFor="email" className="block mb-2 text-sm font-medium">
              Your email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={handleOnChange}
              value={data.email}
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium "
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              onChange={handleOnChange}
              value={data.password}
              className=" border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              required
              placeholder="Password"
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
