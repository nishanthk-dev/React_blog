import { useEffect, useState } from "react";
// import imageToBase64 from "../../helper/imgtobase64";
import uploadImage from "../../helper/uploadimage";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: "",
    image: "",
    category: "",
    description: "",
  });
  const userlogin = useSelector((state) => state.user.currentUser);
  useEffect(() => {
    if (!userlogin) {
      navigate("/");
    }
  }, []);

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const Image = await uploadImage(file);
    setData((prev) => {
      return {
        ...prev,
        image: Image.secure_url,
      };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };
  console.log(data);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(`${window.location.origin}/api/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: userlogin.token,
      },
      body: JSON.stringify(data),
    });
    setData({
      title: "",
      image: "",
      category: "",
      description: "",
    });
  };

  return (
    <div>
      <h1 className="text-3xl text-center">Write a Blog</h1>
      <form className="container mx-auto">
        <input
          type="text"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          placeholder="Title"
          name="title"
          id="title"
          onChange={handleChange}
          value={data.title}
          required
        />
        <div>
          <input type="file" name="image" id="image" onChange={handleUpload} />
          <img src={data.image.secure_url} alt="" width={100} />
        </div>
        <select name="category" id="category" onChange={handleChange} required>
          <option value=""></option>
          <option value="Fitness">Fitness</option>
          <option value="Diet">Diet</option>
          <option value="Technology">Tech</option>
          <option value="Travel">Travel</option>
          <option value="Books">Books</option>
        </select>
        <textarea
          name="description"
          className="border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
          id="description"
          value={data.description}
          onChange={handleChange}
          cols="60"
          required
        ></textarea>

        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg max-w-sm text-sm mx-auto w-full px-5 py-2.5 text-center block"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
