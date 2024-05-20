import React from "react";
import { UilUpload } from "@iconscout/react-unicons";
import axios from "axios";
import { toast } from "react-toastify";

const ImageUpload = ({ onChange = () => {} }) => {
  const imgbbAPI =
    "https://api.imgbb.com/1/upload?key=131f9c926fa8a5a553456a41727c66f4";
  const handleUploadImage = async (e) => {
    const file = e.target.files;
    if (!file) return;
    const bodyFormData = new FormData();
    bodyFormData.append("image", file[0]);
    const response = await axios({
      method: "post",
      url: imgbbAPI,
      data: bodyFormData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    console.log("🚀 ~ handleUploadImage ~ response:", response.data.data);
    const imageData = response.data.data;
    if (!imageData) {
      toast.error("Can not upload image");
      return;
    }
    const imageObj = {
      medium: imageData?.medium?.url,
      thumb: imageData?.thumb?.url,
      url: imageData?.url,
    };
    onChange("feature_image", imageObj);
  };
  return (
    <label className="w-full rounded-lg cursor-pointer flex items-center justify-center border border-dashed border-gray-200 h-[200px]">
      <input type="file" onChange={handleUploadImage} className="hidden" />
      <UilUpload></UilUpload>
    </label>
  );
};

export default ImageUpload;
