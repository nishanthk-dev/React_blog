import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Homepg = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch("https://react-blog-iota-flame.vercel.app/api/allblogs", {
          method: "GET",
          headers: { "Content-Type": "application/json" },
        });
        const response = await result.json();
        console.log(response.data);
        setBlogs(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex">
      <div className=" w-full text-center">
        {blogs.map((blog) => (
          <div key={blog._id}>
            <div className="flex flex-col md:flex-row p-5 ">
              <img
                className="object-contain hidden md:block"
                width={250}
                src={blog.image}
                alt="blog"
              />
              <div className="">
                <h1 className="text-2xl font-bold p-3">{blog.title}</h1>
                <p className="line-clamp-3 px-10">{blog.description}</p>
                <Link
                  className="text-blue-700"
                  to={`${blog.category}/${blog._id}`}
                >
                  Readmore &gt;
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Homepg;
