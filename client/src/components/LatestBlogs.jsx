import bgimg from "../../public/images/bgimg.png";

const LatestBlogs = () => {
  return (
    <div className="container w-full h-28 border m-2 px-2 ">
      <div className="flex w-full h-full items-center ">
        <img alt="img" className="p-2" width={130} src={bgimg} />
        <h1 className="font-bold line-clamp-3 text-center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis odit
          deleniti amet molestias laboriosam, voluptatem sapiente, accusamus
          enim dolores minima omnis nam rerum vel dolor vero iste doloremque
          magnam aperiam!
        </h1>
      </div>
    </div>
  );
};

export default LatestBlogs;
