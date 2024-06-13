// let cloudinary = require('cloudinary').v2;
import cloudinary from "cloudinary.v2";

// Change cloud name, API Key, and API Secret below

cloudinary.config({
  cloud_name: "xx",
  api_key: "xx",
  api_secret: "xx",
});

// Change 'sample' to any public ID of your choice

cloudinary.uploader.destroy("sample", function (result) {
  console.log(result);
});
