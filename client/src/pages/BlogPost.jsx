import { useEffect, useState } from "react";

import { useParams } from "react-router-dom";

const BlogPost = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await fetch(
          `https://react-blog-iota-flame.vercel.app/api/singleblog/${params.id}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        const response = await result.json();
        setData(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [params.id]);
  console.log(data);

  return (
    <div className="p-5">
      <div className=" text-center">
        <h1 className=" text-2xl md:text-4xl font-bold">{data.title}</h1>
        <p>by {data.author} </p>
        <div className="box-border flex justify-center ">
          <img
            alt="img"
            className=" p-2 border border-black -z-10"
            src={data.image}
          />
        </div>
        <p className="p-5">{data.description}</p>
      </div>
    </div>
  );
};

export default BlogPost;
