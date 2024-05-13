import axios from "axios";

export const serverUrl = "https://virtual-lab-u65s.onrender.com";
export const imageUrl =
  "https://virtual-lab-u65s.onrender.com/virtual_lab/api/v1/photo";

const handleRequest = async (method, URL, data = null) => {
  const headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}` || "",
  };

  const response = await axios({
    method,
    url: `${serverUrl}${URL}`,
    headers,
    data,
  });

  return response.data;
};

export const getData = async (URL) => {
  return handleRequest("get", URL);
};

export const postData = async (URL, data) => {
  return handleRequest("post", URL, data);
};

export const putData = async (URL, data) => {
  return handleRequest("put", URL, data);
};
export const patchData = async (URL, data) => {
  return handleRequest("patch", URL, data);
};
export const deleteData = async (URL) => {
  return handleRequest("delete", URL);
};
