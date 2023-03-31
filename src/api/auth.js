import axios from "axios";

const auth = async (body) => {
  const response = await axios.post("auth", body);
  return response.data;
};

export default auth;
