import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:1212/request",
  headers: {
    common: {
      "Content-Type": "multipart/form-data",
    },
  },
});

async function createRequest(request) {
  const response = await apiClient.post("/", request);
  return response.data;
}

export default {
  createRequest,
};
