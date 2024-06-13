import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { persistor } from "../redux/Store";
import { useState } from "react";

const Navbar = () => {
  const userlogin = useSelector((state) => state.user.currentUser);
  const [user, setUser] = useState(userlogin);
  const handleLogout = () => {
    persistor.purge();
    setUser("");
  };
  console.log(userlogin);
  return (
    <div className="">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <div className="w-1/2 flex justify-end items-center">
          <Link to="/">
            <h1 className="md:text-3xl font-bold p-5">MindfulSpark</h1>
          </Link>
        </div>

        {user ? <Link to="/create">Write</Link> : <></>}
        {user ? (
          <button onClick={handleLogout}>Logout</button>
        ) : (
          <Link className="px-5" to="/login">
            Login/Signup
          </Link>
        )}
      </div>
      <hr />
      <ul className="flex flex-col items-center md:flex-row  md:justify-around py-3">
        <li>
          <Link to="Fitness">Fitness</Link>
        </li>
        <li>
          <Link to="Diet">Diet</Link>
        </li>
        <li>
          <Link to="Technology">Tech</Link>
        </li>
        <li>
          <Link to="Travel">Travel</Link>
        </li>
        <li>
          <Link to="Books">Books</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
