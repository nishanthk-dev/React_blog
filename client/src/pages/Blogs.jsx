import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const Blogs = () => {
  const [data, setData] = useState([]);
  const params = useParams();
  const parameters = params.category;
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `${window.location.origin}/api/categorywiseBlog/${parameters}`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          }
        );
        const response = await result.json();
        setData(response.data);
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchData();
  }, [params.category]);

  console.log(data);
  return (
    <div className="flex">
      <div className=" w-full text-center">
        {data.map((blog) => (
          <div key={blog._id}>
            <div className="md:flex m-5">
              <img
                className="object-contain hidden md:block"
                width={250}
                src={blog.image}
                alt="blog"
              />
              <div className="">
                <h1 className="text-2xl font-bold p-3">{blog.title}</h1>
                <p className="line-clamp-3 md:px-10">{blog.description}</p>
                <Link className="text-blue-700" to={`${blog._id}`}>
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

export default Blogs;
