import axios from "axios";

const request = axios.create({
  baseURL: "/api",
});

request.defaults.withCredentials = true;

export const upload = (file) => {
  console.log(new File([file], file.name), "fileeeeeeeeeeeee");
  const formData = new FormData();
  formData.append("file", file);
  console.log(formData.get("file"), "forData");
  return request.post("/upload", formData);
};
