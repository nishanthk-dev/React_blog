const url = `https://api.cloudinary.com/v1_1/dchjbkqvb/image/upload`;

const uploadImage = async (Image) => {
  const formData = new FormData();
  formData.append("file", Image);
  formData.append("upload_preset", "Blog_website");

  const dataResponse = await fetch(url, {
    method: "POST",
    body: formData,
  });
  return dataResponse.json();
};
export default uploadImage;
